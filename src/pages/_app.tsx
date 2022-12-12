import type { AppProps } from "next/app";
import CustomHeader from "../subComponent/config";
import GlobalStyle from "../style/GlobalStyle";
// imports
import HeaderSection from "../components/homePage/headerSection/HeaderSection";
import Loader from "../subComponent/loader/Loader";
import { Provider } from "react-redux";
import ScrollContainer from "../subComponent/scrollbarContainer/ScrollContainer";
import store from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ScrollContainer>
        <Loader />

        <GlobalStyle />

        <CustomHeader title={"Adedayo Aturu"} />

        <header>
          <HeaderSection />
        </header>

        <main>
          <Component {...pageProps} />
        </main>

        <footer></footer>
      </ScrollContainer>
    </Provider>
  );
}

export default MyApp;
