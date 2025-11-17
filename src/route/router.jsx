import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import BookDitailes from "../pages/BookDitailes";
import ReadList from "../pages/ReadList";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    // error handeling
    errorElement: <p>no page</p>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
         loader: () => fetch('booksData.json'),
      },
      {
        path: '/bookDitailes/:id',
        loader: () => fetch('booksData.json'),
        Component: BookDitailes
      },
      {
        path: '/readList',
        loader: () => fetch('booksData.json'),
        Component: ReadList
      }
    ]
  },
]);
