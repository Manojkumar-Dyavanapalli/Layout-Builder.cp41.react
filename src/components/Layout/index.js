// Write your code here
import './index.css'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const Layout = props => {
  const {activeInputsList} = props
  return (
    <div className="layout-cont">
      <Header activeInputsList={activeInputsList} />
      <Body activeInputsList={activeInputsList} />
      <Footer activeInputsList={activeInputsList} />
    </div>
  )
}

export default Layout
