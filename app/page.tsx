import AboutUs from "@/components/Home/AboutUs";
import BookConsultation from "@/components/Home/BookConsultation";
import HelpCenter from "@/components/Home/HelpCenter";
import HomeBanner from "@/components/Home/HomeBanner";

export default function Home() {
  return (
    <div className="">
      <HomeBanner/>
      <AboutUs/>
      <BookConsultation/>
      <HelpCenter/>
    </div>
  );
}
