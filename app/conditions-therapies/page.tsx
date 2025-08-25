import React from 'react';
import banner from "@/public/home/black-nurse2.jpg"
import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import ReadyToSwitch from '@/components/SubmitReferral/ReadyToSwitch';
import OurCondition from '@/components/ConditionTherapy/OurCondition';
import Counseling from '@/components/ConditionTherapy/Counseling';

const ConditionTherapiPage = () => {
    return (
        <div>
            <ReuseableBanner banner={banner} text="Conditions & Therapies"/>
            <OurCondition/>
            <Counseling/>
            <ReadyToSwitch/>
        </div>
    );
};

export default ConditionTherapiPage;