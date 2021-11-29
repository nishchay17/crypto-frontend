import React from "react";
import dynamic from "next/dynamic";

import Seo from "../components/seo";
import Layout from "../components/layout";

const Banner = dynamic(() => import("../sections/Landing/banner"));
const WhyChoose = dynamic(() => import("../sections/Landing/why-choose"));
const CallToAction = dynamic(() =>
  import("../sections/Landing/call-to-action")
);
const Footer = dynamic(() => import("../sections/Landing/Footer"));

import LANDING_NAV_LINKS from "../config/Nav/landingNavLinks";

export default function IndexPage() {
  return (
    <Layout navLinkData={LANDING_NAV_LINKS} withAuth={false}>
      <Seo
        title="Crypto Alert"
        description="CryptoAlert is a web based user friendly platform which revolves around the spheres of crypto-currency"
      />
      <Banner />
      <WhyChoose />
      <CallToAction />
      {/* <Footer /> */}
    </Layout>
  );
}
