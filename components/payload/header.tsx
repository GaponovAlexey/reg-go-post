import Link from 'next/link'

const Header = ({ children }: any) => {
  return (
    <>
      <div className='flex justify-between p-1 text-gray-600 body-font'>
        <h1>
          <Link href={'/'}>Home</Link>
        </h1>
        <div className='flex'>
          <div className='mr-4 hover:text-green-400 cursor-pointer'>
            <Link href={'auth/SignIn'}>Login</Link>
          </div>
          <div className=' hover:text-red-400 cursor-pointer'>Relog</div>
        </div>
      </div>
      {children}
    </>
  )
}

export default Header
