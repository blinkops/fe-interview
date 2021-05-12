import './main.css';
import React,{useState,useEffect} from 'react';
import ActionBar from '../actionBar/actionBar.js';
import NavBar from '../navBar/navBar.js';
import Card from '../card/card.js';


function Main() {
    const [patients,setPatients]=useState([]);
    const [data, setData]=useState([]);
    const [filterdData, setFilterdData] = useState([]);
    const [ageRange, setAgeRange] = useState([0,99]);
    const [averageRange, setAveargeRange] = useState([0,3800]);
    const [count, setCount] = useState({
      prev: 0,
      next: 100
    });
    
    
      const getMoreData = (event) => {
      if (patients.length === data.length) {
        return;
      }
       if (event.target.offsetHeight + event.target.scrollTop >=event.target.scrollHeight) {
      setTimeout(() => {
        setPatients(patients.concat(data.slice(count.prev + 100, count.next + 100)))
      }, 400)
      setCount((prevState) => ({ prev: prevState.prev + 100, next: prevState.next + 100 }))
    }
  }  

  
    const getData=()=>{
      fetch('patients.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson)
          setPatients(myJson.slice(0,100));
          setFilterdData(myJson);
          setCount((prevState) => ({ prev: prevState.prev + 100, next: prevState.next + 100 }))
        });
    }
    useEffect(()=>{
      getData()
    },[])


    function sort(sortBy){
        if (sortBy === "name"){       
            setPatients(filterdData.sort((a, b) => (a.name > b.name) ? 1 : -1).slice(0,100));    
            setData(data.sort((a, b) => (a.name > b.name) ? 1 : -1)) ;     
        }
        else {                
            setPatients(filterdData.sort((a, b) => a.age - b.age).slice(0,100));  
            setData(data.sort((a, b) => a.age - b.age)) ;        
        }
        setCount(() => ({ prev: 0, next: 100 }));
        window.scrollTo(0, 0);
    }

    
    function filter(range, filterBy){
        if (filterBy === "Age"){
          setAgeRange(range);
          if(averageRange[0] !=0 || averageRange[1] !=3800  ){
            averageFilter(data.filter((a) =>  range[1] >= a.age && a.age >= range[0]));
          }
          else{
            setPatients(data.filter((a) =>  range[1] >= a.age && a.age >= range[0]).slice(0,100));
            setFilterdData(data.filter((a) =>  range[1] >= a.age && a.age >= range[0]));          
          }
            }
        else {
          setAveargeRange(range);
          if(ageRange[0] !=0 || ageRange[1] !=99 ){
            ageFilter(data.filter((a) =>  range[1] >= a.averageReplyTime && a.averageReplyTime > range[0]));
          }
          else{
            setPatients(filterdData.filter((a) =>  range[1] >= a.averageReplyTime && a.averageReplyTime > range[0]).slice(0,100));
            setFilterdData(filterdData.filter((a) =>  range[1] >= a.averageReplyTime && a.averageReplyTime > range[0]));            
            }
        setCount(() => ({ prev: 0, next: 100 }));
    }
  }   


    const averageFilter = (arr) => {
      setPatients(arr.filter((a) =>  averageRange[1] >= a.averageReplyTime && a.averageReplyTime > averageRange[0]).slice(0,100));
      setFilterdData(arr.filter((a) =>  averageRange[1] >= a.averageReplyTime && a.averageReplyTime > averageRange[0]));
    }


    const ageFilter = (arr) => {
      setPatients(arr.filter((a) =>  ageRange[1] >= a.age && a.age > ageRange[0]).slice(0,100));
      setFilterdData(arr.filter((a) => ageRange[1] >= a.age && a.age > ageRange[0]));
    }


  return (
    <div className="App">
      <div className="content">
          <NavBar/>
          <ActionBar sort = {sort} filter={filter} />
          <div className='cardListContainer' onScroll={(event)=> getMoreData(event)}>
            {
            patients && patients.length>0 && patients.map((item)=><Card patient={item}/>) 
           }
          </div>
     </div>
    </div>
  );

}

export default Main;