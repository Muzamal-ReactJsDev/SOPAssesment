import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#061C3D] pt-31 pb-8 px-75 '>
            <div className='maxwidth'>
                <div className='flex justify-between items-center gap-6'>
                    <div className='w-106'>
                        <Image src="/assets/footerlogo.png" alt='footer' width={149} height={48} />
                        <p className='w-106 h-18 font-normal text-[16px] mt-6 leading-6 text-[#B4BBC5]'>
                            We build readymade websites, mobile
                            applications, and elaborate online
                            business services.
                        </p>
                        <div className='text-white flex gap-3 mt-6'>
                            <p >Light Mode</p>
                            <Image src="/assets/mode.png" width={42} height={20} alt='mode' />
                            <p>Dark Mode</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[16px] text-[#FFFFFF] font-medium capitalize leading-[100%]'>QUICK LINKS</h2>
                        <ul className='mt-6 text-[#838E9E] flex flex-col gap-2'>
                            <li>
                                <Link href="/"><span>Portfolio</span></Link>
                            </li>
                            <li>
                                <Link href="/"><span>About</span></Link>

                            </li>
                            <li>
                                <Link href="/"><span>Services</span></Link>

                            </li>
                            <li>
                                <Link href="/"><span></span>Pricing Plans</Link>

                            </li>
                            <li>
                                <Link href="/"><span>Contact</span></Link>

                            </li>
                        </ul>

                    </div>
                    <div>
                        <h2
                            className='text-[16px] text-[#FFFFFF] font-medium capitalize leading-[100%]'
                        >SERVICES</h2>
                        <ul className='mt-6 text-[#838E9E] flex flex-col gap-2'>

                            <li>
                                <Link href="/"><span>UI/UX Design</span></Link>
                            </li>
                            <li>
                                <Link href="/"><span>Branding</span></Link>

                            </li>
                            <li>
                                <Link href="/"><span>llustration</span></Link>

                            </li>
                            <li>
                                <Link href="/"><span></span>Design Concept</Link>

                            </li>
                            <li>
                                <Link href="/"><span>App Design</span></Link>

                            </li>
                        </ul>

                    </div>
                    <div>
                        <h2
                            className='text-[16px] text-[#FFFFFF] font-medium capitalize leading-[100%]'>PRODUCT</h2>
                        <ul className='mt-6 text-[#838E9E] flex flex-col gap-2'>

                            <li>
                                <Link href="/"><span>Figma</span></Link>
                            </li>
                            <li>
                                <Link href="/"><span>Adobe</span></Link>

                            </li>
                            <li>
                                <Link href="/"><span>Dribbble</span></Link>

                            </li>
                            <li>
                                <Link href="/"><span></span>Themeforest</Link>

                            </li>
                            <li>
                                <Link href="/"><span>Behance</span></Link>

                            </li>
                        </ul>

                    </div>
                    <div className='flex flex-col gap-3'>
                        <Image src="/assets/facebook.png" width={130} height={44} alt='facebook' />
                        <Image src="/assets/linkedin.png" width={121} height={44} alt='linkedin' />
                        <Image src="/assets/twitter.png" width={112} height={44} alt='twitter' />
                        <Image src="/assets/insta.png" width={132} height={44} alt='insta' />
                    </div>
                </div>
                <div className='border-b mt-31'></div>
                <p className='mt-8 text-[16px] font-normal text-center text-[#FFFFFF]'>© 2021 - Golio UI Kit</p>
            </div>

        </div>
    )
}

export default Footer