import { useState } from "react"
import { faCreditCard, faLightbulb, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAssistant } from "../../../../react-query/mutation/assistant";

const Income = () => {
  const [amount,setAmount]=useState("0");
  const[suggestion,setSuggestion]=useState("Suggestion will appear here...");

  const{mutate:handleAnalyze,isPending} = useAssistant();
  

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setAmount(value);
    }
  }

  const handleAnalyzeClick = () => {
    const numericAmount = Number(amount);
    handleAnalyze({
      payload: {
        amount:numericAmount
      }
    },
    {
      onSuccess: (data: { spending_plan: string }) => {
        setSuggestion(data?.spending_plan || "No suggestion available");
      },
      onError: () => {
        setSuggestion("Failed to get suggestion");
      }
    }
  );
  }

  return (
    <>
      <div className="w-[400px] h-[450px] rounded-2xl">
        
            <div className="bg-[#9e9e9e] w-[400px] h-[220px] mb-[3%] rounded-2xl ">
              <div className="text-center pt-[15%] ">
                <h1 className="mb-3 text-[#ffff]">Enter Your Monthly Income</h1>
                <input 
                  type="text" 
                  className="bg-[#ffff] mb-3 p-[2%] rounded-sm" 
                  placeholder="enter your amount" 
                  value={amount}
                  onChange={handleChange}
                  />
                <div>

                <button 
                  className="bg-[#40c1f1] w-48 h-10 rounded-xl text-[#ffff]"
                  onClick={handleAnalyzeClick}
                  >
                    Analyze with AI
                </button>

                </div>
              </div>
            </div>

             <div className="bg-[#9e9e9e] w-[400px] h-[220px] rounded-2xl">
                    <div className="text-center pt-14">
                        <h1 className="text-[#ffff]">
                        <FontAwesomeIcon icon={faCreditCard} style={{ color: "#ffffff" }} />  Income vs Exprenses
                        </h1>
                        <div className="text-[#ffff] text-4xl">{amount} GEL</div>
                    </div>
              </div>

      </div>

      <div className="w-[400px] h-[450px] rounded-2xl">

        <div className="bg-[#9e9e9e] w-[400px] h-[450px] mb-[3%] rounded-2xl">
              <div className="text-left pt-2 pl-3">
                <h1 className="text-[#fff] mb-3"><FontAwesomeIcon icon={faLightbulb} style={{ color: "#FFD43B" }} /> Savings Recomendations</h1>
                <p className="text-[#fff]">
                {isPending ? (
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faSpinner} spin /> Loading suggestion...
                </span>
              ) : (
                suggestion
              )}
                </p>
              </div>
            </div>
        
      </div>


</>
  )
}

export default Income