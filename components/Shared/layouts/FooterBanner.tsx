"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function FooterBanner() {

     const pathname = usePathname()
     
     const isBannerNotAvailable =  pathname.includes("/conditions-therapies") ||
  pathname.includes("/about-us") ||
  pathname.includes("/submit-referral");

    if(isBannerNotAvailable){
        return;
    }

  return (
    <div className='h-[150px] md:w-[calc(100vw-40px)] w-[calc(100vw-20px)] bg-[#162F73] mx-auto md:rounded-t-4xl rounded-t-2xl -mb-[75px] relative z-20  flex items-center'>
        <div className='flex lg:flex-row flex-col items-center justify-center gap-10 w-full md:p-0 p-4'>
            <div>
                <h2 className="md:text-2xl text-xl text-white">Ready to switch Dr. Eric Weisbrot</h2>
            </div>
            <div className=" h-12 w-[1px] bg-white lg:block hidden"></div>
            <div className="flex  md:gap-8 gap-4">
                <Link className='md:text-base text-sm   md:font-semibold font-medium md:px-6 px-4 md:py-3 py-2 rounded-[5px] bg-white text-[#17375a]' href="/request-an-appointment ">Request an appointment</Link>
                <Link className='md:text-base text-sm  md:font-semibold font-medium md:px-6 px-4 md:py-3 py-2 rounded-[5px] bg-white text-[#17375a]' href="/submit-referral">Submit A Referral</Link>
            </div>
        </div>
    </div>
  )
}
