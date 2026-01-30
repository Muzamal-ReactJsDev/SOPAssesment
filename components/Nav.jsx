"use client";

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    return (
        <div className="maxwidth">
            <navbar className="flex justify-between items-center p-6.5 bg-[#FFFFFF] rounded-[20px] mt-8">
                <div>
                    <Image src="/assets/Logo.png" width={200} height={48} alt="logo" />
                </div>
                <div className="pageLinks">
                    <ul className="flex gap-8">
                        <li>
                            <Link href="/Home">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Portfolio">
                                <span>Portfolio</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Services">
                                <span>Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Testimonial">
                                <span>Testimonial</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Pricing">
                                <span> Pricing Plan</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/FAQs">
                                <span>FAQs</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="bg-[#0B63E5] rounded-[7px] p-3 w-38 h-12 text-white text-[16px]  font-bold">
                        Contact Us
                    </button>
                </div>
            </navbar>
        </div>
    );
};

export default Nav;
