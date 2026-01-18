import { useEffect, useRef, useState } from "react";
import "../css/App.css";
import "../css/styles.css";

//Components
import Timer from "../Components/Timer";
import Todolist from "../Components/Todolist";
import QuoteItem from "../Components/QuoteItem";

//Hooks
import handleVisiblity from "../hooks/Visiblity";

//Services
import Notifications from "../Services/Notifications";
import QuoteService from "../Services/QuoteService";
import { QuoteServiceCredit } from "../Services/QuoteService";
// import System from "./system";
// import NavBar from "./Components/NavBar";

export default function Home() {
  //Service Functions
  const { notify } = Notifications(); //Find Visibility Component Here
  const { removeQuotes, randomQuote } = QuoteService();

  //States
  const [notifications, setNotification] = useState(
    localStorage.getItem("notifications")
  );
  const [quote, setQuote] = useState({q: "Loading Quotes", a: "Shouldn't Take Long"});
  const [lastQuote, setLastQuote] = useState(0);

  //Quote Overflow
  const changeQuote = () => {
    const quoteTime = Math.floor(Date.now() / 1000);
    if (quoteTime - lastQuote > 3) {
      setQuote(randomQuote());
      // console.log("Quote Changed");
      setLastQuote(quoteTime);
    } else {
      console.log("Slow down buster");
    }
  };

  //Todo List Availablility
  localStorage.getItem("List") != null
    ? null
    : localStorage.setItem("List", JSON.stringify({})); //If theres no list don't get one, if there is get




  return (
    <>
        <QuoteItem quote={quote} />
        <Timer
          className="timer-class"
          sendNotification={notify}
          changeQuote={changeQuote}
        />
        <Todolist />

        <QuoteServiceCredit />
    </>
  );
}

//   const notificationToggle = (
//     <>
//       <button
//         className={`notify-button-${notifications}`}
//         onClick={() => {
//           var status = notifications;
//           status = status == "on" ? "off" : "on";
//           localStorage.setItem("notifications", status);
//           setNotification(status);
//           console.log(status);
//         }}
//       >
//         Recieve Notifications
//       </button>
//       <button
//         onClick={() => {
//           notify("Hello");
//         }}
//       >
//         Test Button
//       </button>
//     </>
//   );