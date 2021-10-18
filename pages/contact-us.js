import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact Us | Halim Dental</title>
        <meta name="description" content="To learn more about our clinic and to set up an appointment, we invite you to contact us today!" />
      </Head>

      <main className="max-w-7xl mx-auto pt-10 px-4 lg:pt-10 lg:px-8 text-xl">
        <div className="mb-10">
          <p className="mb-2">Thank you for visiting Halim Dental online. </p>
          <p className="mb-2">We are happy to welcome anyone to our office and answer any questions you may have. </p>
          <p className="mb-2">To learn more about our clinic and to set up an appointment, we invite you to contact us today! </p>
        </div>
        <div className="flex flex-wrap mb-12">
          <div className="w-full mb-12 lg:mb-0 md:w-1/2 lg:w-3/5 lg:pr-8">
            <div className="flex flex-wrap">
              <div className="w-full mb-4 lg:mb-0 lg:w-auto"><img className="w-16 lg:w-auto" src="/images/gmap.png" /></div>
              <div className="lg:pl-8">
                <h2 className="mb-4 text-brand">LOCATION</h2>
                <h3>HALIM DENTAL</h3>
                <p>Jl. Sumenep no. 7<br />Jakarta Pusat 10310 Indonesia</p>
                <p className="mt-2 text-base"><a className="text-brand hover:underline" target="_blank" href="https://maps.app.goo.gl/ByBvKzB5BzduDGuM7">View in Google Map</a></p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5">
            <h2 className="mb-4 text-brand">CLINIC HOURS</h2>
            <p>By appointment</p>
          </div>
        </div>

        <div className="flex flex-wrap mb-12">
          <div className="w-full mb-12 md:w-1/2 lg:mb-0 lg:w-3/5 lg:pr-8">
            <h2 className="mb-4 text-brand">APPOINTMENT BOOKINGS</h2>
            <ul>
              <li className="mb-3 lg:mb-0">
                <span className="block lg:inline-block lg:w-32 text-gray-400 uppercase text-sm font-bold lg:font-normal lg:normal-case lg:text-xl">Phone</span>
                <span className="block lg:inline-block"><a href="tel:62213147376" target="_blank" className="hover:text-brand hover:underline">+62 21 3147376 / 7</a></span>
              </li>
              <li className="mb-3 lg:mb-0">
                <span className="block lg:inline-block lg:w-32 text-gray-400 uppercase text-sm font-bold lg:font-normal lg:normal-case lg:text-xl">Fax</span>
                <span className="block lg:inline-block">+62 21 3147377</span>
              </li>
              <li className="mb-3 lg:mb-0">
                <span className="block lg:inline-block lg:w-32 text-gray-400 uppercase text-sm font-bold lg:font-normal lg:normal-case lg:text-xl">WhatsApp</span>
                <span className="block lg:inline-block"><a href="https://wa.me/6281233330476" target="_blank" className="hover:text-brand hover:underline">+62 812 3333 0476</a></span>
              </li>
              <li className="mb-3 lg:mb-0">
                <span className="block lg:inline-block lg:w-32 text-gray-400 uppercase text-sm font-bold lg:font-normal lg:normal-case lg:text-xl">Email</span>
                <span className="block lg:inline-block"><a className="hover:text-brand hover:underline" target="_blank" href="mailto:himawanhalimclinic@yahoo.com">himawanhalimclinic@yahoo.com</a></span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5">
            <h2 className="mb-4 text-brand">RECEPTIONIST HOURS</h2>
            <ul>
              <li><span className="inline-block w-36">Monday</span><span className="inline-block">9.00 – 18.00</span></li>
              <li><span className="inline-block w-36">Tuesday</span><span className="inline-block">9.00 – 18.00</span></li>
              <li><span className="inline-block w-36">Wednesday</span><span className="inline-block">9.00 – 18.00</span></li>
              <li><span className="inline-block w-36">Thursday</span><span className="inline-block">9.00 – 18.00</span></li>
              <li><span className="inline-block w-36">Friday</span><span className="inline-block">9.00 – 18.00</span></li>
              <li><span className="inline-block w-36">Saturday</span><span className="inline-block">9.00 – 14.00</span></li>
              <li><span className="inline-block w-36">Sunday</span><span className="inline-block">Closed</span></li>
            </ul>
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
