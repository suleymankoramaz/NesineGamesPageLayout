import { BiSolidHelpCircle } from 'react-icons/bi';
import { IoIosNotifications , IoMdArrowDropdown } from 'react-icons/io'
import { RxAvatar } from 'react-icons/rx'
import { AiOutlineCopy , AiFillEye} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='logo-container'>
          <img className='logo' src='data:image/png;base64,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' alt="nesine-logo"/>
        </div>

        <div className='navbar-actions'>
          <div className='help'>
            <div className='help-icon'><BiSolidHelpCircle size={19.5}/></div>
            YARDIM
          </div>
          <div className='member-container'>
            <div className='notification'>
              <div className='notification-icon'><IoIosNotifications size={23}/></div>
            </div>
            <div className='avatar'><img src="https://img.nesine.com/540073.png" alt="avatar" className='avatar-img'/></div>
            <div className='member'>
              <div className='member-name'>SÜLEYMAN</div>
              <div className='member-no'>Üye No: 1224109<AiOutlineCopy/></div>
            </div>
            <div className='money'>
              <div className='deposit'>Para Yatır</div>
              <div className='withdraw'>Para Çek</div>
            </div>
            <div className='balance-container'>
              <div className='balance-txt'>Bakiye:<AiFillEye size={17}/></div>
              <div className='balance'>0,00 TL</div>
            </div>
            <div className='personal'>
              <div className='coupon'>Kuponlarım</div>
              <div className='account'>Hesabım<IoMdArrowDropdown/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;