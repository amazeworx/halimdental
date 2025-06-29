import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact Us | Halim Dental Clinic</title>
        <meta
          name="description"
          content="To learn more about our clinic and to set up an appointment, we invite you to contact us today!"
        />
      </Head>

      <main className="max-w-7xl mx-auto pt-10 px-4 lg:pt-10 lg:px-8 text-xl">
        <div className="mb-10">
          <p className="mb-2">
            Thank you for visiting Halim Dental Clinic online.{" "}
          </p>
          <p className="mb-2">
            We are happy to welcome anyone to our office and answer any
            questions you may have.{" "}
          </p>
          <p className="mb-2">
            To learn more about our clinic and to set up an appointment, we
            invite you to contact us today!{" "}
          </p>
        </div>
        <div className="flex flex-wrap mb-12">
          <div className="w-full mb-12 lg:mb-0 md:w-1/2 lg:w-3/5 lg:pr-12">
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="w-full mb-4 lg:mb-0 lg:w-auto">
                <img className="w-16 lg:w-auto" src="/images/gmap.png" />
              </div>
              <div className="lg:pl-8">
                <h2 className="mb-4 text-brand font-bold">LOCATION</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-2">MAIN OFFICE</h3>
                    <p>
                      Jl. Sumenep no. 7<br />
                      Jakarta Pusat 10310
                      <br />
                      Indonesia
                    </p>
                    <p className="mt-2 text-base">
                      <a
                        className="text-brand hover:underline"
                        target="_blank"
                        href="https://maps.app.goo.gl/ByBvKzB5BzduDGuM7"
                      >
                        View in Google Map
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">SATELLITE CLINIC</h3>
                    <p>
                      Jl. Duta Indah I no. 14
                      <br />
                      Jakarta Selatan 12310
                      <br />
                      Indonesia
                    </p>
                    <p className="mt-2 text-base">
                      <a
                        className="text-brand hover:underline"
                        target="_blank"
                        href="https://g.co/kgs/Pu7AjtE"
                      >
                        View in Google Map
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5">
            <h2 className="mb-4 text-brand font-bold">CLINIC HOURS</h2>
            <p>By appointment</p>
          </div>
        </div>

        <div className="flex flex-wrap mb-12">
          <div className="w-full mb-12 md:w-1/2 lg:mb-0 lg:w-3/5 lg:pr-8">
            <h2 className="mb-4 text-brand font-bold">APPOINTMENT BOOKINGS</h2>
            <ul>
              <li className="mb-3 lg:mb-0">
                <span className="block lg:inline-block lg:w-32 text-gray-400 uppercase text-sm font-bold lg:font-normal lg:normal-case lg:text-xl">
                  Phone
                </span>
                <span className="block lg:inline-block">
                  <a
                    href="tel:62213147376"
                    target="_blank"
                    className="hover:text-brand hover:underline"
                  >
                    +62 21 3147376 / 7
                  </a>
                </span>
              </li>
              <li className="mb-3 lg:mb-0">
                <span className="block lg:inline-block lg:w-32 text-gray-400 uppercase text-sm font-bold lg:font-normal lg:normal-case lg:text-xl">
                  Fax
                </span>
                <span className="block lg:inline-block">+62 21 3147377</span>
              </li>
              <li className="mb-3 lg:mb-0">
                <span className="block lg:inline-block lg:w-32 text-gray-400 uppercase text-sm font-bold lg:font-normal lg:normal-case lg:text-xl">
                  WhatsApp
                </span>
                <span className="block lg:inline-block">
                  <a
                    href="https://wa.me/6281112203550"
                    target="_blank"
                    className="hover:text-brand hover:underline"
                  >
                    +62 811 1220 3550
                  </a>
                </span>
              </li>
              <li className="mb-3 lg:mb-0">
                <span className="block align-top lg:inline-block lg:w-32 text-gray-400 uppercase text-sm font-bold lg:font-normal lg:normal-case lg:text-xl">
                  Email
                </span>
                <span className="block align-top lg:inline-block">
                  <a
                    className="hover:text-brand hover:underline"
                    target="_blank"
                    href="mailto:info@halimdental.com"
                  >
                    info@halimdental.com
                  </a>
                  <br />
                  <a
                    className="hover:text-brand hover:underline"
                    target="_blank"
                    href="mailto:himawanhalimclinic@yahoo.com"
                  >
                    himawanhalimclinic@yahoo.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5">
            <h2 className="mb-4 text-brand font-bold">RECEPTIONIST HOURS</h2>
            <ul>
              <li>
                <span className="inline-block pr-4 w-40 xl:w-64 text-gray-400 align-top">
                  Monday
                </span>
                <span className="inline-block">9.00 – 18.00</span>
              </li>
              <li>
                <span className="inline-block pr-4 w-40 xl:w-64 text-gray-400 align-top">
                  Tuesday
                </span>
                <span className="inline-block">9.00 – 18.00</span>
              </li>
              <li>
                <span className="inline-block pr-4 w-40 xl:w-64 text-gray-400 align-top">
                  Wednesday
                </span>
                <span className="inline-block">9.00 – 18.00</span>
              </li>
              <li>
                <span className="inline-block pr-4 w-40 xl:w-64 text-gray-400 align-top">
                  Thursday
                </span>
                <span className="inline-block">9.00 – 18.00</span>
              </li>
              <li>
                <span className="inline-block pr-4 w-40 xl:w-64 text-gray-400 align-top">
                  Friday
                </span>
                <span className="inline-block">9.00 – 18.00</span>
              </li>
              <li>
                <span className="inline-block pr-4 w-40 xl:w-64 text-gray-400 align-top">
                  Saturday
                </span>
                <span className="inline-block">9.00 – 14.00</span>
              </li>
              <li>
                <span className="inline-block pr-4 w-40 xl:w-64 text-gray-400 align-top">
                  Sunday & Public Holiday
                </span>
                <span className="inline-block">Closed</span>
              </li>
            </ul>
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
