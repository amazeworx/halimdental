import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dr. Ivan A Halim | Halim Dental</title>
        <meta
          name="description"
          content="Dr. Ivan Halim grew up in a family of dentists and often shadowed his father growing up. As he was finishing his high school, he realized that he wanted to follow his grandparents and father’s footstep and become the third-generation dentist in the family."
        />
      </Head>

      <main className="max-w-7xl mx-auto lg:pt-6 px-0">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
            <div className="mb-1">
              <img className="" src="/images/ivan-halim-01.jpg" />
            </div>
          </div>
          <div className="w-full px-4 py-4 lg:w-1/2 lg:py-4 lg:pl-0 lg:pr-8">
            <div className="mb-8 text-sm text-justify">
              <div className="float-left mr-4 mb-4">
                <div className="border border-gray-300">
                  <img src="/images/ivan-halim.jpg" width="100" height="105" />
                </div>
              </div>
              <div className="float-none">
                <h2 className="font-semibold text-base mb-2">
                  IVAN A HALIM{" "}
                  <span className="text-brand text-sm font-normal">
                    BS (Biochemistry), DMD, MPH, MS, PhD, FICD, FWFO - Co-Owner
                  </span>
                </h2>
                <p className="mb-4">
                  Dr. Ivan Halim grew up in a family of dentists and often
                  shadowed his father growing up. As he was finishing his high
                  school, he realized that he wanted to follow his grandparents
                  and father’s footstep and become the third-generation dentist
                  in the family.
                </p>
                <p className="mb-4">
                  Dr. Ivan completed his undergraduate degree at University of
                  California, Los Angeles (UCLA), CA, USA. He then moved to
                  Arizona to complete a dual degree in Doctor of Dental Medicine
                  and Master of Public Health at A.T. Still University, Arizona
                  School of Dentistry & Oral Health, AZ, USA, followed by the
                  Master of Science in Orthodontics and Certificate in
                  Orthodontics and Dentofacial Orthopedics. His master thesis
                  focuses in tongue space and upper airway volume. During
                  residency, Dr. Ivan have taken additional courses on clear
                  aligner and digital dentistry. Due to his passion in teaching,
                  during the pandemic, Dr Ivan completed his PhD (Doctor of
                  Philosophy) degree in military dentistry from Padjadjaran
                  University, Bandung. His research was focused primarily on
                  upper airway.
                </p>
                <p className="mb-4">
                  Dr. Ivan have published several scientific and clinical
                  articles in peer-reviewed orthodontic and dental journals. He
                  also presented several of his research and clinical knowledge
                  at several national & international conferences. Dr. Ivan has
                  a strong commitment to clinical education, patient care, and
                  research and is currently holding a researcher status at A.T.
                  Still University. In 2024, it was announced at the American
                  Association of Orthodontists Annual Session that Dr. Ivan was
                  awarded the Roberto Justus “Rising Star” Award from the World
                  Federation of Orthodontists. He is also a past reviewer of the
                  American Journal of Orthodontics and Dentofacial Orthopedics
                  (AJO-DO).
                </p>
                <p>
                  Dr. Ivan is an active member of American Dental Association,
                  Indonesian Dental Association, Indonesian Association of
                  Orthodontists and many more. He is also the International
                  Ambassador of the American Association of Orthodontists. Dr
                  Ivan is a fellow of the World Federation of Orthodontists
                  (WFO), International College of Dentists (ICD) and Italian
                  Society of Orthodontics (Società Italiana di Ortodonzia
                  (SIDO)). Dr. Ivan aims to implement digital workflow to the
                  clinic to help improve the quality of care for the patient and
                  values the importance of team work and multidisciplinary
                  approach in his day-to-day practice, especially in treating
                  patient with obstructive sleep apnea.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap px-4 lg:px-0 mb-8 lg:mt-4">
          <div className="w-full text-sm mb-8 lg:w-1/2 lg:pl-8 lg:pr-12 lg:mb-0 lg:flex lg:justify-end">
            <div>
              <h3 className="font-semibold mb-4 lg:mb-6">EDUCATION</h3>
              <ul className="xl:text-justify list-disc pl-4">
                <li className="mb-2">
                  <span className="inline-block mr-2">
                    Bachelor of Science in Biochemistry (BS)
                  </span>{" "}
                  <span className="text-brand text-sm font-normal">
                    University of California, Los Angeles, CA, USA
                  </span>
                </li>
                <li className="mb-2">
                  <span className="inline-block mr-2">
                    Doctor of Dental Medicine (DMD)
                  </span>{" "}
                  <span className="text-brand text-sm font-normal">
                    A.T. Still University, AZ, USA
                  </span>
                </li>
                <li className="mb-2">
                  <span className="inline-block mr-2">
                    Master of Public Health (MPH)
                  </span>{" "}
                  <span className="text-brand text-sm font-normal">
                    A.T. Still University, AZ, USA
                  </span>
                </li>
                <li className="mb-2">
                  <span className="inline-block mr-2">
                    Master of Science in Orthodontics (MS)
                  </span>{" "}
                  <span className="text-brand text-sm font-normal">
                    A.T. Still University, AZ, USA
                  </span>
                </li>
                <li className="mb-2">
                  <span className="inline-block mr-2">
                    Certificate in Orthodontics and Dentofacial Orthopedics
                  </span>{" "}
                  <span className="text-brand text-sm font-normal">
                    A.T. Still University, AZ, USA
                  </span>
                </li>
                <li className="mb-2">
                  <span className="inline-block mr-2">
                    Foreign Degree Equilibration (DMD, MS)
                  </span>
                  <span className="text-brand text-sm font-normal">
                    University of Indonesia, Jakarta, Indonesia
                  </span>
                </li>
                <li className="mb-2">
                  <span className="inline-block mr-2">
                    Doctor of Philosophy (PhD)
                  </span>
                  <span className="text-brand text-sm font-normal">
                    Padjadjaran University, Bandung, Indonesia
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full text-sm lg:w-1/2 lg:pr-8">
            <h3 className="font-semibold mb-4 lg:mb-6">ACCREDITATIONS</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 text-brand">
              <ul className="list-disc pl-4">
                <li className="mb-1">
                  <span>Member of American Dental Association</span>
                </li>
                <li className="mb-1">
                  <span>
                    Member and International Ambassador of American Association
                    of Orthodontists
                  </span>
                </li>
                <li className="mb-1">
                  <span>Member of Pacific Coast Society of Orthodontists</span>
                </li>
                <li className="mb-1">
                  <span>Member of California Association of Orthodontists</span>
                </li>
                <li className="mb-1">
                  <span>
                    Member of Charles H. Tweed International Foundation
                  </span>
                </li>
              </ul>
              <ul className="list-disc pl-4">
                <li className="mb-1">
                  <span>
                    Member of Delta Omega Honorary Society in Public Health
                  </span>
                </li>
                <li className="mb-1">
                  <span>
                    Member and Advisory Board of Indonesian Association of
                    Orthodontists
                  </span>
                </li>
                <li className="mb-1">
                  <span>Fellow of World Federation of Orthodontists</span>
                </li>
                <li className="mb-1">
                  <span>Fellow of International College of Dentists</span>
                </li>
                <li className="mb-1">
                  <span>
                    Fellow of Italian Society of Orthodontics (Società Italiana
                    di Ortodonzia (SIDO))
                  </span>
                </li>
              </ul>
            </div>
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
