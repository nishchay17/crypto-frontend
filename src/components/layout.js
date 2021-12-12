/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { jsx } from "theme-ui";
import Sticky from "react-stickynode";
import { Waypoint } from "react-waypoint";

import { useStickyState } from "../contexts/app/app.provider";
import { useStickyDispatch } from "../contexts/app/app.provider";
import {
  useAllUserState,
  useUserState,
  useUserDispatch,
} from "../contexts/user/user.provider";

import Header from "./header/header";
import ProtectedNav from "./header/ProtectedNav";
export default function Layout({ children, navLinkData, withAuth }) {
  const isSticky = useStickyState("isSticky");
  const dispatch = useStickyDispatch();
  const isLoggedIn = useUserState("isLoggedin");
  const state = useAllUserState();
  const userDispatch = useUserDispatch();
  const router = useRouter();

  useEffect(() => {
    const cachedState = JSON.parse(localStorage.getItem("cache"));
    userDispatch({ type: "TO_LOAD", payload: cachedState });
  }, []);

  useEffect(() => {
    if (state) localStorage.setItem("cache", JSON.stringify(state));
  }, [state]);

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
    if (!withAuth && isLoggedIn) {
      router.push("/dashboard");
    }
  }, [withAuth, isLoggedIn]);

  if (withAuth && !isLoggedIn) return null;
  else
    return (
      <>
        <Sticky enabled={isSticky} innerZ={100}>
          {isLoggedIn ? (
            <ProtectedNav className={`${isSticky ? "sticky" : "unSticky"}`} />
          ) : (
            <Header
              navLinkData={navLinkData}
              className={`${isSticky ? "sticky" : "unSticky"}`}
            />
          )}
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
