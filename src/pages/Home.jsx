import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Books from "./Books";

const Home = () => {

    const allBooksData = useLoaderData()
    // console.log(allBooksData)

    return (
        <>
            <Banner />
            <Books allBooksData={allBooksData} />
        </>
    );
};

export default Home;