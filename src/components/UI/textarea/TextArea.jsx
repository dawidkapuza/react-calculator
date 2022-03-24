import React from 'react'
import cl from './TextArea.module.css'

export default function TextArea(props) {
  return (
    <textarea className={cl.textarea} {...props}>

    </textarea>
  )
}