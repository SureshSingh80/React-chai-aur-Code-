import React from 'react'

const About = () => {
  return (
    <div className='h-96 flex p-8 justify-between' style={{height:"30rem"}}>
        <div className='w-1/2  p-4'>
            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" className='h-96 ml-32'/>
        </div>
        <div className='w-1/2  p-4'>
            <h2 className='text-4xl font-bold '>React development is carried out by passionate developers</h2><br />
            <p className='leading-6 text-gray-600'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p><br />
            <p className='leading-6 text-gray-600'>
                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
        </div>
    </div>
  )
}

export default About