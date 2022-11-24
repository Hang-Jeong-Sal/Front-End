import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import styles from '../styles/app.module.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from "../lib/color";
import "../styles/scss/App.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
  },
});
const queryClient = new QueryClient();
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <motion.div
            transition={{ type: 'linear' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={router.pathname}
          >
            <ThemeProvider theme={theme}>
              <div className={styles.all}>
                <Component {...pageProps} />
              </div>
            </ThemeProvider>
          </motion.div>
        </RecoilRoot>
      </QueryClientProvider>
    </AnimatePresence>
  );
}
