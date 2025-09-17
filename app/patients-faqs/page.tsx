import React from 'react';
import banner from "@/public/home/raw-image/patient-faqs.jpg"
import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import PatientsMainSection from '@/components/PatientsFaqs/PatientsMainSection';
import HelpCenter from '@/components/Home/HelpCenter';

const PatientsFaqPage = () => {
    return (
        <div>
            <ReuseableBanner banner="/home/raw-image/patient-faqs.jpg" text="Patient FAQs"/>
            {/* <PatientsMainSection/> */}
            <div className="maxContainer md:my-[100px] my-[60px]">
                <p className=' xl:text-lg  md:text-base text-sm text-[#4A4C56] leading-[180%]'>At Dr. Eric Weisbrot’s infusion clinic, we understand that beginning infusion therapy can feel overwhelming, especially if it’s your first time. To help ease the process, we’ve compiled answers to the most common questions patients ask. From what to expect during your first visit to how to prepare for your appointment, these FAQs are designed to give you clear, reassuring information so you can feel confident about your treatment. Our team is committed to making every visit as comfortable and stress-free as possible, with trained nurses available to guide you through each step. </p>
                <p className='md:mt-4 mt-3 xl:text-lg lg:text-sm md:text-base text-sm text-[#4A4C56] leading-[180%]'>
                    In addition to addressing patient concerns, our FAQ page also supports families and caregivers who want to know more about the process. You’ll find helpful details on insurance coverage, appointment preparation, and what happens during and after an infusion session. We encourage patients to reach out with any additional questions—our team believes no concern is too small when it comes to your health and comfort. By providing easy-to-understand information, Dr. Weisbrot’s practice ensures that every patient feels supported, informed, and cared for throughout their infusion therapy journey
                </p>

                <HelpCenter/>
            </div>

        </div>
    );
};

export default PatientsFaqPage;