import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import React from 'react';
import banner from "@/public/home/raw-image/submit2.jpg";
import HowCanWeHelp from '@/components/SubmitReferral/HowCanWeHelp';
import ReadyToSwitch from '@/components/SubmitReferral/ReadyToSwitch';

const SubmitRefarralPage = () => {
    return (
        <div>
            <ReuseableBanner banner="/home/raw-image/submit2.jpg" text="Submit referral"/>
            <HowCanWeHelp/>
            <ReadyToSwitch/>
        </div>
    );
};

export default SubmitRefarralPage;