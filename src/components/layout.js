/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { jsx } from "theme-ui";
import Sticky from "react-stickynode";
import { Waypoint } from "react-waypoint";

import { useStickyState } from "../contexts/app/app.provider";
import { useStickyDispatch } from "../contexts/app/app.provider";

import Header from "./header/header";
const isLoggedIn = true;

export default function Layout({ children, navLinkData, withAuth }) {
  const isSticky = useStickyState("isSticky");
  const dispatch = useStickyDispatch();

  const router = useRouter();

  const setSticky = useCallback(
    () => dispatch({ type: "SET_STICKY" }),
    [dispatch]
  );
  const removeSticky = useCallback(
    () => dispatch({ type: "REMOVE_STICKY" }),
    [dispatch]
  );

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (currentPosition === "above") {
      setSticky();
    }
    if (currentPosition === "below") {
      removeSticky();
    }
  };

  useEffect(() => {
    if (withAuth && !isLoggedIn) {
      router.push("/");
    }
    // if (!withAuth && isLoggedIn) {
    //   router.push("/dashboard");
    // }
  }, [withAuth, isLoggedIn]);

  if (withAuth && !isLoggedIn) return null;
  else
    return (
      <>
        <Sticky enabled={isSticky} innerZ={991}>
          <Header
            navLinkData={navLinkData}
            className={`${isSticky ? "sticky" : "unSticky"}`}
          />
        </Sticky>
        <Waypoint
          onEnter={removeSticky}
          // onLeave={setSticky}
          onPositionChange={onWaypointPositionChange}
        />
        <main
          sx={{
            variant: "layout.main",
          }}
        >
          {children}
        </main>
      </>
    );
}

Layout.defaultProps = {
  navLinkData: [],
  withAuth: true,
};
