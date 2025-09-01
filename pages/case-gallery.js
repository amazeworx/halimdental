import Head from "next/head";

export default function CaseGallery() {
  return (
    <div>
      <Head>
        <title>Case Gallery | Halim Dental Clinic</title>
        <meta
          name="description"
          content="Case Gallery - Coming Soon"
        />
      </Head>

      <main className="max-w-7xl mx-auto lg:pt-20 lg:pb-20 lg:px-8">
        <div className="flex flex-col items-center">
            <svg className="w-24 h-24 text-gray-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="font-bold text-2xl lg:text-4xl mb-4">CASE GALLERY</h1>
            <p className="text-lg lg:text-xl text-gray-600">
                Coming Soon
            </p>
        </div>
      </main>
    </div>
  );
}