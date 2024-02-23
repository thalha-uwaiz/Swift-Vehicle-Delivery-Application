import React from 'react'
import Styles from './HelpAndSupport.module.scss'
import Header from '../../Components/Header/Header'

const HelpAndSupport = () => {
  return (
    <div>
      <div className={Styles.header}><Header /></div>
      <div className={Styles.bodyContent}>
        <div className={Styles.Heading}> Help and Support</div>
        <div className={Styles.content}>Lorem ipsum dolor sit amet consectetur.
          Sit pulvinar mauris mauris eu nibh semper nisl pretium laoreet.
          Sed non faucibus ac lectus eu arcu. Nulla sit congue facilisis vestibulum egestas nisl feugiat pharetra.
          Odio sit tortor morbi at orci ipsum dapibus interdum. Lorem felis est aliquet arcu nullam pellentesque.
          Et habitasse ac arcu et nunc euismod rhoncus facilisis sollicitudin.Lorem ipsum dolor sit amet consectetur.
          Sit pulvinar mauris mauris eu nibh semper nisl pretium laoreet. Sed non faucibus ac lectus eu arcu.
          Nulla sit congue facilisis vestibulum egestas nisl feugiat pharetra. Odio sit tortor morbi at orci ipsum dapibus interdum.
          Lorem felis est aliquet arcu nullam pellentesque. Et habitasse ac arcu et nunc euismod rhoncus facilisis sollicitudin.
          Lorem ipsum dolor sit amet consectetur. Sit pulvinar mauris mauris eu nibh semper nisl pretium laoreet.
          Sed non faucibus ac lectus eu arcu. Nulla sit congue facilisis vestibulum egestas nisl feugiat pharetra.
          Odio sit tortor morbi at orci ipsum dapibus interdum. Lorem felis est aliquet arcu nullam pellentesque.
          Et habitasse ac arcu et nunc euismod rhoncus facilisis sollicitudin.</div>
      </div>
    </div>
  )
}

export default HelpAndSupport