/** 
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/
import { ThemeProvider } from "theme-ui";

import "@fontsource/archivo";
import "@fontsource/archivo/600.css";
import "@fontsource/dm-sans";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "rc-drawer/assets/index.css";

import { StickyProvider } from "../contexts/app/app.provider";
import { UserProvider } from "../contexts/user/user.provider";

import theme from "../theme";

export default function CustomApp({ Component, pageProps }) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </StickyProvider>{" "}
    </ThemeProvider>
  );
}
