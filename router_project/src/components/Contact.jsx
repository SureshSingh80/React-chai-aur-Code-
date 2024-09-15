import React from 'react'

const Contact = () => {
  return (
    <div style={{height:"30rem"}} className='p-8 flex'>
      {/* left-side */}
      <div className='w-1/2  flex justify-center items-center '>

         <div className="bg-gray-200 w-1/2 ml-64 p-4 rounded-xl text-gray-600">
            <h2 className='text-2xl font-bold'>Get in Touch:</h2>
            <p className='mb-4'>Fill in the form to start a conversation</p>

          {/* location */}
           <div className='flex p-4'>
              <div className='mr-4'>
                <i className="fa-sharp fa-solid fa-location-dot relative "></i>
              </div>
              
              <div className='mr-4 relative -top-4'>
                <h4>Acme Inc,Street</h4>
                <h4>State,Postal Code</h4>
              </div>
           </div>

           {/* telephone */}
           <div className='flex p-4'>
              <div className='mr-4 -mt-8'>
              <i class="fa-solid fa-phone"></i>
              </div>
              
              <div className='mr-4 -mt-8 '>
                <p>+441234567890</p>
              </div>
           </div>
            {/* email */}
           <div className='flex p-4'>
              <div className='mr-4 -mt-8'>
              <i class="fa-solid fa-light fa-envelope"></i>
              </div>
              
              <div className='mr-4 -mt-8 '>
                <p>info@acme.org</p>
              </div>
           </div>
            
         </div> 
      </div>

      {/* right-side */}
      <div className='w-1/2 '>
       
        <div className='mt-24 ml-8'>
          <form action="">
              <input type="text" placeholder="Full Name" className='border-2 w-64 p-2 m-2 rounded-lg'/><br />
              <input type="text" placeholder='Email' className='border-2 w-64 p-2 m-2 rounded-lg'/><br />
              <input type="text" placeholder='Telephone number' className='border-2 w-64 p-2 m-2 rounded-lg'/><br />
              <button type="submit" className='m-2 py-2 px-4 bg-red-700 text-white rounded-xl'>Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact