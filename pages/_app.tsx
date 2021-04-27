import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app';
import Layout from '../components/Layout';
import { ReactNode } from 'react';


const MyApp = ({ Component, pageProps }: AppProps): ReactNode =>  (
        <Layout>
              <Component {...pageProps} />
        </Layout>
)

export default MyApp
