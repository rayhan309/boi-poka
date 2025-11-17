import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: 'Page C',
    uv: 300,
    pv: 1398,
    amt: 2400,
  },
  {
    name: 'Page D',
    uv: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: 'Page E',
    uv: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: 'Page F',
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
];

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};
// #endregion

/**
 * Generates the SVG path for the custom bar shape.
 * NOTE: The 'number' argument was removed, fixing the argument mismatch.
 * @param {number} x - The x-coordinate of the bar's top-left corner.
 * @param {number} y - The y-coordinate of the bar's top-left corner.
 * @param {number} width - The width of the bar.
 * @param {number} height - The height of the bar.
 * @returns {string} The SVG path string.
 */
const getPath = (x, y, width , height ) =>
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

// Main component to render the chart
export default function Test() {
  return (
    // Use ResponsiveContainer to make the chart adapt to its parent's size
    <ResponsiveContainer width="100%" height={300}>
      <BarChart 
        data={data} 
        margin={margin}
      >
        <XAxis dataKey="name" />
        <YAxis />
        {/* The 'shape' prop tells Recharts to use our custom TriangleBar component */}
        <Bar dataKey="uv" fill="#8884d8" shape={TriangleBar} />
      </BarChart>
    </ResponsiveContainer>
  );
}