import "../styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import styles from "../styles/app.module.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence, motion } from "framer-motion";

const queryClient = new QueryClient();
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <motion.div
            transition={{ type: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={router.pathname}
          >
            <div className={styles.all}>
              <Script
                id="kakao_script"
                type="text/javascript"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,drawing,clusterer&autoload=false`}
                strategy="beforeInteractive"
              />
              <Component {...pageProps} />
            </div>
          </motion.div>
        </RecoilRoot>
      </QueryClientProvider>
    </AnimatePresence>
  );
}
