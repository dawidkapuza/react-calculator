import React from 'react'
import TextArea from '../UI/textarea/TextArea'

export default function Screen(props) {
  return (
    <div>
      <TextArea readOnly {...props}/>
    </div>
  )
}
