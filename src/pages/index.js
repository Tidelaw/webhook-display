import Head from 'next/head'
import AddressInput from '../../components/AddressInput';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div className="flex container flex-col min-w-full justify-center ">

        <div className='flex justify-center text-7xl font-bold text-orange p-16'>Helius Token Balance</div>

        <AddressInput></AddressInput>

      </div>


    </div>
  )
}