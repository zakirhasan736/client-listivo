// CSS
import "@/styles/globals.css";
import "@/styles/scss/index.scss";
import Head from "next/head";
import Script from "next/script";
import { Router } from "next/router";
import { useEffect, useState } from "@packages/packages";
import Loader from "./loader";
import Geocode from "react-geocode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GEO_API_KEY);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  return (
    <>
      <>
        {/* react-places-autocomplete | Google map api*/}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GEO_API_KEY}&libraries=places`}
          strategy="beforeInteractive"
        />
      </>
      {loading && <Loader />}
      <ToastContainer
        autoClose={6000}
        position="top-center"
        className="toast-container"
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
