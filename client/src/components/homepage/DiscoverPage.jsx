import React from 'react'
import img1 from '../../assets/image 1.png'


export const DiscoverPage = () => {
  return (
    <>
        <section className='w-[1248px] h-[686.4px] ml-[96px] bg-[#E3E1DC] rounded-bl-[42px] rounded-br-[42px]'>
                <p className=' ml-52 pt-10 pb-8 font-monteserrat text-[18px] font-[500] leading-[21.94px] text-[#291507] w-[205px] h-[22px] '>Most Searched Breeds</p>
                <p className='border-b-[3px] border-b-[#4d270c] ml-52 w-[59.18px]'></p>
                <div className='flex justify-between'> 
                  <h1 className='ml-52 pt-3 w-[536.93px] h-[118px] font-[700] font-monteserrat text-[48px] leading-[58.51px] text-[#]'>66+ Breeds For you to discover</h1>
                  <div className='flex gap-3 items-center mx-5 cursor-pointer text-[#291507a4]'>
                    <p className='font-monteserrat text-[18px] font-[700] leading-[21.94px]  uppercase'>See more</p>
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>

                <div>
                  <section className='ml-52 mt-20 grid grid-cols-4 gap-10  w-[880px] font-monteserrat'>
                      <div className='space-y-5'>
                        <img src={img1} alt="" className='w-[220px] h-[220px]'/>
                        <h1 className='text-[18px] text-[#251907] font-[600] w-[200px] h-[22px] leading-[21.94px]'>Bengal</h1>
                      </div>
                      <div className='space-y-5'>
                        <img src={img1} alt="" className='w-[220px] h-[220px]'/>
                        <h1 className='text-[18px] text-[#251907] font-[600] w-[200px] h-[22px] leading-[21.94px]'>Savannah</h1>
                      </div>
                      <div className='space-y-5' >
                        <img src={img1} alt="" className='w-[220px] h-[220px]'/>
                        <h1 className='text-[18px] text-[#251907] font-[600] w-[200px] h-[22px] leading-[21.94px]'>Norwegian Forest Cat</h1>
                      </div>
                      <div className='space-y-5'>
                        <img src={img1} alt="" className='w-[220px] h-[220px]'/>
                        <h1 className='text-[18px] text-[#251907] font-[600] w-[200px] h-[22px] leading-[21.94px]'>Selkirk Rex</h1>
                      </div>
                  </section>
                </div>
        </section>
    </>
  )
}
