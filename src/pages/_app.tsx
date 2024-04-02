import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <AnimatePresence initial={false} mode={"popLayout"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  );
}
