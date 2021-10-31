import { useEffect, useState } from 'react';
import { Row, Col, Spin, Dropdown, Card } from 'antd';

const MovieSider = ({ popularMovies }) => {
   const [dropDownSelected, setDropDownSelected] = useState(popularMovies);

   const selectDropDownValue = (value) => {
      setDropDownSelected(value);
   };

   useEffect(() => {
      setDropDownSelected(popularMovies);
   }, []);

   const dropDownContent = (
      <Row justify="center" className="drop-down-wrapper">
         <Col lg={24} className="popular-wrapper">
            <Row justify="space-between" onClick={() => selectDropDownValue(popularMovies)}>
               <Col>
                  <p className={dropDownSelected === popularMovies && 'bold-text'}>Populares</p>
               </Col>
               <Col>
                  {
                     dropDownSelected === popularMovies &&
                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 5L5 9L13 1" stroke="white" stroke-width="2"/>
                        </svg>
                  }
               </Col>
            </Row>
         </Col>
         <Col lg={24}>
            <Row justify="space-between" onClick={() => selectDropDownValue('userList')}>
               <Col>
                  <p className={dropDownSelected === 'userList' && 'bold-text'}>Mis películas</p>
               </Col>
               <Col>
                  {
                     dropDownSelected === 'userList' &&
                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 5L5 9L13 1" stroke="white" stroke-width="2"/>
                        </svg>
                  }
               </Col>
            </Row>
         </Col>
      </Row>
   );


   return (
      <Col lg={5} className="main-wrapper__movie-sider">
         <Row justify="center">
            <Col className="movie-sider__title">
               {
                  dropDownSelected && popularMovies &&
                     <Dropdown overlay={dropDownContent} trigger={['click']} placement="bottomCenter">
                        <Row justify="space-between">
                           <Col>
                              <p>Ver: <strong>{dropDownSelected === popularMovies ? 'Populares' : 'Mis películas'}</strong></p>
                           </Col>
                           <Col>
                              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 1L6.54557 6.54557L12.0911 1" stroke="white"/>
                              </svg>
                           </Col>
                        </Row>
                     </Dropdown>
               }
            </Col>
            <Col lg={24} className="movie-sider__content">
               <Row justify="center" gutter={[0, 20]}>
               {
                  dropDownSelected === popularMovies &&
                     popularMovies.map(movie => {
                        return (
                           <Col>
                              <Card hoverable className="popular-card">
                                 <Row
                                    justify="center"
                                    style={{
                                       backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
                                       backgroundSize: 'cover',
                                       backgroundPosition: 'center',
                                       backgroundRepeat: 'no-repeat',
                                       height: 146,
                                       width: 220,
                                       position: 'relative'
                                    }}
                                 >
                                    <Col lg={24}>
                                       <Row justify="center" className="info-wrapper">
                                          <Col className="info-wrapper__icon">
                                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20" r="19.5" stroke="white"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6484 20.2701L16 13V27L26.6484 20.2701Z" stroke="white"/>
                                             </svg>
                                          </Col>
                                          <Col lg={24} className="info-wrapper__title">
                                             <p>{movie.original_title}</p>
                                          </Col>
                                       </Row>
                                    </Col>
                                 </Row>
                              </Card>
                           </Col>
                        )
                     })
               }
               </Row>
            </Col>
         </Row>
      </Col>
   );
};

export default MovieSider;