import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import React from 'react';
import banner from "@/public/submit-referaral/submit-banner.png";
import HowCanWeHelp from '@/components/SubmitReferral/HowCanWeHelp';
import ReadyToSwitch from '@/components/SubmitReferral/ReadyToSwitch';

const SubmitRefarralPage = () => {
    return (
        <div>
            <ReuseableBanner banner={banner} text="Submit referral"/>
            <HowCanWeHelp/>
            <ReadyToSwitch/>
        </div>
    );
};

export default SubmitRefarralPage;