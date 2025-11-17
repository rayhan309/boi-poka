import { Book, CircleChevronDown, File, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../utility/AddToDB';

const ReadList = () => {

    const data = useLoaderData()
    // console.log(data)

    const [localeData, setLocaleData] = useState([])

    useEffect(() => {
        // get locale stored data 
        const storedData = getStoredBook()
        // data parse 
        const parseId = storedData.map(id => Number(id))
        // data fitered 
        const filteredData = data.filter(book => parseId.includes(book.bookId))
        setLocaleData([...filteredData])
    }, [data]);


    console.log(localeData)

    return (
        <>
            <h2 className='text-3xl font-semibold text-center bg-gray-100 py-6'>Books</h2>

            <div className='mt-8'>
                <div className="dropdown mb-8 ml-[45%]">
                    <div tabIndex={0} role="button" className="btn m-1 text-white bg-[#23BE0A] transform p-5"><span className='text-lg'>Sort By </span><CircleChevronDown /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li className='text-gray-500'><a>Read Sort</a></li>
                        <li className='text-gray-500'><a>Wish Sort</a></li>
                    </ul>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>Read List</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>

                    {/* contents */}
                    <TabPanel>
                        {
                            localeData.map(book =>
                                <div key={book.bookId} className='my-10 flex flex-col md:flex-row gap-16'>
                                    <img
                                        className='h-[255px]  py-8 px-10 mb-4 bg-gray-100 rounded-xl shadow-2xl'
                                        src={book.image}
                                        alt="books" />

                                    <div className='w-full'>
                                        <div className='border-b-2 border-gray-300 pb-6'>
                                            <h2 className='text-2xl font-semibold'>{book.bookName}</h2>
                                            <p className='text-gray-600 font-semibold mt-2'>by : {book.publisher}</p>

                                            <div className='flex gap-8 items-center mt-4 font-medium mb-2.5'>
                                                <p>tags</p>
                                                {
                                                    book.tags.map((tag, index) =>
                                                        <span
                                                            className='text-[#23BE0A] bg-gray-100 px-3 p-1 rounded-full'
                                                            key={index}>
                                                            #{tag}</span>)
                                                }
                                                <p className='text-gray-500 flex items-center gap-2'><MapPin /> Year of Publishing: {}</p>
                                            </div>

                                            <div className='flex items-center gap-5 mt-4'>
                                                <p className='flex items-center gap-2 text-gray-500 font-medium'><Book /> Publisher : {book.publisher}</p>
                                                <p className='flex items-center gap-2 text-gray-500 font-medium'><File /> Pages : {book.totalPages}</p>
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-5 mt-5'>
                                            <p className='py-2 px-5 rounded-full font-medium text-blue-500 bg-gray-200'>Category : {book.category}</p>
                                            <p className='py-2 px-5 rounded-full font-medium text-[#FFAC33] bg-amber-100'>Category : {book.rating}</p>
                                            <p className='py-2 px-5 rounded-full font-semibold text-white bg-[#23BE0A] btn'>Viwe Ditailes</p>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Wish List</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default ReadList;