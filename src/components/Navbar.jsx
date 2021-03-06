import { Link } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import LiteflixLogo from '../images/LiteflixLogo.png';
import IconPlus from '../images/IconPlus.png';
import ProfilePicture from '../images/ProfilePicture.png';

const { Header } = Layout;

const Navbar = ({ showModal }) => {
   return (
      <Header className="header-wrapper">
         <Link to='/' className="logo-wrapper">
            <div>
               <img src={LiteflixLogo} width="153" height="34" alt="Liteflix logo" />
            </div>
         </Link>
         <Button className="desktop-button" onClick={showModal} type="primary" size="large">
            <img src={IconPlus} width="14" height="14" alt="Icon plus logo" />
            Agregar película
         </Button>
         <Button className="mobile-button" onClick={showModal} type="primary" size="large">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="white"/>
               <path d="M15.5 9V22" stroke="white" strokeLinecap="square"/>
               <path d="M22 15.5L9 15.5" stroke="white" strokeLinecap="square"/>
            </svg>
         </Button>
         <Menu>
            <Menu.Item key="1" className="menu-wrapper">
               <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H27" stroke="white"/>
                  <path d="M0 7H27" stroke="white"/>
                  <path d="M10 13H27" stroke="white"/>
               </svg>
            </Menu.Item>
            <Menu.Item key="2" className="bell-wrapper">
               <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8 8.66661C20.8 6.69643 19.9783 4.80694 18.5155 3.41382C17.0527 2.02069 15.0687 1.23804 13 1.23804C10.9314 1.23804 8.9474 2.02069 7.48462 3.41382C6.02183 4.80694 5.20005 6.69643 5.20005 8.66661C5.20005 17.3333 1.30005 19.8095 1.30005 19.8095H24.7C24.7 19.8095 20.8 17.3333 20.8 8.66661Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.249 23.5238C15.0204 23.899 14.6924 24.2105 14.2977 24.427C13.903 24.6435 13.4555 24.7575 13 24.7575C12.5445 24.7575 12.097 24.6435 11.7023 24.427C11.3076 24.2105 10.9795 23.899 10.751 23.5238" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20.5" cy="5.5" r="4.5" fill="#64EEBC"/>
               </svg>
            </Menu.Item>
            <Menu.Item key="3">
               <img src={ProfilePicture} alt="Profile icon" />
            </Menu.Item>
         </Menu>
      </Header>
   )
};

export default Navbar; 