import Head from 'next/head';

import { signIn, signOut, useSession } from 'next-auth/client'

export default function About() {
  const [ session, loading ] = useSession()
  
  return (
    <div>
      <Head>
        <title>Fuud | About</title>
      </Head>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              About
            </h1>
          </div>
        </header>
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>
      <div className="block">
        <p className="block">
          {!session && <>
            <span className="block">You are not signed in</span>
            <a
                href={`/api/auth/signin`}
                className="button"
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
          </>}
          {session && <>
            {session.user.image && <span style={{backgroundImage: `url(${session.user.image})` }} className="avatar"/>}
            <span className="block">
              <small>Signed in as</small><br/>
              <strong>{session.user.email || session.user.name}</strong>
              </span>
            <a
                href={`/api/auth/signout`}
                className="button"
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
          </>}
        </p>
      </div>
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
