import Head from 'next/head'
const { default: Navbar } = require("./Navbar")

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TMHWNHM');`,
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMHWNHM" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      <Navbar />
      {children}
      <WhatsAppWidget phoneNumber='6281233330476' textReplyTime="" message='Hello! 👋🏼  Ada yang bisa kami bantu?' companyName="Halim Dental Clinic" />
      {/* <div className="fixed bottom-2 right-8 lg:bottom-16 lg:right-10">
        <a href="https://wa.me/6281233330476" target="_blank"><img src="/images/whatsapp.png" width="64" height="64" /></a>
      </div> */}
    </div>
  );
}

export default Layout;