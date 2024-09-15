import React from 'react'

const InfoBox = ({label,amount,selectedCurrency,onAmountChange, onCurrencyChange, currencyOptions=[], amountDisable=false}) => {
    console.log(amountDisable);
  return (
    
    <div className="w-full bg-white p-4 flex justify-around rounded-lg -mt-2">
        <div className="w-full">
            <label htmlFor="" className='text-gray-500'>{label}</label><br />
            <input type="number" min="1" className="outline-none pt-4 w-1/2  " value={amount} disabled={amountDisable}
              onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
       
       <div className="">
        <label htmlFor="" className='-mr-16 text-gray-500' >CurrencyType</label>
         <select className="mt-4 w-24 p-1  bg-gray-100 rounded-lg outline-none" value={selectedCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
           >

            {
              currencyOptions.map((currency)=>(
                <option  key={currency} value={currency} className=''>{currency}</option>  
              ))
            }
            
         </select>
       </div>
       

    </div>
  )
}

export default InfoBox