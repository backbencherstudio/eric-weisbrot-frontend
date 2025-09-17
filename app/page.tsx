import AboutUs from "@/components/Home/AboutUs";
// import BookConsultation from "@/components/Home/BookConsultation";
// import HelpCenter from "@/components/Home/HelpCenter";
import HomeBanner from "@/components/Home/HomeBanner";
import HowCanWeHelp from "@/components/SubmitReferral/HowCanWeHelp";

export default function Home() {
  return (
    <div className="">
      <HomeBanner/>
      <AboutUs/>
      {/* <BookConsultation/> */}
      {/* <HelpCenter/> */}
      <HowCanWeHelp/>
    </div>
  );
}
