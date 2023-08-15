import React from 'react'

export const Footer = () => {
  return (
    <>
        <section className='w-[1248px] h-[100px] mt-[100px] ml-[100px] items-center bg-black rounded-tl-[42px] rounded-tr-[42px] flex justify-between text-white px-10'>
            <div className='flex justify-between'>
                <p className='text-[24px] font-mystery w-[78px] h-[33px] font-[400]'>Catwiki</p> 
                <i class="fa-solid fa-paw pl-3 fa-2x"></i>
            </div>
            <div className='flex gap-5 items-center'>
                <p className='text-[24px]'>©</p>
                <p className='w-[450px] h-[22px] font-[400] font-monteserrat text-[18px] leading-[21.94px]'>created by Pray Jonas - <a href="https://paetech.netlify.app/" className='text-blue-500'>paetech</a> technologies</p>
            </div>
        </section>
    </>
  )
}
