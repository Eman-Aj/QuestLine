/* How the Quotes are formatted
{
	"q": "Lack of emotion causes lack of progress and lack of motivation.",
	"a": "Tony Robbins",
	"i": "https://zenquotes.io/img/tony-robbins.jpg",
	"c": "63",
	"h": "<blockquote>&ldquo;Lack of emotion causes lack of progress and lack of motivation.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
}
*/

import { useEffect, useState } from "react";
import defaultQuotes from "./DefaultQuote";

export default function QuoteService() {
  // Holds API info
  const quotesApiUrl =
    "https://api.allorigins.win/raw?url=https://zenquotes.io/api/quotes";

  const fetchQuotes = async () => {
    const response = await fetch(quotesApiUrl);
    const data = await response.json();
    return data; // array[50]
  };

  const getQuotes = async () => {
    const data = await fetchQuotes();
    console.log("Fetched New Quotes", data);
    setQuotes(data);
    setQuoteNumber(0);
    return data;
  };

  const loadQuotes = async () => {
    const stored = localStorage.getItem("Quotes");

    if (stored) {
      return JSON.parse(stored);
    }

    console.log("Couldn't find quotes");
    return await fetchQuotes();
  };

  // Loads initial persistence
  const loadQuoteNumber = () => {
    const n = parseInt(localStorage.getItem("QuoteNumber"));
    return isNaN(n) ? 0 : n;
  };

  const [quotes, setQuotes] = useState(
    { q: "Loading Quotes", a: "Shouldn't Take Long" },
  );
  const [quoteNumber, setQuoteNumber] = useState(loadQuoteNumber);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    localStorage.setItem("QuoteNumber", quoteNumber);
  }, [quoteNumber]);

  useEffect(() => {
    if (Object.keys(quotes).length === 1) return;
    localStorage.setItem("Quotes", JSON.stringify(quotes));
  }, [quotes]);

  useEffect(() => {
    const call = async () => {
      const data = await loadQuotes();
      // console.log("Here's the loaded Quotes", data);
      setLoaded(true)
      // setQuotes(data);
    }
    call();
  }, []); // Empty array for startup

  useEffect(()=> {
    if (!loaded) return;
    const newQuotes = JSON.parse(localStorage.getItem("Quotes"))
    setQuotes(newQuotes)
    // console.log("Loaded", newQuotes);
    setLoaded(false)
  }, [loaded])

  const localQuotes = () =>{
    return JSON.parse(localStorage.getItem("Quotes"));
  }

  const removeQuotes = async () => {
    localStorage.removeItem("Quotes");
    console.log("Quotes Removed");
    await getQuotes();
  };


  //Issue with loading and persisting quote data
  //For now we will load from Default Quotes saved
  const randomQuote =  () => {
    if (!quotes) return defaultQuotes[1];
    const Lquotes = localQuotes()


    // If we've reached the end (0–49)
    if (quoteNumber >= 49 || quoteNumber === null) {
      // const newQuotes = await getQuotes();
      // setQuotes(newQuotes);
      setQuoteNumber(0)
      return defaultQuotes[0];
    }

    const nextIndex = quoteNumber + 1;
    setQuoteNumber(nextIndex);

    console.log(nextIndex, defaultQuotes[nextIndex]);
    
    
    return defaultQuotes[nextIndex];
  };

  return { removeQuotes, randomQuote };
}

export function QuoteServiceCredit() {
  return (
    <div className="quote-credit">
      Inspirational quotes provided by
      <div>
        <a href="https://zenquotes.io/" target="_blank">
          ZenQuotes API
        </a>
      </div>
    </div>
  );
}
