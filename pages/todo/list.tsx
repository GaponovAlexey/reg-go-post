import { useState } from 'react'

const url = 'http://localhost:8080/api/lists'

const List = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const Send = async () => {
    let headers = new Headers()

    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')

    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080')
    headers.append('Access-Control-Allow-Credentials', 'true')
    const requestOptions = {
      Credential: 'include',
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ title, description }),
    }
    const res = await fetch(url, requestOptions)
    const data = await res.json()

    console.log(data)
  }

  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
          <div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
            <h1 className='title-font font-medium text-3xl text-gray-900'>
              Add to db: Postgres
            </h1>
            <p className='leading-relaxed mt-4'>All List</p>
          </div>
          <div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
            <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
              list
            </h2>
            <div className='relative mb-4'>
              <label className='leading-7 text-sm text-gray-600'>Title</label>
              <input
                type='text'
                name='full-name'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative mb-4'>
              <label className='leading-7 text-sm text-gray-600'>
                Description
              </label>
              <input
                type='text'
                name='email'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <button
              onClick={Send}
              className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            >
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default List
