import React from 'react'

const NewsletterBox = () => {

    const submitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'> Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Subscribe today and enjoy 20% off your first order—exclusive deals straight to your inbox!</p>
        <form onSubmit={submitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-200 pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email"  placeholder='Enter Your email' required />
            <button type='submit' className='bg-black text-white text-[15px] px-10 py-4 outline-none border-none cursor-pointer'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox