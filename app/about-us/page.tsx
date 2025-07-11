import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import React from 'react';
import banner from "@/public/about-us/about-banner.png"
import ReadyToSwitch from '@/components/SubmitReferral/ReadyToSwitch';

const AboutUsPage = () => {
    return (
        <div>
            <ReuseableBanner banner={banner} text="About Us" />

            <ReadyToSwitch/>
        </div>
    );
};

export default AboutUsPage;