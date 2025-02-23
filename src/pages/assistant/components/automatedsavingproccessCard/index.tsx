import { faSignal } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AutomatedSavingProcess = () => {
  return (
              <div className="bg-[#9e9e9e] w-[400px] h-[220px] rounded-2xl">
                   <div>
                     <h1 className="text-[#ffff] pt-2 pl-2 mb-3">
                       <FontAwesomeIcon icon={faSignal} style={{ color: "#007bff", fontSize: "24px" }} />   Automated Saving Proccess</h1>
                     <p className="text-[#fff] pt-2 pl-2 ">
                       You've saved 20% of your goal this month!
                     </p>
                   </div>
               </div>
  )
}

export default AutomatedSavingProcess