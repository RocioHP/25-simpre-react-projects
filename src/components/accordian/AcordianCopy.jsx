import { data } from "./index.js"
import { useState } from "react"

const AcordianCopy = () => {
  //Single selection logic
  const [showAnswer, setShowAnswer] = useState(null);
  const handleSingleSelection = (currentId) => {
    setShowAnswer(currentId === showAnswer ? null : currentId)
  };

  //Multiselection logic
  const [enableMultiselection, setEnableMultiselection] = useState(null);
  const [multiselectionArr, setMultiselectionArr] = useState([]);

  const toggleMultiselection = () => {
    setEnableMultiselection((prev) => !prev);
  };
  const handleMultiselection = (currentId) => {
    let cpymultiselectionArr = [...multiselectionArr];
    const findIndexOfCurrentId = cpymultiselectionArr.indexOf(currentId);
    if (findIndexOfCurrentId === -1) cpymultiselectionArr.push(currentId)
    else cpymultiselectionArr.splice(findIndexOfCurrentId, 1)

    setMultiselectionArr(cpymultiselectionArr);
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => toggleMultiselection()} className="rounded-full bg-blue-500 p-2 hover:bg-blue-200 m-5">Enable multiselection</button>
      {data && data.length > 0 ? <div className="border-black border-2 w-[400px]">
        {data.map((dataitem, index) => (
          <div key={index} >  
            <div  onClick={() => enableMultiselection ? handleMultiselection(dataitem.id) : handleSingleSelection(dataitem.id)}  className="flex justify-center items-center gap-3 p-3 bg-blue-200 border-white border-2">
              <h3>{dataitem.question}</h3>
              <span>+</span>
            </div>
            {enableMultiselection 
            ? multiselectionArr.indexOf(dataitem.id) !== -1 && <p className="bg-blue-500 text-center">{dataitem.answer}</p> 
            : showAnswer === dataitem.id && <p className="bg-blue-500 text-center">{dataitem.answer}</p>}
          </div>
        ))}
      </div> : null }
    </div>
  )

}
export default AcordianCopy

