// import { useEffect } from 'react'
// import type { AppProps } from 'next/app'
// import { NextPage } from 'next'
// import { useRouter } from 'next/router'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// import { Poppins } from 'next/font/google'
// import Layout from '../components/Layout'
// import '../styles/globals.css'
// import BackToTop from '../components/BackToTop'
// // Extend NextPage to include optional noLayout flag
// type PageWithLayout = NextPage & {
//   noLayout?: boolean
// }

// const poppins = Poppins({
//   weight: ['400', '500', '600'],
//   subsets: ['latin'],
//   variable: '--font-sans',
// })

// // Optional: tweak NProgress appearance
// NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

// export default function App({
//   Component,
//   pageProps,
// }: AppProps & { Component: PageWithLayout }) {
//   const router = useRouter()
//   const noLayout = Component.noLayout

//   useEffect(() => {
//     const handleStart = () => NProgress.start()
//     const handleStop = () => NProgress.done()

//     router.events.on('routeChangeStart', handleStart)
//     router.events.on('routeChangeComplete', handleStop)
//     router.events.on('routeChangeError', handleStop)

//     return () => {
//       router.events.off('routeChangeStart', handleStart)
//       router.events.off('routeChangeComplete', handleStop)
//       router.events.off('routeChangeError', handleStop)
//     }
//   }, [router])

//   const content = (
//     <main className={`${poppins.variable} font-sans`}>
//       <Component {...pageProps} />
//       <BackToTop/>
//     </main>
//   )

//   return noLayout ? content : <Layout>{content}</Layout>
// }











import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { Poppins, Noto_Kufi_Arabic } from 'next/font/google'
import Layout from '../components/Layout'
import '../styles/globals.css'
import BackToTop from '../components/BackToTop'
import { SlugMapProvider } from '../lib/SlugMapContext'

// Extend NextPage to include optional noLayout flag
type PageWithLayout = NextPage & {
  noLayout?: boolean
}

type SlugMap = Record<string, Record<string, string>>
type PagePropsWithSlugMap = { slugMap?: SlugMap }

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const notoKufiArabic = Noto_Kufi_Arabic({
  weight: ['400', '500', '600'],
  subsets: ['arabic'],
  variable: '--font-sans',
})

// Optional: tweak NProgress appearance
NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: PageWithLayout }) {
  const router = useRouter()
  const noLayout = Component.noLayout
  const slugMap = (pageProps as PagePropsWithSlugMap).slugMap ?? {}

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleStop = () => NProgress.done()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  // Dynamically select font class based on locale
  const fontClass = router.locale === 'ar' ? notoKufiArabic.variable : poppins.variable

  const content = (
    <main className={`${fontClass} font-sans`}>
      <Component {...pageProps} />
      <BackToTop />
    </main>
  )

  const appTree = noLayout ? content : <Layout>{content}</Layout>
  return <SlugMapProvider slugMap={slugMap}>{appTree}</SlugMapProvider>
}
