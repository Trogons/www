import App from "next/app"
import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "../styles/Theme"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}