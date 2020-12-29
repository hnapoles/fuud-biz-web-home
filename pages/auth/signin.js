import React from 'react'
import { providers, signIn, useSession } from 'next-auth/client'
import Router, { useRouter } from 'next/router'

const logoImg = process.env.NEXT_PUBLIC_ASSETS_URL + '/img/logo_fullname3.png';

export default function SignIn({ providers }) {
  const [ session, loading ] = useSession()
  const { query: { callbackUrl } } = useRouter()

  if (session) Router.replace(process.env.NEXT_PUBLIC_DEFAULT_URL_AFTER_SIGNIN || '/' )

  return (
    <div className="min-h-screen flex  justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-2">
        <div>
          <img className="mx-auto h-12 w-auto" src={logoImg} alt="fuud.biz" />
          <h2 className="mt-6 mb-8 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        {Object.values(providers).map(provider => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id, { callbackUrl })} className="group relative w-full flex justify-center py-2 px-1 border border-gray-300 
              shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context)
  }
}

