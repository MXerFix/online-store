import React from 'react'
import styles from './invertbtn.css'

interface InvertBtnI {
  children?: (string | string[]),
  [propKey: string] :any
}

const InvertBtn = ({children, ...props}: InvertBtnI) => {
  return (
    <button {...props} className={styles.invert_btn} >
      <p> {children} </p>
    </button>
  )
}

export default InvertBtn