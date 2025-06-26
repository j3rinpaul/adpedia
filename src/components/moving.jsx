import React, { useRef } from 'react';

const blogs = [
  {
    id: '1',
    title: 'Introducing Our New Product',
    summary: 'Innovative features of our latest launch.',
    date: '2024-06-25',
    url: 'https://medium.com/@yourcompany/our-new-product'
  },
  {
    id: '2',
    title: 'Behind the Scenes at Adpedia',
    summary: 'How our team creates magic every day.',
    date: '2024-06-20',
    url: 'https://facebook.com/adpedia/posts/123456789'
  },
  {
    id: '2',
    title: 'Behind the Scenes at Adpedia',
    summary: 'How our team creates magic every day.',
    date: '2024-06-20',
    url: 'https://facebook.com/adpedia/posts/123456789'
  },
  {
    id: '2',
    title: 'Behind the Scenes at Adpedia',
    summary: 'How our team creates magic every day.',
    date: '2024-06-20',
    url: 'https://facebook.com/adpedia/posts/123456789'
  },
  {
    id: '3',
    title: 'Top 5 Marketing Trends in 2025',
    summary: 'What you need to know now.',
    date: '2024-06-18',
    url: 'https://medium.com/@yourcompany/marketing-trends-2025'
  }
];

function MovingBlogs() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-gray-100 py-8 px-4 border-b-4 border-black">
      <h2 className="text-4xl  text-center mb-6" style={{fontFamily:"Montserrat"}}>📰 Newsroom</h2>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-2 py-1  hover:bg-gray-200 hidden sm:block"
        >
          ⬅️
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar px-6"
        >
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[250px] max-w-sm bg-white rounded-lg p-4 shadow hover:shadow-lg transition hover:bg-gray-50"
            >
              <h3 className="text-lg font-semibold" style={{fontFamily:"Quicksand"}}>{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-2"  style={{fontFamily:"Quicksand"}}>{blog.summary}</p>
              {/* <p className="text-xs text-gray-400 mt-3"  style={{fontFamily:"Montserrat"}}>{blog.date}</p> */}
            </a>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10  px-2 py-1 rounded-full hover:bg-gray-200 hidden sm:block"
        >
          ➡️
        </button>
      </div>
    </div>
  );
}

export default MovingBlogs;
