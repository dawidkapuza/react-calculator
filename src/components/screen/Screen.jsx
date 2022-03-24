import React from 'react'
import TextArea from '../UI/textarea/TextArea'
import cl from './Screen.module.css'

export default function Screen(props) {
  return (
    <div className={cl.screen}>
      <TextArea readOnly {...props}/>
    </div>
  )
}
