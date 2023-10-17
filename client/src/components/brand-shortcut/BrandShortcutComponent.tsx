import BrandShortcut from '@/types/BrandShortcut'
import Image from 'next/image'
import React from 'react'

type Props = {
    data: BrandShortcut
}

const BrandShortcutComponent = (props: Props) => {

    const {data} = props;

  return (
    <div className='flex flex-col items-center gap-3'>
        <div className='relative w-28 sm:w-40 aspect-square border-8 border-solid border-rose-500 rounded-full overflow-hidden'>
            <Image src={data.imageUrl} alt={data.description} fill={true} className='object-cover' />
        </div>
        <h2 className='text-lg sm:text-xl'>{data.label}</h2>
    </div>
  )
}

export default BrandShortcutComponent