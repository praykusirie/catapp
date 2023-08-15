import React from 'react'
import img1 from '../../assets/image 1.png'


export const SearchedCats = () => {
  return (
    <>
        <section className='w-[1248px] ml-[96px] mt-[50px] font-monteserrat'>
            <h1 className='w-[547px] h-[44px] font-[700] text-[36px] leading-[43.88px] text-[#291507]'>Top 10 most searched breeds</h1>
            <div className='mt-12 space-y-10'>
                <div className='flex'>
                    <img src={img1} alt="" className='w-[170px] h-[170px]'/>
                    <div className='ml-10 space-y-5'>
                        <h1 className='w-[200px] h-[44px] font-[600] leading-[43.88px] text-[26px] text-[#291507]'>1. Bengal</h1>
                        <p className='w-[888px] h-[66px] leading-[21.94px] text-[18px] font-[500]'>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.
                        </p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={img1} alt="" className='w-[170px] h-[170px]'/>
                    <div className='ml-10 space-y-5'>
                        <h1 className='w-[200px] h-[44px] font-[600] leading-[43.88px] text-[26px] text-[#291507]'>2. Chartreux</h1>
                        <p className='w-[888px] h-[66px] leading-[21.94px] text-[18px] font-[500]'>The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.
                        </p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={img1} alt="" className='w-[170px] h-[170px]'/>
                    <div className='ml-10 space-y-5'>
                        <h1 className='w-[200px] h-[44px] font-[600] leading-[43.88px] text-[26px] text-[#291507]'>3. Khao Manee</h1>
                        <p className='w-[888px] h-[66px] leading-[21.94px] text-[18px] font-[500]'>The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
