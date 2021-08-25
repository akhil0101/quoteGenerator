import React,{useState,useEffect} from 'react'
import { Rate ,Button} from 'antd';
import 'antd/dist/antd.css';
import {getSimilarQuote,getVeryDifferentQuote} from '../../utils/StringSimilarity'
import Styles from './QuoteGenerator.module.css'
import {performFetchCall} from '../../Api/PerformFetchcall'
import Loading from '../Loading/Loading'


const desc = ["terrible", "bad", "normal", "good", "wonderful"];

function Quotegenerator() {
    const [allQuotes, setAllQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState([]);
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);
    // const [useQuotes,setUsedQuotes]=useState([])
    useEffect(() => {
        CallQuoteApi();
      }, []);

      async function CallQuoteApi() {
        setLoading(true);
        const allQuotes= await performFetchCall();
        console.log(allQuotes);
        setAllQuotes(allQuotes);
        let random = Math.floor(Math.random() * (allQuotes.length));
        setCurrentQuote(allQuotes[random]);
        setLoading(false);
      }
      function removeCurrentQuote(currentQuoteText,allQuotesText){
        allQuotesText=  allQuotesText.filter((val)=>val.text!==currentQuoteText);
        setAllQuotes(allQuotesText);
      }

      function getNewQuote() {
       if (rating > 3) {
        const Similar = getSimilarQuote(currentQuote.text, allQuotes);
          removeCurrentQuote(currentQuote.text, allQuotes)
         
          setCurrentQuote(Similar[0]);
          setRating(0);
        } else {
          const VeryDifferent = getVeryDifferentQuote(currentQuote.text, allQuotes);
          removeCurrentQuote(currentQuote.text, allQuotes)
          setCurrentQuote(VeryDifferent[0]);
          setRating(0);
        }
      }
    return (
        <>
        {!loading && currentQuote ? (
            <div className ={Styles.main}>
              <div className ={Styles.quote}>
                <blockquote>
                  <div className={Styles.text}>{currentQuote.text}</div>
                </blockquote>
                <figcaption>
                  <cite>{currentQuote.author}</cite>
                </figcaption>
              </div>
            <Rate tooltips={desc} onChange={(value)=>{setRating(value)}} value={rating}/>
              <div className={Styles.buttonStyle}>
                <Button
                  type="primary"
                  loading={loading}
                  onClick={() => getNewQuote()}
                 
                >Get New Quote</Button>
              </div>
            </div>
          ) : (
            <div className={Styles.loader}>
              <Loading content="Fetching the details..." />
            </div>
          )}
        </>
    )
}

export default Quotegenerator
