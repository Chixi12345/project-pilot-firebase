import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import {
  CalendarScreenPage,
  FocusModePage,
  HomeScreenPage,
  IntroPage,
  LoginScreenPage,
  OnBoardingPage,
  ProfileScreenPage,
  SignUpScreenPage,
  TaskScreenPage,
} from "./pages";

const RoutesE = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomeScreenPage />,
    },

    {
      path: "/intropage",
      element: <IntroPage />,
    },

    {
      path: "/onboarding",
      element: <OnBoardingPage />,
    },

    {
      path: "/login",
      element: <LoginScreenPage />,
    },

    {
      path: "/profilescreen",
      element: <ProfileScreenPage />,
    },

    {
      path: "/signup",
      element: <SignUpScreenPage />,
    },

    {
      path: "/taskscreen",
      element: <TaskScreenPage />,
    },

    {
      path: "/focusmode",
      element: <FocusModePage />,
    },

    {
      path: "/calendar",
      element: <CalendarScreenPage />,
    },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <RoutesE />
    </Router>
  );
};

export default AppWrapper;
