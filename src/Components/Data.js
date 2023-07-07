import ClimbPage from "../Pages/ClimbPage";
import HistoryPage from "../Pages/HistoryPage";
import HomePage from "../Pages/HomePage";
import Navbar from "./Navbar";

export const Data = [
  {
    question: "Homepage",
    answer: [<HomePage />],
  },
  {
    question: "History",
    answer: <HistoryPage />,
  },
  {
    question: "climb",
    answer: <ClimbPage />,
  },
];
