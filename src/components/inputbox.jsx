import React,{useId} from 'react'

function Inputbox({
    label,
    amount,
    onammountchange,
    oncurrencychange,
    currencyoptions = [],
    selectedcurrency = "usd",
    amountdisabled = false,
    currencydisabled = false,
    classname = '',

}) {

  const id = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
        <div className='w-1/2'>
         <label 
         htmlFor={id}
         className='text-black/40 mb-2 inline-block'>{label}</label>
         <input 
         id={id}
         type="number"
          className='outline-none w-full bg-transparent py-1.5'
          placeholder='Amount'
          disabled= {amountdisabled}
          value={amount}
          onChange={(e) => onammountchange && onammountchange(Number(e.target.value))}
          />
        </div>
        <div className='w-1/2 flex  flex-wrap justify-end text-right'>
         <p className='text-black/40 mb-2 w-full'>Currency Type</p>
         <select 
         className='rounded-lg px-1 bg-gray-100 cursor-pointer outline-none'
         value={selectedcurrency}
         onChange={(f) => {
          // e.preventDefault();
          oncurrencychange && oncurrencychange(f.target.value) }}
         disabled={currencydisabled}
         >
            {currencyoptions.map((Currency) => (<option key={Currency} value={Currency}>{Currency}</option>))}
         </select>
        </div>
    </div>
  )
}

export default Inputbox