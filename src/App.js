import React,{useState} from 'react';
import './index.css'
import Card from './Card';
import Data from './Data';
const App=()=>{
  const [data,SetData]=useState(Data);
  const onClick=(cat)=>{
    const updated=Data.filter((item)=>{
      return(item.categ===cat)
    })
    SetData(updated)
  }
  return(<>
     <h1 className="heading">Order Your Favourate Food</h1>
    <hr/>
    <div className="navbar">
      <button className="btn" onClick={()=>{onClick('breakfast')}}>Breakfast</button>
      <button className="btn" onClick={()=>{onClick('lunch')}}>Lunch</button>
      <button className="btn" onClick={()=>{onClick('evening')}}>Evening</button>
      <button className="btn" onClick={()=>{onClick('dinner')}}>Dinner</button>
      <button className="btn" onClick={() =>{SetData(Data)}}>All</button>
    </div>
    <div className="list-group">
    <div className="list">
  {
data.map((ele,ind)=>{
  return(<Card
     key={ind}
     img={ele.img}
     title={ele.title}
     para={ele.para}
     price={ele.price}
     tag={ele.tag}

  />)
})
  }
  </div>
  </div>
  </>)
}
export default App;