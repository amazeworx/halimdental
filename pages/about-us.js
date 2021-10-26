import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About Us | Halim Dental Clinic</title>
        <meta name="description" content="Halim Dental Clinic offer comprehensive dental care that will help transform your appearance and maintain your oral health. We pride ourselves on being a unique full service general and cosmetic dentistry boutique." />
      </Head>

      <main className="max-w-7xl mx-auto lg:pt-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
            <div className="mb-2"><img className="md:h-96 md:w-full md:object-cover lg:w-auto lg:h-auto lg:object-none" src="/images/about-01.jpg" /></div>
            <div className="hidden lg:block"><img className="ml-auto" src="/images/about-02.jpg" /></div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="px-4 py-4 text-sm text-justify lg:mb-8 lg:px-0 lg:py-0">
              <div className="mb-8">
                <h2 className="font-bold mb-2">YOUR SMILE IS OUR REWARD</h2>
                <p>Halim Dental Clinic offer comprehensive dental care that will help transform your appearance and maintain your oral health. We pride ourselves on being a unique full service general and cosmetic dentistry boutique. Our team are dedicated to provide the best health care services in dentistry for your family and friends. The office is equipped with innovative technologies and state-of-the-art equipment to provide the best and comfortable dental care for our patient.</p>
              </div>
              <div className="mb-8">
                <h2 className="font-bold mb-2">HISTORY</h2>
                <p>The clinic was started by Dr. Himawan Halim back in the early 1990s and was well known as ‘Himawan Halim Dental Clinic’. The clinic is now co-owned by him and his son, Dr. Ivan A Halim. Dr. Himawan and Dr. Ivan is a second and third generation dentist and are both a US trained dentist/orthodontist. Both doctors will delegate treatment as necessary to the clinic associates which include team of periodontist, endodontist, prosthodontist, dental radiologist, and oral & maxillofacial surgeon. With the addition of Dr. Ivan and added vision and mission for our clinic, the clinic is now known as ‘Halim Dental Clinic’.</p>
              </div>
              <div className="mb-8">
                <h2 className="font-bold mb-2">CENTRAL BUSINESS DISTRICT (CBD) LOCATION</h2>
                <p>Halim Dental Clinic is located in the heart of Jakarta, just 3 minutes from Bundaran HI, behind Mandarin Oriental Hotel and the German Embassy (Embassy of the Federal Republic of Germany).</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 xl:-ml-10">
              <img src="/images/about-03.jpg" />
              <img src="/images/about-04.jpg" />
              <img src="/images/about-05.jpg" />
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
