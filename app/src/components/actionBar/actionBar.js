import React from 'react';
import './actionBar.css';
import Sort from '../sort/sort.js';
import Filter from '../filter/filter.js';

function ActionBar(props) {
  return (
    <div className='actionBar'> 
    <div className="dropDownContainer">
     <Sort sort={props.sort}/>   
    </div>
    <div className="filterContainer">
     <Filter filter={props.filter} filterBy='Age' range={[0,99]}/>   
    </div>
    <div className="filterContainer">
     <Filter filter={props.filter} filterBy='Avarage replay time' range={[0,3800]}/>   
    </div>   
    </div>
  );
}

export default ActionBar;



