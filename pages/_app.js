import { Provider } from "react-redux";
import "../styles/style.scss";
import store from "./../redux/store";
import Router from "next/router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

Nprogress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
