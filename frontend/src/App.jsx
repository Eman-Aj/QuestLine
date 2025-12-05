import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";

//Components
import Timer from "./Components/Timer";
import Todolist from "./Components/Todolist";
import QuoteItem from "./Components/QuoteItem";

//Hooks
import handleVisiblity from "./hooks/Visiblity";

//Services
import Notifications from "./Services/Notifications";
import QuoteService from "./Services/QuoteService";
import { QuoteServiceCredit } from "./Services/QuoteService";

function App() {

  //Service Functions
  const { notify } = Notifications(); //Find Visibility Component Here
  const { removeQuotes, randomQuote } = QuoteService();

  //States
  const [notifications, setNotification] = useState(
    localStorage.getItem("notifications")
  );
  const [quote, setQuote] = useState(randomQuote())
  const [lastQuote, setLastQuote] = useState(Math.floor(Date.now() / 1000));

  //Quote Overflow
  const changeQuote = () => {
    const quoteTime = Math.floor(Date.now() / 1000);
    if (quoteTime - lastQuote > 3) {
      setQuote(randomQuote());
      // console.log("Quote Changed");
      setLastQuote(quoteTime)
    } 
    else {console.log("Slow down buster");}
  }

  //Todo List Availablility
  localStorage.getItem("List") != null
    ? null
    : localStorage.setItem("List", JSON.stringify({})); //If theres no list don't get one, if there is get

  const notificationToggle = <>
    <button
      className={`notify-button-${notifications}`}
      onClick={() => {
        var status = notifications;
        status = status == "on" ? "off" : "on";
        localStorage.setItem("notifications", status);
        setNotification(status);
        console.log(status);
      }}
    >
      Recieve Notifications
    </button>
    <button
      onClick={() => {
        notify("Hello");
      }}
    >
      Test Button
    </button>
  </>



  return (
    <div className="main-div">

      {notificationToggle}

      <QuoteItem quote={quote}/>
      <Timer sendNotification={notify} changeQuote={changeQuote} />
      <Todolist />

      <button onClick={removeQuotes}> Update Quotes</button>
      <button onClick={changeQuote}> New Quote</button>
      <QuoteServiceCredit />

    </div>
  );
}

export default App;
