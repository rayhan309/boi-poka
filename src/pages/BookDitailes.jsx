// import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useLoaderData } from "react-router";

const BookDitailes = () => {

    const { id } = useParams()
    // console.log(id)

    const allBooksData = useLoaderData()
    // console.log(allBooksData)

    const book = allBooksData.find(bookData => bookData.bookId === Number(id))
    const { bookName, review, author, tags, totalPages, publisher, yearOfPublishing, rating, image } = book;
    // console.log(bookName, review, author, tags, totalPages, publisher, yearOfPublishing, rating , bookId)

    return (
        <div className='flex gap-[150px] my-16 work'>
            <div className='p-20 bg-gray-50 rounded-xl shadow-xs'>
                <img
                    className='max-w-[250px] rotate-12'
                    src={image}
                    alt="books" />
            </div>

            {/* context */}
            <div className=''>
                <div className='border-b border-gray-300'>
                    <h2 className='text-[40px] font-semibold'>{bookName}</h2>
                    <p className='text-xl font-medium mb-2.5'>by : {author}</p>
                </div>
                <div className='mt-6 border-b border-gray-300'>
                    <p className='text-gray-500'><span className='font-bold text-[#131313]'>Review : </span>{review}</p>
                    <div className='flex gap-12 items-center mt-2 text-lg font-bold mb-2.5'>
                        <p>tags</p>
                        {
                            tags.map((tag, index) =>
                                <span
                                    className='text-[#23BE0A]'
                                    key={index}>
                                    #{tag}</span>)
                        }
                    </div>
                </div>

                <div className='flex items-center gap-15 mt-6'>
                    <div className='space-y-2'>
                        <p className='item'>Number of Pages:</p>
                        <p className='item'>Publisher:</p>
                        <p className='item'>Year of Publishing:</p>
                        <p className='item'>Rating:</p>
                    </div>

                    <div className='space-y-2'>
                        <p className='category'>{totalPages}</p>
                        <p className='category'>{publisher}</p>
                        <p className='category'>{yearOfPublishing}</p>
                        <p className='category'>{rating}</p>
                    </div>
                </div>

                <div className='mt-8'>
                    <button className='btn mr-4'>Read</button>
                    <button className='btn text-white bg-[#59C6D2]'>Wishlist</button>
                </div>
            </div>
        </div>
     );
};

export default BookDitailes;