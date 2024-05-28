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
    <div>
      <CarouselMain />
      <div>
        <div className='mt-10 flex flex-cols-3 gap-10'>
          {posts.map((post) => (
            <div key={post.id}>
              <div>
                <img 
                src={post.image} 
                alt=''
                style={{
                  height: '200px',
                  width: '300px',
                }}
                />
              </div>
              <div>
                <Link to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.description}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home