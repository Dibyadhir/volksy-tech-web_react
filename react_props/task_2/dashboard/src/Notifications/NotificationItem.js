const NotificationItem = (props) =>{
    const {type,html,value} = props
    let li;
    value
    ? (li = <li data-notification-type={type}>{value}</li>)
    : (li = (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
      ));

  return li;
}

export default NotificationItem
