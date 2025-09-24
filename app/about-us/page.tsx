import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import React from 'react';
// import banner from "@/public/home/raw-image/about-us2.jpg"
import ReadyToSwitch from '@/components/SubmitReferral/ReadyToSwitch';
import AboutUsMainContent from '@/components/AboutUs/AboutUsMainContent';

const AboutUsPage = () => {
    return (
        <div>
            <ReuseableBanner banner="/about-us/about-us-doc2.jpg" text="About Us" />
            <AboutUsMainContent/>
            <ReadyToSwitch/>
        </div>
    );
};

export default AboutUsPage;