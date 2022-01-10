import "../styles/globals.css";
import {ReactElement, ReactNode} from 'react'
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps}: AppPropsWithLayout) {
  return (
    <>
    <Layout />
    <Component {...pageProps} />
    </>
    
  );
}

export default MyApp;
