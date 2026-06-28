import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'

const TopBar = () => {
  return (
    <div className='bg-[#b6ff00] text-[#141414]'>
      <div className='container mx-auto flex justify-between items-center py-3 px-4'>
        <div className='hidden md:flex items-center space-x-4'>
          <a className='hover:text-gray-300' href='/'>
            <TbBrandMeta className='h-5 w-5' />
          </a>
          <a className='hover:text-gray-300' href='/'>
            <IoLogoInstagram className='h-5 w-5' />
          </a>
          <a className='hover:text-gray-300' href='/'>
            <RiTwitterXLine className='h-5 w-5' />
          </a>
        </div>
        <div className='text-sm text-center flex-gow '>
          <span>ارسال به تمام مناطق کشور با سریع ترین زمان ممکن</span>
        </div>
        <div className='text-sm hidden md:block'>
          <a href='tel:+989914318174' className='hover:text-gray-300'>
            +98 (991) 431 8174
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
