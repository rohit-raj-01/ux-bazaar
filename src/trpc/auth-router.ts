import { AuthCredentialsValidator } from '../lib/validators/account-credentials-validator'
import { publicProcedure, router } from './trpc'
import { getPayloadClient } from '../get-payload'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.resend.com',
    secure: true,
    port: 465,
    auth: {
        user: 'resend',
        pass: process.env.RESEND_API_KEY,
    },
})

export const authRouter = router({
    createPayloadUser: publicProcedure
        .input(AuthCredentialsValidator)
        .mutation(async ({ input }) => {
            const { email, password } = input
            const payload = await getPayloadClient()

            // check if user already exists
            const { docs: users } = await payload.find({
                collection: 'users',
                where: {
                    email: {
                        equals: email,
                    },
                },
            })

            if (users.length !== 0)
                throw new TRPCError({ code: 'CONFLICT' })

            await payload.create({
                collection: 'users',
                data: {
                    email,
                    password,
                    role: 'user',
                },
            })
            const mailOptions = {
                from: 'onboarding@resend.dev',
                to: email,
                subject: 'Verify your email',
                text: `Please verify your email by clicking the link: <verification_link>`,
            }

            try {
                await transporter.sendMail(mailOptions)
                console.log('Verification email sent to', email)
            } catch (error) {
                console.error('Error sending email:', error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Failed to send verification email',
                })
            }

            return { success: true, sentToEmail: email }
        }),

    verifyEmail: publicProcedure
        .input(z.object({ token: z.string() }))
        .query(async ({ input }) => {
            const { token } = input

            const payload = await getPayloadClient()

            const isVerified = await payload.verifyEmail({
                collection: 'users',
                token,
            })

            if (!isVerified)
                throw new TRPCError({ code: 'UNAUTHORIZED' })

            return { success: true }
        }),

    signIn: publicProcedure
        .input(AuthCredentialsValidator)
        .mutation(async ({ input, ctx }) => {
            const { email, password } = input
            const { res } = ctx

            const payload = await getPayloadClient()

            try {
                await payload.login({
                    collection: 'users',
                    data: {
                        email,
                        password,
                    },
                    res,
                })

                return { success: true }
            } catch (err) {
                throw new TRPCError({ code: 'UNAUTHORIZED' })
            }
        }),
})
