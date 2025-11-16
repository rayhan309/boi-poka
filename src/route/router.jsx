import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import BookDitailes from "../pages/BookDitailes";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    // error handeling
    errorElement: <p>no page</p>,
    children: [
      {
        index: true,
        loader: () => fetch('booksData.json'),
        Component: Home
      },
      {
        path: '/bookDitailes/:id',
        loader: () => fetch('booksData.json'),
        Component: BookDitailes
      }
    ]
  },
]);
