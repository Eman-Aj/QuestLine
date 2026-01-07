
/* How the Quotes are formatted
{
	"q": "Lack of emotion causes lack of progress and lack of motivation.",
	"a": "Tony Robbins",
	"i": "https://zenquotes.io/img/tony-robbins.jpg",
	"c": "63",
	"h": "<blockquote>&ldquo;Lack of emotion causes lack of progress and lack of motivation.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
}
*/

export default function QuoteService(){
    //Holds API info
    const quotesApiUrl = "https://api.allorigins.win/raw?url=https://zenquotes.io/api/quotes";

    const getQuotes = async () => {
    
        const response = await fetch(quotesApiUrl);
        var data = await response.json()
        console.log(data)
        localStorage.setItem("Quotes", JSON.stringify(data))
        console.log("Added New Quotes");
    
    }

    const checkQuotes = () =>{
        if (localStorage.getItem("Quotes") === null || localStorage.getItem("Quotes") == {}) {
            getQuotes()
        } 
        else {
            
            return true;
        }
    }

    const removeQuotes = () => {
        localStorage.removeItem("Quotes")
        console.log("Quotes Removed");
        getQuotes()
        
    }

    const pickQuote = (index) => {
        checkQuotes();
        
        //Just the odd format of accessing the quote value
        const selectedQuote = Object.entries(JSON.parse(localStorage.getItem("Quotes")))[index][1]
  
        return selectedQuote; //Fixx it so i chooses and index
    }

    const randomQuote = () => {

        //Weird random picker
        var quoteNumber = parseInt(localStorage.getItem("QuoteNumber"));

        if (quoteNumber === null || quoteNumber >= 49) {
            getQuotes()
            quoteNumber = 0 
            localStorage.setItem("QuoteNumber", 0)
        } else {
            quoteNumber += 1
            localStorage.setItem("QuoteNumber", quoteNumber)
        }
        
        const quote = pickQuote(quoteNumber);

        return quote;
    }

    // checkQuotes() === true ? console.log("Quotes Already Added") : null; 

    
    

    
    return ({removeQuotes, randomQuote})
}

export function QuoteServiceCredit(){
    return (<div>
        Inspirational quotes provided by
        <div>
          <a href="https://zenquotes.io/" target="_blank">
            ZenQuotes API
          </a>
        </div>
      </div>)
}

