import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home";
import Blogs from "../components/blogs/Blogs";
import BlogsDetails from "../components/blogs/BlogsDetails";
import Bookmarks from "../components/Bookmark/Bookmarks";
import Content from "../components/content/Content";
import Author from "../components/author/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader:()=> fetch(`https://dev.to/api/articles?per_page=20&top=7`)
      },
      {
        path:"/blog/:id",
        element:<BlogsDetails></BlogsDetails>,
        loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
            index:true,
            element:<Content></Content>
          },
          {
            path:"author",
            element:<Author></Author>
          },
        ]
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>
      },
    ]
  },

])