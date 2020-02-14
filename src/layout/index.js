import React, { Component } from "react";
import Helmet from "react-helmet";
import ThemeContext from "../context/ThemeContext";
import Navigation from "../components/Navigation";
// import Footer from "../components/Footer";
import config from "../../data/SiteConfig";
import favicon from "../images/Asset-10.png";
import "../styles/main.scss";

export default class MainLayout extends Component {
  static contextType = ThemeContext;

  render() {
    const { dark, notFound } = this.context;
    const { children } = this.props;
    let themeClass = "";

    if (dark && !notFound) {
      themeClass = "dark";
    } else if (notFound) {
      themeClass = "not-found";
    }

    return (
      <>
        <Helmet
          bodyAttributes={{
            class: `theme ${themeClass}`
          }}
        >
          <meta name="description" content={config.siteDescription} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/logos/logo1.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/logos/logo1.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/logos/logo1.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/logos/logo1.png"
          />
          <link rel="apple-touch-startup-image" href="/logos/logo1.png" />

          <link
            rel="shortcut icon"
            type="image/png"
            href={favicon}
            width="30px"
          />
          <html lang="en" />
        </Helmet>
        <Navigation menuLinks={config.menuLinks} />

        <main id="main-content">{children}</main>
        {/* <Footer /> */}
      </>
    );
  }
}
