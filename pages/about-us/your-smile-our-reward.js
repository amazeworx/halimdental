import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Smile is Our Reward - About Us | Halim Dental Clinic</title>
        <meta
          name="description"
          content="Halim Dental Clinic offer comprehensive dental care that will help transform your appearance and maintain your oral health. We pride ourselves on being a unique full service general and cosmetic dentistry boutique."
        />
      </Head>

      <main className="max-w-7xl mx-auto lg:pt-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
            <div className="mb-0">
              <img className="" src="/images/about-us-02.jpg" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="px-4 py-4 text-sm text-justify lg:text-base lg:mb-8 lg:px-0 lg:py-4">
              <div className="mb-8">
                <h1 className="font-bold mb-4 lg:text-xl lg:mb-6">
                  YOUR SMILE IS OUR REWARD
                </h1>
                <div className="lg:text-base">
                  <p>
                    Halim Dental Clinic offers comprehensive dental care that
                    will help transform your appearance and maintain your oral
                    health. We pride ourselves on being a unique full service
                    general and cosmetic dentistry boutique. Our team are
                    dedicated to provide the best health care services in
                    dentistry for your family and friends. The office is
                    equipped with innovative technologies and state-of-the-art
                    equipment to provide the best and comfortable dental care
                    for our patient.
                  </p>
                  <p>
                    Our office also has international relations all over the
                    world not limited to USA, Canada, Singapore, United Kingdom,
                    Italy, Brazil, Australia, Oman, Jordan, UAE, Thailand,
                    Philippines and Malaysia.
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
