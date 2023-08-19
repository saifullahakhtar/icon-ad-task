// Layout
import Layout from "@/components/layout/Layout";

// Components
import Hero from "@/components/sections/Hero";
import OurVision from "@/components/sections/OurVision";
import WhyRms from "@/components/sections/WhyRms";
import OurCompany from "@/components/sections/OurCompany";
import MeetTheTeam from "@/components/sections/MeetTheTeam";
import Message from "@/components/sections/Message";
import Instagram from "@/components/sections/Instagram";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OurVision />
      <WhyRms />
      <OurCompany />
      <MeetTheTeam />
      <Message />
      <Instagram />
    </Layout>
  );
}
