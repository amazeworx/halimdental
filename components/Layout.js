import Head from 'next/head'
const { default: Navbar } = require("./Navbar")

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      {children}
      {/* <div className="fixed bottom-2 right-8 lg:bottom-16 lg:right-10">
        <a href="https://wa.me/6281233330476" target="_blank"><img src="/images/whatsapp.png" width="64" height="64" /></a>
      </div> */}
    </div>
  );
}

export default Layout;