import React from 'react'
import HeroImgLg from '../../assets/HeroImagelg.png'
import CatWikiLogo from '../../assets/CatwikiLogo.svg'
import { DiscoverPage } from './DiscoverPage'
import { CatReasonPage } from './CatReasonPage'
import { useFetchAllCatsQuery } from '../../features/slice/catApiSlice'


export const Home = () => {

  const  { data, isLoading, isError } = useFetchAllCatsQuery()
  console.log(data)
  return (
    <>
    <section className='w-[1248px] h-[538.19px] ml-[96px] mt-[40px] relative shadow-md'>
      <img src={HeroImgLg} alt="" className='w-full h-full rounded-tl-[42px] rounded-tr-[42px]'/>
      <div className='absolute top-[214.55px] left-[204px] '>
        <div className='flex justify-between items-center w-[127.72px]'>
          <p className='text-white font-[400px] font-mystery text-[64px] leading-[87.38px]'>Catwiki</p>
          <i class="fa-solid fa-paw pl-5 fa-2x text-white fa-3x"></i>
        </div>
        <p className='text-[24px] font-[500] top-[312.75px] left-[204px] text-white w-[371.3px] h-[58px] leading-[29.26px] font-monteserrat '>Get to know more about your cat breed</p>
        <input type="text" placeholder='Enter your breed' autoComplete='off' className='w-[394.62px] h-[69.67px] rounded-[59px] bg-white outline-none mt-10 left-[204px] placeholder:px-10 placeholder:font-[500] placeholder:text-[18px] placeholder:font-monteserrat placeholder:text-[#291507] px-10'/>
        <i class="fa-solid fa-magnifying-glass top-[445.87px] -ml-12 "></i>
        <div className='w-[394.62px] h-[219.72px] mt-5 left-[204px] rounded-[24px] bg-white overflow-auto hidden'>
          <ul className='px-2'>
            <li className='w-[360.01px] h-[56.16px] left-[215.29px] rounded-[12px] px-5 py-4 text-[#291507] font-[500] text-[18px] bg-[#ece8e8] mt-2'>Koko</li>
          </ul>
        </div>
      </div>
    </section>
    <DiscoverPage />
    <CatReasonPage />
    </>
  )
}
