import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import React from 'react';
import banner from "@/public/about-us/about-banner.png"
import ReadyToSwitch from '@/components/SubmitReferral/ReadyToSwitch';
import AboutUsMainContent from '@/components/AboutUs/AboutUsMainContent';

const AboutUsPage = () => {
    return (
        <div>
            <ReuseableBanner banner={banner} text="About Us" />
            <AboutUsMainContent/>
            <ReadyToSwitch/>
        </div>
    );
};

export default AboutUsPage;