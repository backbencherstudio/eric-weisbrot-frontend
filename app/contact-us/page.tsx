import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import React from 'react';
// import banner from "@/public/home/amercian-group.jpg"
import ContactUsForm from '@/components/ContactUs/ContactUsForm';

const ContactUsPage = () => {
    return (
        <div>
            <ReuseableBanner banner="/contact-us/contact-us2.jpg" text="Contact us" />
            <ContactUsForm/>
        </div>
    );
};

export default ContactUsPage;