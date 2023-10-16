import Image from 'next/image'
import React from 'react'

type Props = {}

const NavBarComponent = (props: Props) => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-6xl p-4 flex justify-between'>
        <Image src={"/aromas-logo.svg"} alt='Aromas Duty Free Logo' width={150} height={48.97} />
      </div>
    </div>
  )
}

export default NavBarComponent