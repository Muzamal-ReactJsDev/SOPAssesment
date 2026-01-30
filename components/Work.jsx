"use client";
import React from "react";
import Image from "next/image";
const Work = () => {
    return (
        <div className="bg-yellow-50">
            <div className="maxwidth">
                <div className="flex gap-28">
                    <div>
                        <Image
                            src="/assets/mindSet.png"
                            width={860}
                            height={612}
                            style={{
                                objectPosition: "contain",
                                width: "100%",
                                height: "100% !important",
                            }}
                            alt="mind"
                        />
                    </div>
                    <div className="flex flex-col gap-10 py-32">
                        <h2 className="w-162 h-30 font-bold text-[56px] text-[#061C3D] leading-15">
                            Have a project in mind! Let’s work together.
                        </h2>
                        <p className="w-156 h-21 text-[20px] text-[#061C3D] font-normal">
                            Nam tincidunt condimentum arcu, rhoncus interdum eros vulputate
                            ut. Maecenas molestie sodales tristique. Nunc scelerisque tortor
                            vitae ipsum rhoncus auctor.{" "}
                        </p>
                        <div className="relative">
                            <input
                                type="text"
                                className="bg-white p-3 rounded-xl w-162 h-18 "
                                placeholder="Email address"
                            />
                            <button className=" absolute bg-[#0B63E5] rounded-[7px] p-3 w-38 h-12 text-white text-[16px]  font-bold right-3 top-3">
                                Get A Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
