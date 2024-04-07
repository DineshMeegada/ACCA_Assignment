import React from 'react'
import { Form } from '../Form'
import { Modal } from '../Model'

const BecomeACCAIn18months = () => {
  return (
    <div className='bg-[#c0e2ff]  grid gap-10 md:flex md:gap-10 p-10 text-black'>
      <div className='flex-1'>
      <div className='flex flex-col gap-5'>
          <h1 className=' font-semibold text-[30px]'>Become ACCA In 18 months</h1>
          <p className='text-[15px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid alias ea reprehenderit, fugiat deserunt excepturi illo recusandae debitis facere perferendis nihil molestias laudantium eum quae enim atque. Ipsum, culpa?
          </p>
          </div>
          <div className='flex my-5 gap-5'>
            {
              new Array(4).fill("x").map(

                (ele,i)=>{

                 return  <div key={i} className=' border rounded-md  text-sm border-[#6438f5] w-fit p-1 shadow-md'>
                    <p>Lorem ipsum dolor sit amet</p>
                    </div>
                }
              )
            }


            </div>
            <div className='text-white mt-10 '>
              <div className='flex gap-10'>
               
                <Modal/>
                <button className='bg-red-500 p-3 w-[150px] rounded-md'>
            Lorem ipsum

</button>
              </div>

            </div>

            </div>
            <Form/>

    </div>
  )
}

export default BecomeACCAIn18months