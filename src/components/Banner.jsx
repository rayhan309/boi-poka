import bookImage from '../assets/bannerBook.png';

const Banner = () => {
    return (
        <div className="hero my-10 playfir">
            <div className="hero-content flex-col gap-16 bg-base-200 rounded-xl lg:flex-row-reverse py-16 md:px-28">
                <img
                    src={bookImage}
                    className="md:max-w-[250px] max-w-[180px] rounded-lg"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-white font-semibold mt-8">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;