"use client"
import Image from 'next/image'
import React from 'react'

const banner = () => {
    return (
        <div className='maxwidth'>
            {/* for now i am using just image */}
            <div className='mt-24'>
                <Image src="/assets/videoImage.png" width={1320} height={608} alt='video' />
            </div>
        </div>
    )
}

export default banner