import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import styles from '../styles/app.module.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className={styles.all}>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}
