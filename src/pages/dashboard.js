import React from "react";
import dynamic from "next/dynamic";

import Layout from "../components/layout";
import Seo from "../components/seo";
import DASHBOARD_NAV_LINKS from "../config/Nav/dashboardNavLink";
import SentimentAnalysisLayout from "../sections/Dashboard/SentimentAnalysis/SentimentAnalysisLayout";

const TopCrypto = dynamic(() =>
  import("../sections/Dashboard/TopCrypto/TopCrypto")
);
const NewsLayout = dynamic(() =>
  import("../sections/Dashboard/News/NewsLayout")
);

function Dashboard() {
  return (
    <Layout navLinkData={DASHBOARD_NAV_LINKS}>
      <Seo
        title="Dashboard"
        description="Get all your crypto related data here"
      />
      <SentimentAnalysisLayout />
      <TopCrypto />
      <NewsLayout />
    </Layout>
  );
}

export default Dashboard;
