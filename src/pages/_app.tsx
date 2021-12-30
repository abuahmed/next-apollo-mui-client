import * as React from "react";

import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider, Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "../themes/themes";
import Layout from "../components/Layout";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { apolloClient } from "../apollo/graphql";
import { isDarkModeVar } from "../apollo/cache";

const cache = createCache({ key: "css", prepend: true });
cache.compat = true;

export default function MyApp(props: AppProps) {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  const { Component, pageProps } = props;
  const [currentTheme, setCurrentTheme] = React.useState<Theme>({
    ...theme.light,
  });
  React.useEffect(() => {
    setCurrentTheme(isDarkMode ? theme.dark : theme.light);
  }, [isDarkMode]);
  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Best Shop in Addis</title>
        <meta name="description" content="Best shop in town" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={currentTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </CacheProvider>
  );
}
