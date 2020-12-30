import NextAuth from 'next-auth'

import Providers from 'next-auth/providers'

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    //Providers.Email({
    //  server: {
    //    port: 465,
    //    host: 'smtp.gmail.com',
    //    secure: true,
    //    auth: {
    //     user: process.env.EMAIL_USERNAME,
    //      pass: process.env.EMAIL_PASSWORD,
    //    },
    //    tls: {
    //      rejectUnauthorized: false,
    //    },
    //  },
    //  from: process.env.EMAIL_FROM,
    //}),
    Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: { 
      appleId: process.env.APPLE_ID,
      teamId: process.env.APPLE_TEAM_ID,
      privateKey: process.env.APPLE_PRIVATE_KEY,
      keyId: process.env.APPLE_KEY_ID,
      }
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
  ],
  //database: process.env.DATABASE_URL,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    // Set to true to use encryption. Defaults to false (signing only).
    encryption: true,
  },
  callbacks: {
    
    redirect: async (url, baseUrl) => {
      /*
      if (url === '/api/auth/signin') {
        return Promise.resolve(process.env.NEXT_PUBLIC_DEFAULT_URL_AFTER_SIGNIN || '/')
      }
      if (url.startsWith(baseUrl + '/auth/signin')) {
        return Promise.resolve(process.env.NEXT_PUBLIC_DEFAULT_URL_AFTER_SIGNIN || '/')
      }
      */
      console.log('url', url)
      console.log('base', baseUrl)
      return Promise.resolve(url);
    }
    
  },
  pages: {
    signIn: '/auth/signin'
  },
  
}

export default (req, res) => NextAuth(req, res, options)