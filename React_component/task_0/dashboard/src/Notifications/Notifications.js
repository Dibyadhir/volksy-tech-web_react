import './Notifications.css'
import close_icon from '../assets/close_icon.png'
import React from 'react'
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape'
import PropTypes from 'prop-types';


const Notifications = (props) =>{
    const {displayDrawer,listNotifications} = props
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
            {listNotifications.length ===0 && (
                <NotificationItem value='No new notification for now' />
            )}
            {listNotifications.map((notificatons)=>(
                <NotificationItem key = {notificatons.id} type={notificatons.type} value={notificatons.value} html={notificatons.html}/>
            ))}
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
    displayDrawer : true,
    listNotifications : []
}

Notifications.propTypes = {
    listNotifications : PropTypes.arrayOf(NotificationItemShape)
}
export default Notifications

