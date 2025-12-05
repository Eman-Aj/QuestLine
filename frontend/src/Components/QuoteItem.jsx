/* How the Quotes are formatted
{
	"q": "Lack of emotion causes lack of progress and lack of motivation.",
	"a": "Tony Robbins",
	"i": "https://zenquotes.io/img/tony-robbins.jpg",
	"c": "63",
	"h": "<blockquote>&ldquo;Lack of emotion causes lack of progress and lack of motivation.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
}
*/
import "../css/QuoteItem.css"

export default function QuoteItem({
    quote
}) {


    return(<>
        <div className="quote-divison"> 
            <h3 className="quote">"{quote.q}" </h3>
            <h4 className="quote-author">- {quote.a}</h4>
            
            </div>   
        </>)
}