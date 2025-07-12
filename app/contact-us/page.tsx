import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import React from 'react';
import banner from "@/public/contact-us/contact-us-banner.png"
import ContactUsForm from '@/components/ContactUs/ContactUsForm';

const ContactUsPage = () => {
    return (
        <div>
            <ReuseableBanner banner={banner} text="Contact us" />
            <ContactUsForm/>
        </div>
    );
};

export default ContactUsPage;