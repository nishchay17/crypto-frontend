import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SignupSection from "../sections/SignupSection";

function Signup() {
  return (
    <Layout withAuth={false}>
      <Seo
        title="Crypto Alert | Signup"
        description="CryptoAlert is a web based user friendly platform which revolves around the spheres of crypto-currency"
      />
      <SignupSection />
    </Layout>
  );
}

export default Signup;
