import Head from 'next/head'
import Setup from '../../components/Setup';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Token Scan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div className="flex container flex-col min-w-full h-full justify-center ">

        <Setup></Setup>

      </div>


    </div>
  )
}
