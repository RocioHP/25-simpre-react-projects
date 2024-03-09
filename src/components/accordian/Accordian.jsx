import { useState } from "react";
import { data } from "./index";

const Accordian = () => {
  const [selected, setselected] = useState(null);
  
  const handleSingleSelection = (getCurrentId) => {
    setselected(getCurrentId === selected ? null : getCurrentId);
  };
  
  //multiselection Logic
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const toggleMultiselection = () => {
    setEnableMultiSelection((prev) => !prev);
  };
  
  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

    if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiple(cpyMultiple);
  };
   

  
  
    return (
      
      <div className="flex flex-col items-center p-10">
        <button onClick={toggleMultiselection} className="m-4">
          Enable Multiselection
        </button>
        {data && data.length > 0 ? 
        data.map((dataItem, index) => <div key={index}>
          <div  className="flex" onClick={enableMultiSelection 
            ? () => handleMultiSelection(dataItem.id) 
            : () => handleSingleSelection(dataItem.id)}>
              <h3>{dataItem.question}</h3>
              <span>+</span>
          </div>
            {
              enableMultiSelection ? 
              multiple.indexOf(dataItem.id) !== -1 &&
              <div>
                {dataItem.answer} 
              </div> : selected === dataItem.id && <div>
                {dataItem.answer} 
              </div>
            }
        </div>) : <div>No data found !</div>
        }
      </div>
  )
}

export default Accordian
