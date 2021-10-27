import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dr. Himawan Halim | Halim Dental</title>
        <meta name="description" content="Dr. Himawan Halim is a second-generation dentist in the family, where both of his parents are general dentist." />
      </Head>

      <main className="max-w-7xl mx-auto lg:pt-6 px-0">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
            <div className="mb-1"><img className="md:h-96 md:w-full md:object-cover lg:w-auto lg:h-auto lg:object-none" src="/images/creds-01.jpg" /></div>
          </div>
          <div className="w-full px-4 py-4 lg:w-1/2 lg:py-0 lg:pl-0 lg:pr-8">
            <div className="mb-8 text-sm text-justify">
              <div className="float-left mr-4 mb-4">
                <div className="border border-gray-300"><img src="/images/himawan-halim.jpg" width="100" height="105" /></div>
              </div>
              <div className="float-none">
                <h2 className="font-semibold text-base mb-2">HIMAWAN HALIM <span className="text-brand text-sm font-normal">DMD, MS, PhD, FICD, FWFO - Co-Owner</span></h2>
                <p className="mb-4">Dr. Himawan Halim is a second-generation dentist in the family, where both of his parents are general dentist. He completed majority of his training in the United States at University of California, Los Angeles (UCLA) and Washington University in St. Louis. Dr. Himawan also did an on-the-job training during his tenure with the Indonesian Naval Dental Institute (LADOKGI TNI AL R.E. Martadinata) at University of Otago, Dunedin, New Zealand and Middlemore Hospital, Auckland, New Zealand. He completed his PhD at University of Indonesia, Jakarta.</p>
                <p className="mb-4">He is one of the first few dentists in Indonesia to be inducted as a Fellow of International College of Dentists. Dr. Himawan is also a fellow and past executive board member of the World Federation of Orthodontists, past executive board member of Asian Pacific Orthodontic Society (APOS), an American Association of Orthodontists (AAO) Ambassador and AAO International member. He is currently serving as the board member of World Implant Orthodontic Association (WIOA). Dr. Himawan also lectures nationally and internationally and have published multiples scientific and clinical articles in peer-reviewed orthodontic and dental journals. He is currently a full-time faculty at the Faculty of Dentistry Trisakti University, visiting adjunct faculty at University of Alabama at Birmingham, AL, USA and A.T. Still University, AZ, USA.</p>
                <p>With over 30 years of experience, Dr. Himawan will continue to provide the best dental care for his patients.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap px-4 lg:px-0">
          <div className="w-full text-sm mb-8 lg:w-1/2 lg:pl-8 lg:pr-12 lg:mb-0 lg:flex lg:justify-end">
            <div>
              <h3 className="font-semibold mb-4 lg:mb-6">EDUCATION</h3>
              <ul className="xl:text-justify">
                <li className="mb-2"><span className="inline-block mr-2">Bachelor of Science in Chemistry (BS)</span> <span className="text-brand text-sm font-normal">University of California, Los Angeles, CA, USA</span></li>
                <li className="mb-2"><span className="inline-block mr-2">Doctor of Dental Medicine (DMD)</span> <span className="text-brand text-sm font-normal">Washington University in St. Louis, MO, USA</span></li>
                <li className="mb-2"><span className="inline-block mr-2">Master of Science in Orthodontics (MS)</span> <span className="text-brand text-sm font-normal">Washington University in St. Louis, MO, USA</span></li>
                <li className="mb-2"><span className="inline-block mr-2">Doctor of Philosophy (PhD)</span> <span className="text-brand text-sm font-normal">University of Indonesia, Jakarta, Indonesia</span></li>
              </ul>
            </div>
          </div>
          <div className="w-full text-sm lg:w-1/2 lg:pr-8">
            <h3 className="font-semibold mb-4 lg:mb-6">ACCREDITATIONS</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 text-brand">
              <ul>
                <li className="mb-1"><span>Member of American Dental Association</span></li>
                <li className="mb-1"><span>Member of American Association of Orthodontists</span></li>
                <li className="mb-1"><span>Member of European Orthodontic Society</span></li>
                <li className="mb-1"><span>Member of Indonesian Dental Association</span></li>
                <li className="mb-1"><span>Member of Indonesian Association of Orthodontists</span></li>
              </ul>
              <ul className="xl:text-justify">
                <li className="mb-1"><span>Board Member of World Implant Orthodontic Association</span></li>
                <li className="mb-1"><span>Past Executive Board Member of Asian Pacific Orthodontic Society</span></li>
                <li className="mb-1"><span>Fellow of World Federation of Orthodontists (Executive Board Member 2010-2020)</span></li>
                <li className="mb-1"><span>Fellow of International College of Dentists</span></li>
              </ul>
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
