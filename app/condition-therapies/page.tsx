import React from 'react';
import banner from "@/public/conditon/conditionbanner.png"
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