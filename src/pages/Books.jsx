import { Star } from 'lucide-react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const Books = ({ allBooksData }) => {


    const navigate = useNavigate() 

    // toggle daynamic pages 
    const cardHandler = (id) => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
         navigate(`/bookDitailes/${id}`)
    };

    return (
        <div className='playfir my-[80px]'>
            <h2 className='text-4xl font-semibold text-center'>Books</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                {
                    allBooksData.map(singleBook =>
                        <div onClick={() => cardHandler(singleBook.bookId)} key={singleBook.bookId} className="card shadow-2xl p-4">
                            <figure className='bg-base-200  py-10'>
                                <img
                                    className='w-4/12 h-56 rotate-12'
                                    src={singleBook.image}
                                    alt="Books" />
                            </figure>
                            <div className="card-body">
                                <div className='flex items-center gap-16 mb-5 text-[#23BE0A]'>
                                    {
                                        singleBook.tags.map((tag, index) => <span key={index}>{tag}</span>)
                                    }
                                </div>
                                <h2 className="card-title text-xl">
                                    {singleBook.bookName}
                                    <div className="badge badge-secondary text-xl">{singleBook.totalPages}</div>
                                </h2>
                                <p>by : {singleBook.author}</p>
                                <div className="card-actions justify-between">
                                    <div className="text-xl font-normal">{singleBook.category}</div>
                                    <div className="text-lg font-normal flex items-center gap-2 ml-2">{singleBook.rating} <Star /></div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Books;