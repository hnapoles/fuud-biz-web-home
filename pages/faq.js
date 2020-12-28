import Head from 'next/head';
import { supportEmail } from '../constants/emails';
import FAQ from '../constants/faqs';

export default function FAQPage() {
  return (
    <div>
      <Head>
        <title>Fuud | FAQ</title>
      </Head>
      <div className="py-1">
        {/* 
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              FAQ
            </h1>
          </div>
        </header>
        */}
        <main>
          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <h2 className="text-3xl font-bold leading-tight text-gray-900">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">Can’t find the answer you’re looking for? Reach out to our <a href={`mailto:${supportEmail}`} className="font-medium text-indigo-600 hover:text-indigo-500">customer support</a> team.</p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                  <dl className="space-y-12">
                  

                  
                    {FAQ.map( ({ id, q, a }) => (
                        <div key={id}>
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            {q}
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {a}
                          </dd>
                        </div>
                    ))}
                

                    
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

