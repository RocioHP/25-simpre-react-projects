import { data } from "./index.js";
import { useState } from "react"

const AcordianCopy = () => {
  const [openAnswer, setOpenAnswer] = useState(null)
  
  const showAnswer = (getCurrentId) => {
    setOpenAnswer(getCurrentId === openAnswer ? null : getCurrentId)
  };
  
  
  
  
  return (
    <div >
      {data.map((dataItem, index) => (
        <div key={index} onClick={() => showAnswer(dataItem.id)} className="flex justify-center ">
          <h3>{dataItem.question}</h3>
          <span>+</span>
          {openAnswer === dataItem.id
          && <div>{dataItem.answer}</div>
           }
        </div>

        
      ))}
      
    </div>
  );
}

export default AcordianCopy

