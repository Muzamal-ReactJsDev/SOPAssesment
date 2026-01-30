"use client";
import Image from "next/image";
import React from "react";

const Golio = () => {
    return (
        <div className='bg-[#FFFFFF] py-31 px-75'>
            <div className="maxwidth">
                <div className="flex gap-34 ">
                    <div className="mt-11">
                        <h1 className="font-bold text-[56px]  leading-15  w-134 h-30">
                            Why Golio is best UI kit in the world.
                        </h1>
                        <p className="mt-6 font-normal text-[16px] w-134 h-18 leading-6 text-[#42526B]">
                            Cras at pellentesque eros. Nullam vitae sapien et felis eleifend
                            luctus. Nam ac dui cursus, efficitur ante sed, tempor sapien.
                            Praesent nec mattis enim. Mauris a laoreet purus.
                        </p>
                        <div className="mt-12">
                            <div className=" p-8 w-134 h-74 rounded-2xl gap-8 bg-[#FFF9EE] flex flex-col justify-center ">
                                <div className="flex gap-5">
                                    <Image
                                        src="/assets/duotone.png"
                                        width={40}
                                        height={40}
                                        alt="duotone"
                                    />
                                    <div>
                                        <h1 className="w-103 h-7 font-medium text-[20px] text-[#061C3D] leading-7">
                                            User Experience Design Team.
                                        </h1>
                                        <p className="mt-2 w-103 h-12 text-[16px] text-[#42526B] leading-6">
                                            Etiam sed vulputate nisl, eu elementum arcu. Vivamus
                                            dignissim tortor in tellus dictum pellentesque.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b text-[#061C3D]"></div>
                                <div className="flex gap-5">
                                    <Image src="/assets/cpu.png" width={40} height={40} alt="cpu" />
                                    <div>
                                        <h1 className="w-103 h-7 font-medium text-[20px] text-[#061C3D] leading-7">
                                            Simple & Clean Line of Code
                                        </h1>
                                        <p className="mt-2 w-103 h-12 text-[16px] text-[#42526B] leading-6">
                                            Vivamus dignissim tortor in tellus dictum pellentesque.
                                            Praesent mauris metus, dictum quis velit non.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/assets/designer.png"
                            alt="designer"
                            width={648}
                            height={648}
                        />
                    </div>
                </div>
                {/* satisfied */}
                <div className="mt-24">
                    <p className="text-center font-normal text-[20px] leading-7">We have <span className="text-[#0B63E5]">23k+</span> Satisfied & Trusted Customers</p>
                    {/* logos company */}
                    <div className="mt-6">
                        <Image src="/assets/companylogo.png" width={1320} height={56} alt="company logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Golio;
