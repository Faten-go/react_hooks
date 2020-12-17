import React from 'react'
import Rating from '../rate/Rate'
function Filter ({setTextSearch, setsearchRate , rating} ) {
    return (
        <div>
            <p>Filter your movies based on Name: </p>
            <input placeholder="search for movie" onChange={
                (e)=> setTextSearch(e.target.value)
            } />
            <p>
                Filter your movies based on rating: 
            </p>
            <Rating setsearchRate={setsearchRate} rating = {rating} />
        </div>
    )
}

export default Filter