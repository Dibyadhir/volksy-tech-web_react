import PropTypes from 'prop-types'

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

NotificationItem.defaultProps = {
  type : 'default',
  html : {},
  value : ''
}

NotificationItem.propTypes = {
  type : PropTypes.string,
  html : PropTypes.shape({__html: PropTypes.string}),
  value : PropTypes.string

}

export default NotificationItem
