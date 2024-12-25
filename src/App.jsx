import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usecurrencyinfo from './hooks/usecurrencyinfo'
import { Inputbox } from './components/index.js'

function App() {
   const [amount, setamount] = useState(0)
   const [from, setfrom] = useState('usd')
   const  [to, setTo] = useState('inr')
   const [convertedamount, setconvertedamount] = useState(0)

  const currencyinfo = usecurrencyinfo(from)
  const options = Object.keys(currencyinfo)

  const swap = () => {
    setfrom(to)
    setTo(from)
    setconvertedamount(amount)
      setamount(convertedamount)
    
  }

  const convert = () => {
    setconvertedamount(amount * currencyinfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://www.shutterstock.com/image-photo/american-paper-money-100-dollar-600nw-2164362131.jpg)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border p-4  border-gray-50 rounded-lg backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="from"
                amount={amount}
                currencyoptions={options}
                oncurrencychange={(currency) => {
                  // console.log(currency);
                  
                  setfrom(currency)}}
                onammountchange={(amount) => setamount(amount)}
                selectedcurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <Inputbox
                label="to"
                currencyoptions={options}
                amount={convertedamount}
                oncurrencychange={(currency) => setTo(currency)}
                selectedcurrency={to}
                amountdisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
