"use client";

import { useForm } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import { useState } from "react";
import SelectedIcon from "../Icons/SelectedIcon";
import UnSelectedIcon from "../Icons/UnSelectedIcon";
import { Calendar22 } from "./BirthCalender";
import { toast } from "sonner";

type FormData = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    state: string;
    message: string;
    source?: string;
    therapies:string;
    conditions:string;
    dateOfBirth?: Date; 
};

const options = [
    "Online Search",
    "Social Media",
    "Doctor's Office",
    "Television",
    "Billboard / Outdoor Advertising",
    "Pharmaceutical Company",
    "Insurance Company",
    "Friend / Colleague / Word of Mouth",
    "Drove / Walked by one of our centers",
    "Event",
    "Other"
]

export default function RequestAppointmentForm() {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        reset,
    } = useForm<FormData>({
        defaultValues: {
            firstName: "",
        lastName: "",
        phone: "",
        email: "",
        state: "",
        message: "",
        source: "",
        therapies: "",
        conditions: "",
        dateOfBirth: undefined,
        },
    });



    const onSubmit = async (data: FormData) => {


   
       try {
         const formData = {
           formData: data,
           formType: 'appointment'
         }
   
         const response = await fetch("/api/submitForm", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         });
         const result = await response?.json()
   
         if (result?.success) {
           toast.success(result?.message || "Appointment request submitted")
         } else {
            toast.error("Form submission failed.")
         }
         // Handle form submission here
       } catch (error) {
         console.log(error);
       }
       finally {
         setSelectedOptions([])
        reset()
       }
     };



    const handleOptionChange = (option: string) => {
        const newSelection = selectedOptions.includes(option)
            ? selectedOptions.filter(item => item !== option)
            : [...selectedOptions, option]

        setSelectedOptions(newSelection)
        setValue("source", newSelection.join(", "))
    }



    return (
        <div className="maxContainer md:my-[100px] my-[60px]">
            <div className="">
                <div className="flex flex-col gap-[15px] justify-center items-center mb-[15px] text-center">
                    <h1 className="headerText text-[#161721] !font-semibold">Request an Appointment</h1>
                    <p className="text-[#4A4C56] leading-[180%]">
                        Have a question? Send us a message, and we'll get right back to you.
                    </p>
                </div>
                <div className="rounded-[24px] border border-[#0000000D] lg:p-[56px] md:p-[32px] p-4">
                    <h1 className="xl:text-[32px] md:text-[28px] text-2xl font-medium leading-[130%] text-[#1D1F2C] lg:mb-8 md:mb-6 mb-4">
                        Send us a message
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* First Name & Last Name */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-medium mb-1.5"
                                >
                                    Patient Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    {...register("firstName", {
                                        required: "First name is required",
                                    })}
                                    className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm "
                                />
                                {errors.firstName && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="text-[#4A4C56] block opacity-0 lg:text-xl md:text-lg text-base leading-[180%]  font-medium mb-1.5"
                                >
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    {...register("lastName")}
                                    className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm "
                                />
                                {errors.lastName && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.lastName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Phone & Email */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-medium mb-1.5"
                                >
                                    Phone<span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter your name"
                                    {...register("phone", {
                                        required: "Phone number is required",
                                    })}
                                    className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm "
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-medium mb-1.5"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your name"
                                    {...register("email", {
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm "
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* state */}
                        <div>
                            <label className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-semibold mb-1.5">
                                Select your state
                            </label>
                            <Select value={watch("state") || ""}  onValueChange={(value) => setValue("state", value)} defaultValue="">
                                <SelectTrigger className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] !xl:py-[15px] !py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm !h-[56px] cursor-pointer">
                                    <SelectValue placeholder="Select your state" className="" />
                                </SelectTrigger>
                                <SelectContent>
                                    {states.map((state, index) => (
                                        <SelectItem key={index} className="md:text-lg text-base" value={state.value}>
                                            {state.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className=""> 
                             <label className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-semibold mb-1.5">
                                Date of birth<span className="text-red-500">*</span>
                            </label>
                            <Calendar22   value={watch("dateOfBirth")}
        onChange={(date) => setValue("dateOfBirth", date)}  />
                        </div>
                        {/* therapy */}
                        <div>
                            <label className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-semibold mb-1.5">
                                What therapy have you been prescribed?
                            </label>
                            <Select value={watch("therapies") || ""}  onValueChange={(value) => setValue("therapies", value)} defaultValue="">
                                <SelectTrigger className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] !xl:py-[15px] !py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm !h-[56px] cursor-pointer">
                                    <SelectValue placeholder="Please Select" className="" />
                                </SelectTrigger>
                                <SelectContent>
                                    {therapyPrescribed.map((therapy, index) => (
                                        <SelectItem key={index} className="md:text-lg text-base" value={therapy.value}>
                                            {therapy.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        {/* condition */}
                        <div>
                            <label className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-semibold mb-1.5">
                                What is your condition?
                            </label>
                            <Select value={watch("conditions") || "" } onValueChange={(value) => setValue("conditions", value)} defaultValue="">
                                <SelectTrigger className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] !xl:py-[15px] !py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm !h-[56px] cursor-pointer">
                                    <SelectValue placeholder="Please Select" className="" />
                                </SelectTrigger>
                                <SelectContent>
                                    {medicalConditionsOptions.map((condition, index) => (
                                        <SelectItem key={index} className="md:text-lg text-base" value={condition.value}>
                                            {condition.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        

                        {/* How did you hear about us */}
                        <div className="py-3.5 px-4 bg-[#F3F6FC] border border-[#E9E9EA]  rounded-md ">
                            <label className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-semibold mb-1.5">
                                How did you hear about us?
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3  max-w-[660px]">
                                {options.map((option) => (
                                    <div key={option} className="relative">
                                        <div
                                            className="flex items-center space-x-3 cursor-pointer group "
                                            onClick={() => handleOptionChange(option)}
                                        >
                                            <div className="relative">
                                                {selectedOptions.includes(option) ? (
                                                    <SelectedIcon />
                                                ) : (
                                                    <UnSelectedIcon />
                                                )}
                                            </div>
                                            <span
                                                className={`
                 md:text-base text-sm leading-[180%] transition-colors duration-200
                  ${selectedOptions.includes(option)
                                                        ? "text-blue-900"
                                                        : "text-black   group-hover:text-gray-900"
                                                    }
                `}
                                            >
                                                {option}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        {/* Comment */}
                        <div className="mt-8">
                            <label
                                htmlFor="message"
                                className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-semibold mb-1.5"
                            >
                                Additional comments
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                placeholder="Type your Comment here"
                                {...register("message")}
                                className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] !xl:py-[15px] !py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm "
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                        </div>


                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full btn justify-center md:text-lg !leading-[160%] font-medium !h-[60px]"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const states = [
    { value: "Connecticut", label: "Connecticut" },
    { value: "Maine", label: "Maine" },
    { value: "Massachusetts", label: "Massachusetts" },
    { value: "New Hampshire", label: "New Hampshire" },
    { value: "Rhode Island", label: "Rhode Island" },
    { value: "Vermont", label: "Vermont" },
];

const therapyPrescribed = [
  { value: "Actemra", label: "Actemra" },
  { value: "Benlysta", label: "Benlysta" },
  { value: "Cimzia", label: "Cimzia" },
  { value: "Cinqair", label: "Cinqair" },
  { value: "Cinryze", label: "Cinryze" },
  { value: "Entyvio", label: "Entyvio" },
  { value: "Fasenra", label: "Fasenra" },
  { value: "Ferrlecit", label: "Ferrlecit" },
  { value: "Inflectra", label: "Inflectra" },
  { value: "IVIG", label: "IVIG" },
  { value: "Krystexxa", label: "Krystexxa" },
  { value: "Lemtrada", label: "Lemtrada" },
  { value: "Leqvio", label: "Leqvio" },
  { value: "Migraine", label: "Migraine" },
  { value: "Monoferric", label: "Monoferric" },
  { value: "Nucala", label: "Nucala" },
  { value: "Ocrevus", label: "Ocrevus" },
  { value: "Orencia", label: "Orencia" },
  { value: "Prolia", label: "Prolia" },
  { value: "Remicade", label: "Remicade" },
  { value: "Renflexis", label: "Renflexis" },
  { value: "Rituxan", label: "Rituxan" },
  { value: "Simponi Aria", label: "Simponi Aria" },
  { value: "Stelara IV", label: "Stelara IV" },
  { value: "Tysabri", label: "Tysabri" },
  { value: "Xolair", label: "Xolair" },
  { value: "Zoledronic", label: "Zoledronic" }
];
const medicalConditionsOptions = [
  { value: "Alzheimer’s Disease", label: "Alzheimer’s Disease" },
  { value: "Ankylosing Spondylitis", label: "Ankylosing Spondylitis" },
  { value: "Chronic Migraines", label: "Chronic Migraines" },
  { value: "Fabry Disease", label: "Fabry Disease" },
  { value: "Gaucher Disease", label: "Gaucher Disease" },
  { value: "Gout", label: "Gout" },
  { value: "Lupus", label: "Lupus" },
  { value: "Multiple Sclerosis", label: "Multiple Sclerosis" },
  { value: "Myasthenia Gravis", label: "Myasthenia Gravis" },
  { value: "Osteoporosis", label: "Osteoporosis" },
  { value: "Psoriatic Arthritis", label: "Psoriatic Arthritis" },
  { value: "Psoriasis", label: "Psoriasis" },
  { value: "Rheumatoid Arthritis", label: "Rheumatoid Arthritis" },
  { value: "Severe Asthma", label: "Severe Asthma" },
  { value: "Thyroid Eye Disease", label: "Thyroid Eye Disease" },
  { value: "Ulcerative Colitis", label: "Ulcerative Colitis" },
];




