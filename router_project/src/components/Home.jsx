import React from 'react'

const Home = () => {
  return (
    <div className="  p-4 mb-4  overflow-y-scroll h-96  " style={{height:"30rem"}}>
      
           {/* first row */}
          <div className='flex justify-center mb-0'>
             
              <div>
                <img src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" className='h-[50%]' />
              </div>

              <div>
                <div className='mt-16'>
                    <h2 className='text-4xl font-bold'>Download Now</h2>                 
                    <h2 className='text-2xl font-semibold ml-28'>Lorem ipsum</h2>
                    <button className='bg-red-700 text-white py-2 px-4 rounded-xl mt-4 ml-28'> <i class="fa-brands fa-google-play"></i> Download Now</button>
                </div>
              </div>

          </div>

          {/* second row */}
          <div className="flex justify-center -mt-40 mb-4">
            <div>
              <img src="https://i.ibb.co/2M7rtLk/Remote3.png" alt="image2" className='h-44'/>
              <h1 className="text-4xl font-medium  ">Lorem Ipsum Yojo</h1>
            </div> 
         </div>
    </div>
  )
}

export default Home