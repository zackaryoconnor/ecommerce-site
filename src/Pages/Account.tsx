import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import LoginSignup from '../Components/LoginSignup/LoginSignup'

function Account() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <Navbar />
        <LoginSignup />
        <Footer />
      </div>
    </div>
  )
}

export default Account