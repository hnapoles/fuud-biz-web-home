import Head from 'next/head';

export default function ContactUs() {
  return (
    <div>
      <Head>
        <title>Fuud | Contact Us</title>
      </Head>
      <div class="py-10">
        <header>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">
              Contact Us
            </h1>
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/*-- Replace with your content */}
            <div class="px-4 py-8 sm:px-0">
              <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
            {/*-- End replace with your content */}
          </div>
        </main>
      </div>
    </div>
  )
}
