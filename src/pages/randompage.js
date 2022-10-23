import React from 'react'
import { container, heading } from './randompage.module.css'

const randompage = () => {
  return (
    <div className={container}>
        <h1 className={heading}>
        This page has no css.
        Lets see if it is global!
        </h1>
    </div>
  )
}

export default randompage