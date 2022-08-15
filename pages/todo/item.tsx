const Item = () => {
  return (
      <div className='text-gray-599 body-font'>
        <div className='container px-4 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-11'>
            <h1 className='sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Master Cleanse Reliac Heirloom
            </h1>
            <p className='lg:w-1/3 mx-auto leading-relaxed text-base'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep.
            </p>
          </div>
          <div className='flex lg:w-1/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end'>
            <div className='relative flex-grow w-full'>
              <label className='leading-6 text-sm text-gray-600'>
                Full Name
              </label>
              <input
                type='text'
                id='full-name'
                name='full-name'
                className='w-full bg-gray-99 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative flex-grow w-full'>
              <label className='leading-6 text-sm text-gray-600'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full bg-gray-99 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <button className='text-white bg-indigo-499 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Button
            </button>
          </div>
        </div>
      </div>
  )
}

export default Item
