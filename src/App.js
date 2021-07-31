
import './App.css';

import React ,{useState,useEffect}from 'react';
import Rating  from './Components/Rating';

function App() {
  const[loading,setLoading]=useState(false);
  const[quote,setQuote]=useState('');
  const [randomnquote,setRandomnquote]=useState("");
  const[rating,setRating]=useState(0);


  useEffect(() => {
    async function callApi(){
      setLoading(true);
      try{
        const response=   await fetch("https://type.fit/api/quotes");
        const data= await response.json();
        setQuote(data);
          
    const randomnindex = Math.floor(Math.random()*data.length);
    setRandomnquote(data[randomnindex])
      }
      catch(e){
        console.error(e);
      }
   
    setLoading(false);
    }
    
    callApi();
  }, []);

  const newQuoteClick=()=>{
    if(rating === 0){
      alert("please rate the Quote")
    }else{
      if(rating === 4 ||rating === 5){
       // console.log(randomnquote.author);
        const filterVal=quote.filter(quote=>quote.author===randomnquote.author);
        //console.log(filterVal.length);
        if(filterVal.length>1){
          const randomnindex = Math.floor(Math.random()*filterVal.length);
          setRandomnquote(filterVal[randomnindex]);
        }
        else{
          const randomnindex = Math.floor(Math.random()*quote.length);
        setRandomnquote(quote[randomnindex])
        }
      }else{
        const randomnindex = Math.floor(Math.random()*quote.length);
        setRandomnquote(quote[randomnindex])
      }
      
    }
    setRating(0)
   
  }


  const handlerating=(props)=>{
  //  console.log(props);
    setRating(props)
  }


  return (
    <>
   
    <div  className="App ">
    <div className="heading"> <h3>Quote Generator</h3></div>
        <div className="container shadow-sm p-3 mb-5  rounded " >
            {loading ? "Loading...": <>
            
            <div className="card">
            <div className="card-body">
           
            <br></br>
            <div><h6>Quote:  </h6> <p className="card-text ">{randomnquote.text}</p></div>
            <br/>
            <div className="mb-2"><h6>Author:  </h6>  <p className="card-text ">"{randomnquote.author||`No Author`}"</p>
            </div>
           <Rating rating={rating} handlerating={handlerating}/>
          
           
            <button type="button" className="btn btn-primary"
            onClick={newQuoteClick}>NewQuote</button>
            </div>
          </div>
            </>}
        
        
        </div>
       
    </div>
        <footer className=" text-center text-lg-start footer"  >

        <div className="text-center p-3" >
          © DoneBY :  
          <a className="text-dark ms-2"rel="noreferrer"  target="_blank" href="https://www.linkedin.com/in/akhil-kandakatla/">Akhil</a>
        </div>
      
      </footer>
    </>
  );
}

export default App;
