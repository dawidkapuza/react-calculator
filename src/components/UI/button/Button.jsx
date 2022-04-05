import React from 'react'
import cl from './Button.module.css'

export default function Button({children, className, ...props}) {
  return (
    <button {...props} className={`${cl.button} ${className}`}>
      {children}
    </button>
  )
}
