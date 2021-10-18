import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Halim Dental</title>
        <meta name="description" content="Halim Dental. International dental experience by your best certified experts." />
      </Head>

      <main className="max-w-7xl mx-auto px-0">
        <div className="">
          <img src="/images/home-hero.jpg" className="h-80 object-cover md:h-96 lg:h-auto" />
        </div>
        {/* <Image src="/images/home-hero.jpg" width={1280} height={480} /> */}
        <div className="py-4 px-4 lg:px-8">
          <h2 className="text-2xl text-gray-400 text-center md:text-left">International dental experience by your best certified experts.</h2>
        </div>

        <div className="flex flex-col px-4 mt-4 md:flex-row lg:justify-between lg:px-8 lg:mt-8">
          <div className="w-full md:w-auto mb-8 lg:mb-0 md:order-last">
            <a href="https://wa.me/6281233330476" target="_blank"><img className="mx-auto md:mr-0 md:ml-auto" src="/images/whatsapp-btn.png" /></a>
          </div>
          <div className="w-full md:w-auto md:pr-8 md:order-first">
            <ul className="grid grid-cols-3 md:flex md:flex-wrap gap-4 items-center ">
              <li><img className="mx-auto" src="/images/logos/AAO.png" alt="" /></li>
              <li><img className="mx-auto" src="/images/logos/ADA.png" alt="" /></li>
              <li><img className="mx-auto" src="/images/logos/APOS.png" alt="" /></li>
              <li className="hidden md:block md:w-full lg:w-auto lg:hidden"></li>
              <li><img className="mx-auto" src="/images/logos/EOS.png" alt="" /></li>
              <li><img className="mx-auto" src="/images/logos/IKORTI.png" alt="" /></li>
              <li><img className="mx-auto" src="/images/logos/PDGI.png" alt="" /></li>
              <li className="col-span-3 md:col-auto"><img className="mx-auto" src="/images/logos/WFO.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </main>

      <footer>
        <div className="max-w-7xl mx-auto mt-8">
          <img src="/images/footer-bar.jpg" />
        </div>
      </footer>
    </div>
  )
}
