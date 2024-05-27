import React from 'react'
import travel from '../assets/travel.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center'
      style={{
        backgroundImage: `url(${travel})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-slate-50/30 p-8 rounded-lg shadow-lg flex flex-col items-center'>
        <h1 className='text-4xl mb-4 font-heading '>Login</h1>
        <form className='flex flex-col'>
          <div style={{ position: 'relative' }}>
            <input
              type='text'
              id='username'
              placeholder=' '
              className='mb-4 p-2 outline-none border-b-2 border-slate-900 rounded bg-transparent mt-4'

            />
            <label htmlFor='username' style={{ position: 'absolute', top: 0, left: 0 }}>
              Username
            </label>
          </div>
          <div style={{ position: 'relative' }}>
            <input
              type='password'
              id='password'
              placeholder=' '
              className='mb-4 p-2 outline-none border-b-2 border-slate-900 rounded bg-transparent mt-4'

            />
            <label htmlFor='password' style={{ position: 'absolute', top: 0, left: 0 }}>
              Password
            </label>
          </div>
          <button
            type='submit'
            className='p-2 bg-[#DBB5B5] text-white rounded hover:bg-[#987070]'
          >
            Login
          </button>
          <p className=' text-md text-red-600'>This is an error</p>
          <span className='pt-3'>
            Don't have an account? <Link to='/register' className='text-white'>Register</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
