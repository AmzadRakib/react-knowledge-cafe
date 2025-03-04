import React from 'react';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div className=''>
            <h1 className='text-xl bg-slate-200 p-4 my-4 rounded-lg'>{title}</h1>
        </div>
    );
};

export default Bookmark;