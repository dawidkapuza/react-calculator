import React from 'react'
import cl from './Button.module.css'

export default function Button({children, ...props}) {
  return (
    <button {...props} className={cl.button}>
      {children}
    </button>
  )
}
