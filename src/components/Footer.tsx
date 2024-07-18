'use client'

import { usePathname } from 'next/navigation'
import MaxWidthWrapper from './MaxWIdthWrapper'
import Link from 'next/link'
import Image from "next/image"
import logo from '/public/logo.png'

const Footer = () => {
    const pathname = usePathname()
    const pathsToMinimize = [
        '/verify-email',
        '/sign-up',
        '/sign-in',
    ]

    return (
        <footer className='bg-background flex-grow-0'>
            <MaxWidthWrapper>
                <div className='border-t border-foreground-800'>
                    {pathsToMinimize.includes(pathname) ? null : (
                        <div className='pb-8 pt-16'>
                            <div className='flex justify-center'>
                                <Image
                                    src={logo}
                                    alt='logo img'
                                    className="lg:h-[3rem] lg:w-[13rem] sm:h-[2rem] sm:w-[8rem] h-[1.5rem] w-[6rem] mr-3"
                                />
                            </div>
                        </div>
                    )}

                    {pathsToMinimize.includes(pathname) ? null : (
                        <div>
                            <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
                                <div className='absolute inset-0 overflow-hidden rounded-lg'>
                                    <div
                                        aria-hidden='true'
                                        className='absolute bg-foreground-50 inset-0 bg-gradient-to-br bg-opacity-90'
                                    />
                                </div>

                                <div className='text-center relative mx-auto max-w-sm'>
                                    <h3 className='font-semibold text-background-900'>
                                        Become a seller
                                    </h3>
                                    <p className='mt-2 text-sm text-muted-foreground'>
                                        If you&apos;d like to sell high-quality
                                        digital products, you can do so in
                                        minutes.{' '}
                                        <Link
                                            href='/sign-in?as=seller'
                                            className='whitespace-nowrap font-medium text-primary hover:text-foreground'>
                                            Get started &rarr;
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className='py-10 md:flex md:items-center md:justify-between'>
                    <div className='text-center md:text-left'>
                        <p className='text-sm text-muted-foreground'>
                            &copy; {new Date().getFullYear()} All Rights
                            Reserved
                        </p>
                    </div>

                    <div className='mt-4 flex items-center justify-center md:mt-0'>
                        <div className='flex space-x-8'>
                            <Link
                                href='#'
                                className='text-sm text-muted-foreground hover:text-gray-600'>
                                Terms
                            </Link>
                            <Link
                                href='#'
                                className='text-sm text-muted-foreground hover:text-gray-600'>
                                Privacy Policy
                            </Link>
                            <Link
                                href='#'
                                className='text-sm text-muted-foreground hover:text-gray-600'>
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer
