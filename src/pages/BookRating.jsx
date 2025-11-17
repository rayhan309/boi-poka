import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../utility/AddToDB';
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';


const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};
// #endregion

const containerMargin = {
    top: 100,
    bottom: 50,
}

/**
 * Generates the SVG path for the custom bar shape.
 * NOTE: The 'number' argument was removed, fixing the argument mismatch.
 * @param {number} x - The x-coordinate of the bar's top-left corner.
 * @param {number} y - The y-coordinate of the bar's top-left corner.
 * @param {number} width - The width of the bar.
 * @param {number} height - The height of the bar.
 * @returns {string} The SVG path string.
 */
const getPath = (x, y, width, height) =>
    `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;

export function TriangleBar(props) {
    const { fill, x, y, width, height } = props;

    // Recharts passes bar properties as props. We ensure they are valid numbers.
    if (x == null || y == null || width == null || height == null) {
        return <></>;
    }

    // Call getPath with the four necessary arguments: x, y, width, height
    return (
        <path
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke="none"
            fill={fill}
        />
    );
}

const BookRating = () => {

    const data = useLoaderData()
    // console.log(data)

    const [localeData, setLocaleData] = useState([])

    useEffect(() => {
        if (!data || data.length === 0) return;

        const storedData = getStoredBook()
        const parseId = storedData.map(id => Number(id))

        const filteredData = data.filter(book => parseId.includes(book.bookId))

        setLocaleData(filteredData)
    }, [data.length])  // best dependency for loader data

    return (
        <>
            <ResponsiveContainer width="100%" height={400} margin={containerMargin}>
                  <BarChart 
                    data={localeData} 
                    margin={margin}
                  >
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={TriangleBar} />
                    <Tooltip />
                  </BarChart>
                </ResponsiveContainer>
        </>
    );
};

export default BookRating;