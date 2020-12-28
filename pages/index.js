import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fuud | Home</title>
      </Head>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Welcome
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/*-- Replace with your content */}
            <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
            {/*-- End replace with your content */}
          </div>
        </main>
      </div>
    </div>
  )
}
