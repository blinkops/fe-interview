import React,{useState,useEffect} from 'react';
import './card.css';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Card(props) {

  return (
    <div className="card" >
        <div className="header">
          <PermContactCalendarIcon className="patient_icon"/>
          <h4 className='patient_name'>{props.patient.name}</h4>
        </div>
        <div className='patient_data'>
          <div className="basicData">
          <label>ID:
             <span className='field'>{props.patient.id}</span>
          </label>
          <label>Age:
            <span className='field'>{props.patient.age}</span>
          </label>
          </div>
          <div className='offers'>
          <label >Accepted Offers:
             <span className='field accepted'>{props.patient.acceptedOffers}</span>
          </label>         
          <label  >Canceled Offers:
             <span className='field canceled'>{props.patient.canceledOffers}</span>
          </label>
          </div>
          <label className="avarageTime">Average Reply Time:
            <span className='field'>{props.patient.averageReplyTime}</span>
          </label>        
        </div>    
    </div>
  );
}

export default Card;
