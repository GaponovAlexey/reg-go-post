import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/payload/header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Registry</title>
        <link rel='icon' href='#!' />
      </Head>
      <div>
        <div className='text-gray-600 body-font h-screen'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='text-center mb-20'>
              <h1 className='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4'>
                Server Golang
              </h1>
              <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
                DB: Postgres
              </p>
            </div>
            <h1 className='text-center bold'>Todo:</h1>
            <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
              <div className='p-2 sm:w-1/2 w-full'>
                <Link href={'/todo/item'}>
                  <div className='bg-gray-100 rounded flex p-4 h-full items-center cursor-pointer hover:bg-slate-400'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='3'
                      className='text-indigo-500 w-6 h-6 flex-shrink-0 mr-4'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                      <path d='M22 4L12 14.01l-3-3'></path>
                    </svg>

                    <span className='title-font font-medium'>Item</span>
                  </div>
                </Link>
              </div>
              <div className='p-2 sm:w-1/2 w-full '>
                <Link href={'/todo/list'}>
                  <div className='bg-gray-100 rounded flex p-4 h-full items-center cursor-pointer hover:bg-slate-400'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='3'
                      className='text-indigo-500 w-6 h-6 flex-shrink-0 mr-4'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                      <path d='M22 4L12 14.01l-3-3'></path>
                    </svg>
                    <span className='title-font font-medium '>List</span>
                  </div>
                </Link>
              </div>
            </div>
            <button className='flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
