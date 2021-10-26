import Head from 'next/head';
import { Navigation, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Halim Dental Clinic - Family and Esthetic Densitry</title>
        <meta name="description" content="Halim Dental Clinic. International dental experience by your best certified experts. Melayani perawatan gigi komprehensif yang membantu mengubah penampilan dan menjaga kesehatan mulut Anda." />
      </Head>

      <main className="max-w-7xl mx-auto px-0">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          navigation
          autoplay={{ delay: 5000 }}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          loop
        >
          <SwiperSlide><img src="/images/home-hero.jpg" className="h-80 object-cover md:h-96 lg:h-auto" /></SwiperSlide>
          <SwiperSlide><img src="/images/home-hero-2.jpg" className="h-80 object-cover md:h-96 lg:h-auto" /></SwiperSlide>
        </Swiper>
        <div className="py-4 px-4 lg:px-8">
          <h2 className="text-2xl text-gray-400 text-center md:text-left">International dental experience by your best certified experts.</h2>
        </div>

        <div className="flex flex-col px-4 mt-4 md:flex-row lg:justify-between lg:px-8 lg:mt-8">
          {/* <div className="w-full md:w-auto mb-8 lg:mb-0 md:order-last">
            <a href="https://wa.me/6281233330476" target="_blank"><img className="mx-auto md:mr-0 md:ml-auto" src="/images/whatsapp-btn.png" /></a>
          </div> */}
          <div className="w-full md:w-auto md:pr-8 md:order-first">
            <ul className="grid grid-cols-3 md:flex md:flex-wrap lg:flex-nowrap gap-4 xl:gap-8 items-center ">
              <li><img className="mx-auto h-10 lg:h-12 xl:h-16 object-contain" src="/images/logos/AAO.png" alt="" /></li>
              <li><img className="mx-auto h-10 lg:h-12 xl:h-16 object-contain" src="/images/logos/ADA.png" alt="" /></li>
              <li><img className="mx-auto h-10 lg:h-12 xl:h-16 object-contain" src="/images/logos/APOS.png" alt="" /></li>
              <li><img className="mx-auto h-10 lg:h-12 xl:h-16 object-contain" src="/images/logos/EOS.png" alt="" /></li>
              <li><img className="mx-auto h-10 lg:h-12 xl:h-16 object-contain" src="/images/logos/IKORTI.png" alt="" /></li>
              <li><img className="mx-auto h-10 lg:h-12 xl:h-16 object-contain" src="/images/logos/PDGI.png" alt="" /></li>
              <li className="col-span-3 md:col-auto"><img className="mx-auto w-auto h-10 xl:h-16 object-contain" src="/images/logos/WFO.png" alt="" /></li>
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
