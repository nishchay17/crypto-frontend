import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Banner from "../sections/Landing/banner";
import WhyChoose from "../sections/Landing/why-choose";
import CallToAction from "../sections/Landing/call-to-action";
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
    </Layout>
  );
}
