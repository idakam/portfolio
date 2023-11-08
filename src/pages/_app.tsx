import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence initial={false} mode={"popLayout"}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}
