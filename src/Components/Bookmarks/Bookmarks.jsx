import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className='md:w-1/3 text-2xl bg-gray-300 p-8 rounded-lg'>
            <h1 className='mb-4'>Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark =>
                    <Bookmark
                        bookmark={bookmark}
                    ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;