import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Legacy of Excellence | Halim Dental Clinic</title>
        <meta
          name="description"
          content="It all started with Dr Liem and Dr Ratna Graduate Dentistry Class of 1955. Dr Liem then completed further trainings in Beograd-Yugoslavia, Slovenia-Yugoslavia and Bethesda-United States."
        />
      </Head>

      <main className="max-w-7xl mx-auto lg:pt-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
            <div className="mb-2">
              <img className="" src="/images/legacy-01.jpg" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="px-4 py-4 text-sm text-justify lg:text-base lg:mb-8 lg:px-0 lg:py-0">
              <div className="mb-8">
                <h1 className="font-bold mb-2 lg:text-xl lg:mb-6">
                  LEGACY OF EXCELLENCE
                </h1>
                <div className="lg:text-base mb-8">
                  <p className="mb-4">
                    It all started with Dr Liem and Dr Ratna Graduate Dentistry
                    Class of 1955.
                  </p>
                  <p className="mb-4">
                    Dr Liem then completed further trainings in
                    Beograd-Yugoslavia, Slovenia-Yugoslavia and Bethesda-United
                    States.
                  </p>
                  <p className="mb-4">
                    Dr Liem also play a key role in initiating the Indonesian
                    Naval Dental Institute, a project that he worked closely
                    with the US Navy.
                  </p>
                  <p className="mb-4">
                    Dr Liem was the head of Indonesian Naval Dental Institute
                    Ladokgi RE Martadinata for 22 years.
                  </p>
                  <p className="mb-4">
                    Throughout his journey, he received multiple awards,
                    including from the President of Indonesia.
                  </p>
                  <p className="mb-4">
                    Behind all of Dr Liem's achievement, Dr Ratna played an
                    integral role as a wife and a dentist where she also have to
                    lead the Jalasenastri organization during Dr Liem's tenure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-1 py-4">
          <div>
            <img className="w-auto h-auto" src="/images/legacy-03.jpg" />
          </div>
          <div>
            <img className="w-auto h-auto" src="/images/legacy-04.jpg" />
          </div>
          <div>
            <img className="w-auto h-auto" src="/images/legacy-05.jpg" />
          </div>
          <div>
            <img className="w-auto h-auto" src="/images/legacy-06.jpg" />
          </div>
          <div>
            <img className="w-auto h-auto" src="/images/legacy-07.jpg" />
          </div>
          <div>
            <img className="w-auto h-auto" src="/images/legacy-08.jpg" />
          </div>
        </div>
      </main>
    </div>
  );
}
