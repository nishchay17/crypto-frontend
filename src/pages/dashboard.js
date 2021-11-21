import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopCrypto from "../sections/Dashboard/TopCrypto/TopCrypto";
import DASHBOARD_NAV_LINKS from "../config/Nav/dashboardNavLink";

function Dashboard() {
  return (
    <Layout navLinkData={DASHBOARD_NAV_LINKS}>
      <Seo
        title="Dashboard"
        description="Get all your crypto related data here"
      />
      <TopCrypto />
    </Layout>
  );
}

export default Dashboard;
