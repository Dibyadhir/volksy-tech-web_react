import './Notifications.css'
import {getLatestNotification} from '../utils/utils'
import close_icon from '../assets/close_icon.png'
import React from 'react'
import NotificationItem from './NotificationItem';


const Notifications = () =>{
    return(
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem
          type='urgent'
          html={{ __html: getLatestNotification() }}
        />
      </ul>
            <button type='button' onClick={()=>{console.log('Close button has been clicked')}} aria-label='Close' style={{
                display:'inline-block',
                position:'absolute',
                top: '16px',
                right: '16px',
                background: 0,
                border: 0,
                outline: 'none',
                cursor: 'pointer',
                backgroundColor:'white'
            }}>
                <img src={close_icon} alt='close' style={{
                    width:'10px',
                    height:'8px'}}>
                    </img>
            </button>
        </div>
    )

}
export default Notifications

