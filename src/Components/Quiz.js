import React, { useState } from "react";
import { Data } from "./Data";
import { Button } from "react-bootstrap";

const Quiz = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
const [score, setScore] = useState(0);
  const next = ()=>{
    if(index < data.length-1){
        setIndex(index+1)
    }
    else{
        document.querySelector('.score').innerHTML=`<p>Your score is ${score}/8</P>`
        // document.querySelector(".quiz").innerHTML=""
        let nextBtn = document.querySelector('#next');
        nextBtn.innerHTML = "Play Again";
        nextBtn.classList.add("reset")
        const reset = document.querySelector(".reset");
        reset.addEventListener("click", ()=>{
            window.location.reload('');
        }) 
    }
    // const checked = document.querySelectorAll('.checkedValue');
    // checked = forEach((curVal)=>{
    //   curVal.checked = false;
    // })
  }

  const handleInput = (event)=>{
    // eslint-disable-next-line no-unused-vars
    let chooseValue = event.target.value;
    console.log(chooseValue)
    if(chooseValue === data[index].ans){
        setScore(score+1)
    }
  } 
  console.log(score)
  console.log(data);
  return (
    <div className="container">
      <div className="quiz">
        <div>
          <h1>Q: {data[index].q}</h1>
        </div>

        <div className="option">
          <input name='select' type="radio"onChange={handleInput} className="checkedValue" value={data[index].a} />
          <p>{data[index].a}</p>
        </div>

        <div className="option">
          <input name='select' type="radio"onChange={handleInput} className="checkedValue" value={data[index].b} />
          <p>{data[index].b}</p>
        </div>

        <div className="option">
          <input name='select' type="radio"onChange={handleInput} className="checkedValue" value={data[index].c} />
          <p>{data[index].c}</p>
        </div>

        <div className="option">
          <input name='select' type="radio"onChange={handleInput} className="checkedValue" value={data[index].d} />
          <p>{data[index].d}</p>
        </div>
        <div className="score"></div>
        <div className="flex justify-center align-center">
          <Button id="next" onClick={next}>Next</Button>
        </div>

      </div>
    </div>
  );
};

export default Quiz;
