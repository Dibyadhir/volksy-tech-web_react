import './App.css'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList'

const App = (props) =>{
  const {isLoggedIn} = props
  let display;
  isLoggedIn ? (display = <CourseList />) : (display = <Login />);
  //console.log(isLoggedIn)

  return(
    <>
    <Notifications/>
    <Header />
    {display} 
    <Footer />
    </>
  )
}

App.defaultProps = {
  isLoggedIn: false
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};
export default App

