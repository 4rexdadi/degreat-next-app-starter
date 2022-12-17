/* eslint-disable react/jsx-props-no-spreading */
// Imports
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "../store";
import CustomHeader from "../subComponent/config";
import Loader from "../subComponent/loader/Loader";
import ScrollContainer from "../subComponent/scrollbarContainer/ScrollContainer";
// Import Global Styles...
import GlobalStyle from "../style/GlobalStyle";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <ScrollContainer mouseMultiplier={0.5} duration={1.2} infinite>
        <Loader loadingSpeed={22} />

        <GlobalStyle />

        <CustomHeader title="New Project" />

        <header />

        <main>
          <Component {...pageProps} />
        </main>

        <footer />
      </ScrollContainer>
    </Provider>
  );
};

export default MyApp;
