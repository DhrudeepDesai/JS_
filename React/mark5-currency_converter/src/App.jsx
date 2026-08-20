import { useState } from "react";
import InputBox from "./components/InputBox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { currencyList } from "./constants";

function App() {
  const [amt, setAmt] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [cnvAmt, setCnvAmt] = useState(0);

  //custom hook
  const currencyInfo = useCurrencyInfo(from);

  // Use fetched currency options, fallback to predefined list
  const options = Object.keys(currencyInfo).length > 0 ? Object.keys(currencyInfo) : currencyList;

  const swap = () => {
    setFrom(to);
    setTo(from);
    setCnvAmt(amt);
    setAmt(cnvAmt);
  };

  const convert = () => {
    if (from === to) {
      // Same currency, no conversion needed
      setCnvAmt(amt);
    } else if (currencyInfo[to]) {
      setCnvAmt(amt * currencyInfo[to]);
    } else {
      alert('Conversion rate not available. Please try again.');
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/35719588/pexels-photo-35719588.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox label="From" amount={amt} onAmountChange={(amount) => setAmt(amount)} currencyOptions={currencyList} onCurrencyChange={(currency) => setFrom(currency)} selectCurrency={from}/>
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" amount={cnvAmt} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to} amountDisable={true}/>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
