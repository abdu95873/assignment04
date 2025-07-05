

import App from "@/App";
import { AddBook } from "@/pages/AddBook";
import Book from "@/pages/AllBook";
import BookDetails from "@/pages/BookDetails";
import Borrow from "@/pages/Borrow";
import BorrowSummary from "@/pages/BorrowSummary";
import EditBook from "@/pages/EditBook";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        Component:App,
        children:[
          {
             path:"/",
            Component:Home,
           },
           {
             path:"books",
            Component:Book,
           },
           {
             path:"create-book",
            Component:AddBook,
           },
           {
             path:"books/:id",
            Component:BookDetails,
           },
           {
             path:"/edit-book/:id",
            Component:EditBook,
           },
           {
             path:"/borrow/:id",
            Component:Borrow,
           },
           {
             path:"borrows-summary",
            Component:BorrowSummary,
           },
        ]
    },
])

export default router;