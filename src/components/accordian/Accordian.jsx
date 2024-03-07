import { useState } from "react";
import { data } from "./index";

const Accordian = () => {
  const [selected, setselected] = useState(null);
  
  const handleSingleSelection = (getCurrentId) => {
    setselected(getCurrentId === selected ? null : getCurrentId);
  };
  
  //multiselection Logic
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const toggleMultiselection = () => {
    setEnableMultiSelection((prev) => !prev);
  };
  const handleMultiSelection = (getCurrentId) => {

  };
  const [multiple, setMultiple] = useState([]);
    return (
      
      <div className="flex flex-col items-center p-10">
        <button onClick={toggleMultiselection} className="m-4">
          Enable Multiselection
        </button>
        {data && data.length > 0 ? 
        data.map(dataItem=> <div>
          <div className="flex" onClick={enableMultiSelection 
            ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
              <h3>{dataItem.question}</h3>
              <span>+</span>
          </div>
          {selected === dataItem.id ? (
              <div>
                {dataItem.answer} 
              </div>
          ) : null}
        </div>) : <div>No data found !</div>
        }
      </div>
  )
}

export default Accordian
