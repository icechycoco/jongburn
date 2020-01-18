import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import '../src/styles/index.less'
import MainLayout from '../src/Layout/Main'
import AuthLayout from '../src/Layout/Auth'

class MyApp extends App {
  // Only uncomment this  method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps }
  }

  componentDidMount() {
    const isSignedIn = localStorage.getItem('jongburn-auth')
    if (!isSignedIn) {
      Router.replace('/auth/signin')
    }
  }

  render() {
    const { Component, pageProps, router } = this.props
    if (router.route === '/auth/signin' || router.route === '/auth/signout') {
      return (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      )
    }
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
}

export default MyApp;
