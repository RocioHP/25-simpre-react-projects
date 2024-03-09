import { data } from "./index.js"
import { useState } from "react"

const AcordianCopy = () => {
  const [showAnswer, setShowAnswer] = useState(null);
  const handleSingleSelection = (currentId) => {
    setShowAnswer(currentId === showAnswer ? null : currentId)
  }

  return (
    <div className="w-[400px]">
      {data && data.length > 0 ? <div className="border-black border-2">
        {data.map((dataitem, index) => (
          <div key={index} >  
            <div  onClick={() => handleSingleSelection(dataitem.id)}  className="flex justify-center items-center gap-3 p-3 bg-blue-200 border-white border-2">
              <h3>{dataitem.question}</h3>
              <span>+</span>
            </div>
            {showAnswer === dataitem.id && <p className="bg-blue-500 text-center">{dataitem.answer}</p>}
          </div>
        ))}
      </div> : null }
    </div>
  )

}
export default AcordianCopy

