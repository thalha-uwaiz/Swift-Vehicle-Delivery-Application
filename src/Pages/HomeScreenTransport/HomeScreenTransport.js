import React from 'react'
import Header from '../../Components/Header/Header'
import Styles from './HomeScreenTransport.module.scss'


const HomeScreenTransport = () => {
  return (
    <div className={Styles.HomeScreenTransport}>
      <div className={Styles.Header}><Header /></div>
      <div className={Styles.body}>
        <div className={Styles.Rental}>
          <button className={Styles.rentalBtn}>Rental</button>
        </div>
        <div className={Styles.searchContainer}>
        <input className={Styles.searchInput} placeholder='Where would you go?' type='text' /> 
        </div>
        <div className={Styles.buttons}>
          <button className={Styles.Transport}>Transport</button>
          <button className={Styles.Delivery}>Delivery</button>
        </div>
      </div>
    </div>
  )
}

export default HomeScreenTransport