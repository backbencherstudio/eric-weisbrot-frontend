import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import React from 'react';
import banner from "@/public/home/contact-us.jpg"
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