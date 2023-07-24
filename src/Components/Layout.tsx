import Navbar from './Navbar';
import Base from './Base';
import Footer from './Footer';

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className='Layout'>
      <Navbar/>
      <Base/>
      <Footer/>
    </div>
  )
}

export default Layout;