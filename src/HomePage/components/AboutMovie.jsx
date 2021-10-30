import { Row, Col, Button } from 'antd';


const AboutMovie = () => {
   return (
      <Col lg={18} className="about-movie-wrapper">
         <Row justify="start" gutter={[0, 24]}>
            <Col lg={24}>
               <h1>Original de <strong>Liteflix</strong></h1>
            </Col>
            <Col lg={24}>
               <h2>La casa de papel</h2>
            </Col>
            <Col lg={24} className="about-movie-wrapper__buttons">
               <Row justify="start" gutter={24}>
                  <Col lg={6}>
                     <Button className="play-button" type="primary" size="large" block>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6484 8.27005L3 1V15L13.6484 8.27005Z" stroke="white"/>
                        </svg>
                        Reproducir
                     </Button>
                  </Col>
                  <Col lg={6}>
                     <Button className="play-button my-list" type="primary" size="large" block>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8 0V16" stroke="white"/>
                           <path d="M16 8L3.57628e-07 8" stroke="white"/>
                        </svg>
                        Mi Lista
                     </Button>
                  </Col>
               </Row>
            </Col>
         </Row>
      </Col>
   );
};

export default AboutMovie;