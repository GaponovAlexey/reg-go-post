import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Registry</title>
        <meta name='description' content='registry to db' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='text-3xl font-bold underline text-red-500'>start</div>
    </div>
  )
}

export default Home
