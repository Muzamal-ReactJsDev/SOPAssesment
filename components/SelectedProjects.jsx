"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SelectedProjects = () => {
    return (
        <div className="bg-[#F5F6F7] py-31 px-75">

            <div className="maxwidth  gap-18 ">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-[56px] text-[#061C3D] font-bold">
                        Selected projects
                    </h1>
                    <div>
                        <p className="w-162 h-13 text-[18px] font-normal text-center mt-6 ">
                            Cras imperdiet est eget nulla fringilla, sit amet volutpat sem
                            tristique. Pellentesque quis augue ac mauris posuere vehicula.
                        </p>
                    </div>
                </div>
                {/* images */}
                <div className="flex gap-10.5 mt-18">
                    {/* 1st */}
                    <div>
                        <Image
                            src="/assets/projectPhoto1.png"
                            width={412}
                            height={464}
                            className="rounded"
                            alt="projects"
                        />
                        <div className="flex gap-2 flex-col mt-8">
                            <h2 className="text-[#061C3D] font-medium text-[20px] leading-7">
                                E-tutor - education & online LMS
                            </h2>
                            <Link href="/">
                                <span className="text-[#0B63E5] font-medium leading-5 text-[14px]">
                                    View Case Study ➡
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* 2nd */}
                    <div>
                        <Image
                            src="/assets/projectPhoto2.png"
                            width={412}
                            height={464}
                            className="rounded"
                            alt="projects"
                        />
                        <div className="flex gap-2 flex-col mt-8">
                            <h2 className="text-[#061C3D] font-medium text-[20px] leading-7">
                                Pagoupon - Properties Agency Website
                            </h2>
                            <Link href="/">
                                <span className="text-[#0B63E5] font-medium leading-5 text-[14px]">
                                    View Case Study ➡
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div>
                        <Image
                            src="/assets/projectPhoto3.png"
                            width={412}
                            height={464}
                            className="rounded"
                            alt="projects"
                        />
                        <div className="flex gap-2 flex-col mt-8">
                            <h2 className="text-[#061C3D] font-medium text-[20px] leading-7">
                                Find workspace - Mobile app design
                            </h2>
                            <Link href="/">
                                <span className="text-[#0B63E5] font-medium leading-5 text-[14px]">
                                    View Case Study ➡
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedProjects;
