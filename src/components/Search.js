import React from 'react';
// import Shoe from './Shoe';

export default function Search(props){
        
    return(
        <div>
            <input 
                placeholder="Search Inventory"
                onChange={(e) => props.handleSearch(e.target.value)}
            />
        </div>
    )
}