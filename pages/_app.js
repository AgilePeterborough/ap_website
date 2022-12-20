import "./style.css";

import React from "react";
import Head from 'next/head';

export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {
  React.useEffect(() => {
    import("@lottiefiles/lottie-player")
  });
  return <Component {...pageProps} />;
}