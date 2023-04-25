import './Notifications.css'
import {getLatestNotification} from '../utils/utils'
import close_icon from '../assets/close_icon.png'
import React from 'react'
import NotificationItem from './NotificationItem';


const Notifications = (props) =>{
    const {displayDrawer} = props
    //console.log(displayDrawer)
    return(
        <>
        <div className='menuItem'>
            <p>Your notifications</p>     
        </div>
        {displayDrawer &&(
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
          <button
            type='button'
            aria-label='Close'
            onClick={() => console.log('Close button has been clicked')}
            style={{
              display: 'inline-block',
              position: 'absolute',
              top: '56px',
              right: '16px',
              background: 0,
              border: 0,
              outline: 'none',
              cursor: 'pointer',
              zIndex: 1,
            }}
          >
            <img
              src={close_icon}
              alt=''
              style={{ width: '8px', height: '8px' }}
            />
          </button>
        </div>
        )}

        </>
    )

}

Notifications.defaultProps ={
    displayDrawer : false
}
export default Notifications

