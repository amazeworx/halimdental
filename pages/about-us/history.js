import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>History - About Us | Halim Dental Clinic</title>
        <meta
          name="description"
          content="The main clinic was started by Dr. Himawan Halim back in the early 1990s and was well known as 'Himawan Halim Dental Clinic'. The main clinic is strategically located in the heart of Jakarta."
        />
      </Head>

      <main className="max-w-7xl mx-auto lg:pt-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
            <div className="mb-4">
              <img className="" src="/images/about-us-01.jpg" />
            </div>
            {/* <div className="hidden lg:block">
              <img className="ml-auto" src="/images/about-02.jpg" />
            </div> */}
          </div>
          <div className="w-full lg:w-1/2">
            <div className="px-4 py-4 text-sm text-justify lg:text-base lg:mb-8 lg:px-0 lg:py-4">
              <div className="mb-8">
                <h1 className="font-bold mb-4 lg:text-xl lg:mb-6">HISTORY</h1>
                <div className="lg:text-base">
                  <p>
                    The main clinic was started by Dr. Himawan Halim back in the
                    early 1990s and was well known as 'Himawan Halim Dental
                    Clinic'. The main clinic is strategically located in the
                    heart of Jakarta, just 3 minutes from Bundaran HI, behind
                    Mandarin Oriental Hotel and the German Embassy (Embassy of
                    the Federal Republic of Germany). The clinic is now co-owned
                    by him and his son, Dr. Ivan A Halim. Dr. Himawan and Dr.
                    Ivan is a second and third generation dentist and are both a
                    US trained dentist/orthodontist. Both doctors will delegate
                    treatment as necessary to the clinic associates which
                    include team of periodontist, endodontist, prosthodontist,
                    dental radiologist, and oral & maxillofacial surgeon. With
                    the addition of Dr. Ivan and added vision and mission for
                    our clinic, the clinic is now known as 'Halim Dental
                    Clinic'. In 2024, the clinic opened a satellite clinic in
                    South Jakarta, conveniently positioned near schools such as
                    JIS, Tirta Marta, SIS, Ichthus, Raffles Christian School,
                    Nord Anglia School and many more.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-3 gap-2 xl:-ml-10">
              <img src="/images/about-03.jpg" />
              <img src="/images/about-04.jpg" />
              <img src="/images/about-05.jpg" />
            </div> */}
          </div>
        </div>
      </main>

      {/* <footer>
        <div className="max-w-7xl mx-auto mt-6">
          <img src="/images/footer-bar.jpg" />
        </div>
      </footer> */}
    </div>
  );
}
