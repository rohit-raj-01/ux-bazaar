import MaxWidthWrapper from "./MaxWIdthWrapper"
import Link from "next/link"
import Image from "next/image"
import logo from '/public/logo.png'
import NavItems from './NavItems'
import { buttonVariants } from '@/components/ui/button'
import ThemeToggler from './ThemeToggler'
import { cookies } from "next/headers"
import UserAccountNav from './UserAccountNav'
import { getServerSideUser } from '@/lib/payload-utils'
import Cart from "./Cart"
import MobileNav from "./MobileNav"

const Navbar = async () => {
    const nextCookies = cookies()
    const { user } = await getServerSideUser(nextCookies)
    return (
        <div className="z-50 top-0 inset-0 h-16">
            <header className="relative ">

                <MaxWidthWrapper>
                    <div className="border-b">
                        <div className="flex h-20 items-center">
                            <MobileNav />
                            <div className="ml-4 flex lg:ml-0">
                                <Link href='/'>
                                    <Image
                                        src={logo}
                                        alt='logo img'
                                        className="lg:h-[3rem] lg:w-[13rem] sm:h-[2rem] sm:w-[8rem] h-[1.5rem] w-[6rem] mr-3"
                                    />
                                </Link>
                            </div>

                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems />
                            </div>

                            <div className='ml-auto flex items-center'>
                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                    {user ? null : (
                                        <Link
                                            href='/sign-in'
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}>
                                            Sign in
                                        </Link>
                                    )}

                                    {user ? null : (
                                        <span
                                            className='h-6 w-px bg-gray-200'
                                            aria-hidden='true'
                                        />
                                    )}
                                    {user ? (
                                        <UserAccountNav user={user} />
                                    ) : (
                                        <Link
                                            href='/sign-up'
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}>
                                            Create account
                                        </Link>
                                    )}

                                    {user ? (
                                        <span
                                            className='h-6 w-px bg-gray-200'
                                            aria-hidden='true'
                                        />
                                    ) : null}

                                    {user ? null : (
                    <div className='flex lg:ml-6'>
                      <span
                        className='h-6 w-px bg-gray-200'
                        aria-hidden='true'
                      />
                    </div>
                  )}

                                    <div className='ml-4 flow-root lg:ml-6'>
                                        <Cart />
                                    </div>
                                    <span
                                        className='h-6 w-px bg-gray-200'
                                        aria-hidden='true'
                                    />

                                    <ThemeToggler />
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar