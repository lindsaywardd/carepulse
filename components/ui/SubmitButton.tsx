import React from 'react'
import { Button } from './button';
import Image from 'next/image';

interface ButtonProps {
    isLoading: boolean;
    className?: string,
    children: React.ReactNode,
}

const SubmitButton = ({isLoading, className, children}: ButtonProps) => {
  return (
    <Button type='submit' disabled={isLoading} className={className ?? 'shad-primary-btn w-full transition hover:translate-y-[-5px] hover:duration-500 hover:ease-in-out'}>
        {isLoading ? (
            <div className='flex items-center gap-4'>
                <Image src="/assets/icons/loader.svg"
                alt='loader' 
                width={24}
                height={24}
                className='animate-spin'/>
            </div>
        ): children}
    </Button>
  )
}

export default SubmitButton