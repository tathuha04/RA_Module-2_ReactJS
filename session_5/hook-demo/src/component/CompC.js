import React from 'react'
import { useContext } from 'react'
import { themeContext } from './ExContext'


export default function CompC(props) {
    let objTheme = useContext(themeContext)
  return (
    <div>
        <p className={objTheme.theme}>{objTheme.message}</p>
    </div>
  )
}
