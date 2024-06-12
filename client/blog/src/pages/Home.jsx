import React from 'react'
import { Link } from 'react-router-dom';
import tech from '../assets/tech.jpg';
import foodie from '../assets/foodie.jpg'
import travel from '../assets/travels.jpg'
import art from '../assets/art.jpg'
import lifestyle from '../assets/lifestyle.jpg'
import CarouselMain from './CarouselMain';

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Bigger and better",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      image: tech,
    },
    {
      id: 2,
      title: "Bigger and better",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      image: foodie,
    },
    {
      id: 3,
      title: "Bigger and better",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      image: travel,
    },
    {
      id: 4,
      title: "Bigger and better",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      image: art,
    },
    {
      id: 5,
      title: "Bigger and better",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      image: lifestyle,
    },
  ]
  return (
    <div className='ml-10 mr-10'>
      <div>
        <CarouselMain />
      </div>

      <div className='m-20'>
        <div className='mt-12 flex flex-col gap-[150px]'>
          {posts.map((post, index) => (
            <div key={post.id} className={`flex gap-[100px] ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>

              <div style={{
                flex: '2',
                position: 'relative'
                }}>

                <img
                  src={post.image}
                  alt=''
                  className='w-full max-h-[400px] object-cover relative z-10'
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[380px] h-[350px] bg-[#D8D9DA]  -z-1"></div>
                </div>

              </div>

              <div className='flex flex-col justify-between'
                style={{
                  flex: '3',
                }}>
                <Link to={`/post/${post.id}`}>
                  <h1 className='text-4xl font-heading text-center'>{post.title}</h1>
                </Link>
                <p className='text-lg font-paragraph p-5'>{post.description}</p>
                <button className='w-max bg-[#D8D9DA] rounded-full flex justify-center items-center mx-auto p-2 hover:bg-[#61677A] hover:text-white'>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home