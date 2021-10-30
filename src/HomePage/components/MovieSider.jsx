import { useEffect, useState } from 'react';
import { Row, Col, Spin, Dropdown } from 'antd';

const MovieSider = ({ popularMovies }) => {
   const [dropDownSelected, setDropDownSelected] = useState();

   return (
      <Col lg={6}>
         <Row justify="center">
            <Col lg={24}>
               <p>Ver: </p>
            </Col>
         </Row>
      </Col>
   );
};

export default MovieSider;