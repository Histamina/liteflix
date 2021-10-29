import { Row, Col, Button } from 'antd';
import MainBackground from '../images/MainBackground.png';
import Navbar from './components/Navbar';

const HomePage = () => {
   return (
      <Row justify="center">
         <Col lg={24}
            style={{
               backgroundImage: `url('${MainBackground}')`,
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               height: '100vh',
               width: '100vw',
               position: 'relative',
               display: 'flex',
               justifyContent: 'center'
            }}
         >
            <Navbar />
            {/* <Button className="button">fsdfsfd</Button> */}
         </Col>
      </Row>
   );

}; 

export default HomePage