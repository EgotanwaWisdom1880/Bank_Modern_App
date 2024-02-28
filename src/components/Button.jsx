import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`w-[150px] py-2 px-4 bg-blue-gradient font-poppins font-medium
    text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
        Get Started 
    </button>
  )
}

export default Button