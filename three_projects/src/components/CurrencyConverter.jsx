import React, { useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import InfoBox from './InfoBox';

const CurrencyConverter = () => {
  
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [amount,setAmount]=useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0);

  let currencyInfo=useCurrencyInfo(from);
  let options=Object.keys(currencyInfo);

  let convert=()=>{
      setConvertedAmount(amount*currencyInfo[to])
  }

  let swap=()=>{
     setFrom(to);
     setTo(from);
     setAmount(()=>convertedAmount);
     setConvertedAmount(()=>amount);

  }
  return (
    <div  style={{
      backgroundImage: `url('https://imgs.search.brave.com/nJxyf0i9TF1BD_-lz2muqHCvvlksicX6WcW4QJPQTsQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jdXJyZW5jeS1l/eGNoYW5nZS1nbG9i/YWwtZm9yZWlnbi1t/b25leS1maW5hbmNl/LXVkc18zMTk2NS00/OTg3NzQuanBnP3Np/emU9NjI2JmV4dD1q/cGc')`,
  }} className="w-full h-screen  flex justify-center items-center">
       <div className="w-1/2 backdrop-blur-md border-2 border-gray-600 rounded-xl pt-8 pl-8 pr-8 pb-6">
          <form action="" onSubmit={(e)=> {e.preventDefault(); convert(); }}>

            {/* first InfoBox */}
           <InfoBox label="From" amount={amount}  selectedCurrency={from}
             onAmountChange={(amount)=>setAmount(amount)} 
             onCurrencyChange={(currency)=>setFrom(currency)}
             currencyOptions={options}
           >

           </InfoBox>

           {/* Swap button */}

           <div className='text-center '>
              <button onClick={swap} className="bg-blue-600 border-2 border-white text-white py-2 px-4 -my-2 rounded-lg">
               <span className="material-symbols-outlined relative top-2 ml-1">swap_vert</span>
            </button>
           </div>

            {/* Second InfoBox */}
           <InfoBox label="To" amount={convertedAmount} selectedCurrency={to} currencyOptions={options} 
           
             onCurrencyChange={(currency)=>setTo(currency)}   amountDisable
           >

           </InfoBox>

           <div className="">
              <button type="submit" className='mt-4  rounded-lg bg-blue-600 border border-white text-white p-4 w-full ' >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
           </div>
          </form>
           
       </div>
    </div>
  )
}

export default CurrencyConverter