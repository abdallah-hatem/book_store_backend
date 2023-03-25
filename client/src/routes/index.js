import { lazy } from "react";

// import Books from "../pages/Books";
import AddBook from "../pages/AddBook";
import UpdateBook from "../pages/UpdateBook";

const Books = lazy(() => import("../pages/Books"));
// const AddBook = lazy(() => import("../pages/AddBook"));
// const UpdateBook = lazy(() => import("../pages/UpdateBook"));

export const routes = [
  {
    path: "/books",
    component: <Books />,
    fallback: <h2>Loading Books....</h2>,
  },
  {
    path: "/add-book",
    component: <AddBook />,
  },
  {
    path: "/update-book/:id",
    component: <UpdateBook />,
  },
];
