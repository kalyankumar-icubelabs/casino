import type { AppProps } from 'next/app'

import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer data={[{title:"HELP CENTER",link:"/help-center"},
      {title:"USER AGREEMENT",link:"/user-agreement"}, {title:"USER AGREEMENT",link:"/user-agreement"}
      ]}/>
    </>
  )
}
