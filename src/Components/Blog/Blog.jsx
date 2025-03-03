import React from 'react';

const Blog = ({ blog }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className='mb-16 border-b-2 py-6'>
            <img className='mb-6 rounded-lg w-full' src={cover} alt={`Cover Picture of ${title}`} />

            <div className='flex items-center justify-between mb-5'>
                <div className=' flex items-center'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-3'>
                        <h1 className="text-xl">{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>

            <h1 className='text-xl mb-5'>{title}</h1>

            <p>
                {
                    hashtags.map(has => <span><a href=""> #{has}</a></span>)
                }
            </p>
        </div>
    );
};


export default Blog;