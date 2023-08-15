import React from 'react'
import img1 from "../../assets/image 1.png"
import img2 from "../../assets/image 2.png"
import img3 from "../../assets/image 3.png"

export const CatReasonPage = () => {
  return (
    <>
      <section className='w-[1248px]'>
        <div className='ml-[204px] flex justify-between mt-[80px]'>
            <div className='w-[455.46px] h-[269.86px] mt-10 space-y-3'>
               <p className='border-b-[3px] border-b-[#4d270c] w-[59.18px]'></p>
                <div className='space-y-10'>
                    <h1 className='leading-[58.51px] font-black text-[50px] text-[#251907] font-monteserrat'>Why should you have a cat?</h1>
                    <p className='w-[394.62px] h-[88px] font-[500] text-[#251907d8] text-[18px] leading-[21.94px]'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
                    <div className='flex gap-3 items-center mt-10 cursor-pointer text-[#291507a4]'>
                        <h1 className='w-[117px] h-[22px] font-[700] text-[18px] leading-[21.94px]  uppercase'>READ MORE</h1>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div> 
            </div>
            <div className='w-[539px] h-[488.88px] grid grid-cols-2 relative gap-5'>
                <img src={img2} alt="" className='w-[273.52px] h-[167.08px]'/>
                <img src={img3} alt="" className='w-[238.47px] h-[385.47px]'/>
                <img src={img1} alt="" className='absolute top-[190px] w-[195.49px] left-[60px] h-[293.24px] '/>
            </div>
        </div>
      </section>
    </>
  )
}
