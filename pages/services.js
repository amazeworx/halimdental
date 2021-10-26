import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Our Services | Halim Dental</title>
        <meta name="description" content="WE OFFER PRIME QUALITY SERVICES & TREATMENTS" />
      </Head>

      <main className="max-w-7xl mx-auto lg:pt-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 lg:pr-8">
            <div className="mb-1"><img className="h-64 md:h-96 w-full object-cover lg:w-auto lg:h-auto lg:object-none" src="/images/services-01.jpg" /></div>
            <div className="mb-1 hidden lg:block"><img src="/images/services-02.jpg" /></div>
            <div className="mb-1 hidden lg:block"><img src="/images/services-03.jpg" /></div>
          </div>
          <div className="w-full lg:w-3/4 lg:flex">
            <div className="px-4 py-4 mb-8 lg:w-3/4 lg:mb-0 lg:py-0 lg:pl-6 lg:pr-8">
              <h2 className="font-bold mb-8 lg:mt-8">WE OFFER PRIME QUALITY SERVICES & TREATMENTS</h2>
              <ul className="flex gap-3 flex-col">
                <li>General Dentistry</li>
                <li>Cosmetic Dentistry (i.e. veneers, teeth whitening) </li>
                <li>Restorative Dentistry </li>
                <li>Children Dental Care</li>
                <li>Orthodontics (all ages using traditional/ceramic/lingual braces and clear aligner)</li>
                <li>Endodontics (i.e. root canals)</li>
                <li>Oral Surgery (i.e. wisdom teeth removal, surgical extraction)</li>
                <li>Periodontal Treatment & Surgery</li>
                <li>Prosthodontics</li>
                <li>Dental Implants</li>
                <li>Oral Cancer Screening</li>
                <li>TMD/TMJ Treatment</li>
                <li>Dental Radiography</li>
              </ul>
            </div>
            <div className="px-4 lg:w-1/4 lg:px-0 flex flex-col">
              <div className="mb-2 lg:mb-1 mt-auto"><img src="/images/services-04.jpg" /></div>
              <div className="mb-1"><img src="/images/services-05.jpg" /></div>
            </div>
          </div>
        </div>

      </main>

      <footer>
        <div className="max-w-7xl mx-auto mt-6">
          <img src="/images/footer-bar.jpg" />
        </div>
      </footer>
    </div>
  )
}
