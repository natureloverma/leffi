import React from 'react'

function Button (props: any)  {
  const {children} = props
  return (
    <button className="text-2xl rounded-full  p-2 pl-10 pr-10 m-5 ml-0 bg-gradient-to-r from-orange-900 to-orange-600  text-white border-white hover:text-orange-800 hover:border-orange-800 hover:bg-white-100">{children}</button>
  )
}



export default Button;
