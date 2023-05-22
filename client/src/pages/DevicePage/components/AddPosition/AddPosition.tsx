import React from 'react'
import styles from './addposition.css'

interface AddPositionI {
  img: string,
  header: string,
  description: string,
  reverse: boolean
}

const AddPosition = ({img, header, description, reverse}: AddPositionI) => {
  return (
    <div className={ reverse ? styles.addPosition_wrapper : styles.addPosition_wrapper_reversed }>
      <div className={styles.addPosition_image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.addPosition_content}>
        <h2> {header} </h2>
        <p> {description} </p>
      </div>
    </div>
  )
}

export default AddPosition