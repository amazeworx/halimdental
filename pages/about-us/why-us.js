import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Why Us - About Us | Halim Dental Clinic</title>
        <meta
          name="description"
          content="Experienced Dental Team, Multispecialty Services, State-of-the-Art Equipment and Unmatched Cleanliness, Legacy of Excellence"
        />
      </Head>

      <main className="max-w-7xl mx-auto lg:pt-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
            <div className="mb-4">
              <img className="" src="/images/about-us-03.jpg" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="px-4 py-4 text-sm text-justify lg:text-base lg:mb-8 lg:px-0 lg:py-4">
              <div className="mb-8">
                <h1 className="font-bold mb-4 lg:text-xl lg:mb-6">WHY US</h1>
                <div className="lg:text-base mb-8">
                  <h2 className="text-base font-bold lg:text-lg mb-4">
                    Experienced Dental Team
                  </h2>
                  <p>
                    The clinic is led by a team of experienced dentists,
                    including Dr. Himawan Halim and Dr. Ivan A. Halim, both of
                    whom are US-trained dentists/dental specialists.
                  </p>
                </div>
                <div className="lg:text-base mb-8">
                  <h2 className="text-base font-bold lg:text-lg mb-4">
                    Multispecialty Services
                  </h2>
                  <p>
                    We have a dedicated team of specialists in various fields,
                    including periodontist, dental radiologist, prosthodontist,
                    endodontist, orthodontist & oral, and maxillfacial surgeon.
                  </p>
                </div>
                <div className="lg:text-base mb-8">
                  <h2 className="text-base font-bold lg:text-lg mb-4">
                    State-of-the-Art Equipment and Unmatched Cleanliness
                  </h2>
                  <p>
                    The clinic is equipped with advanced technologies and modern
                    International equipment from countries such as Switzerland,
                    Germany, Japan, USA and Sweden ensuring the highest
                    standards of hygiene and the most comfortable dental care
                    experience in every corner.
                  </p>
                </div>
                <div className="lg:text-base mb-8">
                  <h2 className="text-base font-bold lg:text-lg mb-4">
                    Legacy of Excellence
                  </h2>
                  <p>
                    With a history dating back to 1955, the clinic has a legacy
                    of providing high-quality dental care
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
