import React from 'react'
import SideBar from '../../Components/SideBar'
import Header from '../../Components/Header/Header'
import Styles from './History.module.scss'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <div className={Styles.historyContainer}>
      <div className={Styles.header}><Header /></div>


      <div className={Styles.BodyContainer}>

        <div className={Styles.sideBar}><SideBar /></div>

        <div className={Styles.right}>
        <div className={Styles.topBar}>
          <Link className={Styles.Upcoming}>UpComing</Link>
          <Link className={Styles.Completed}>Completed</Link>
          <Link className={Styles.Cancelled}>Cancelled</Link>
        </div>

        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <div className={Styles.name}>Helan</div>
            <div className={Styles.address}>Mustang Shelby GT</div>
          </div>
          <div className={Styles.time}>Today at 09:20 am</div>
        </div>

        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <div className={Styles.name}>Thalha</div>
            <div className={Styles.address}>Mustang Shelby GT</div>
          </div>
          <div className={Styles.time}>Today at 09:20 am</div>
        </div>

        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <div className={Styles.name}>Yehya</div>
            <div className={Styles.address}>Mustang Shelby GT</div>
          </div>
          <div className={Styles.time}>Today at 09:20 am</div>
        </div>

        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <div className={Styles.name}>Luqman</div>
            <div className={Styles.address}>Mustang Shelby GT</div>
          </div>
          <div className={Styles.time}>Today at 09:20 am</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default History