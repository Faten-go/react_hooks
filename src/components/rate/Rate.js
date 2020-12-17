import React from 'react';

function Rate( {rating , setsearchRate} ) {
   const stars = (x) => {
       let starArray=[]
for ( let  i=1 ; i<=5; i++  ){
if (i<=x){
    starArray.push(<span  onClick={()=> setsearchRate(i)} style={{color:"#ffda00"}}>★</span>)
} else {
    starArray.push(<span  onClick={()=> setsearchRate(i)}>☆</span>)
}
}
return starArray
   }
    return (
        <div>
            {stars(rating)}
        </div>
    )
}

export default Rate