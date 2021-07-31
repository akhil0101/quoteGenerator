
import React from 'react';
import { MdGrade } from "react-icons/md";
import './Rating.css';

function Rating(props) {
   
    //console.log(props);
    return (
        <div className="mb-2">
        {[...Array(5)].map((star,i)=>{
            const ratingVal=i+1;
          return (
              <label key = {i}>
              <input type="radio" name="rating" value={ratingVal} onClick={()=>{
                   props.handlerating(ratingVal)
              }}/>

              
              <MdGrade 
               className="star" 
               size={20}
                color={ratingVal <=props.rating? "yellow ": "gray "}/>
              </label>
          )
        })

        }
           
        </div>
    )
}

export default Rating
