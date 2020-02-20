import Head from "next/head";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

// TODO: SEO

const Layout = props => {
  const title = props.title || "Trogons A Cappella"

  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Header/>
      {props.children}
      <Footer/>
    </Container>
  )
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export default Layout;