import ReuseableBanner from '@/components/Reusable/ReuseableBanner';
import React from 'react';
import banner from "@/public/home/raw-image/request-appointment-image.jpg"
import ContactUsForm from '@/components/ContactUs/ContactUsForm';
import RequestAppointmentForm from '@/components/RequestAppointment/RequestAppointmentForm';

export default function RequestAnAppointmentPage() {
  return (
    <div>
      <ReuseableBanner banner={banner} text="Request an Appointment" />
      <RequestAppointmentForm />
    </div>
  )
}
