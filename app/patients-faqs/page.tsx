import React from 'react';
import banner from "@/public/patients-faqs/patientsFaqsBanner.png"
import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import PatientsMainSection from '@/components/PatientsFaqs/PatientsMainSection';

const PatientsFaqPage = () => {
    return (
        <div>
            <ReuseableBanner banner={banner} text="Patient FAQs"/>
            <PatientsMainSection/>
        </div>
    );
};

export default PatientsFaqPage;