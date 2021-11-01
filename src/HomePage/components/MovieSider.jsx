import { useEffect, useState } from 'react';
import { Row, Col, Spin, Dropdown, Card } from 'antd';

const MovieSider = ({ popularMovies }) => {
   const [dropDownSelected, setDropDownSelected] = useState(popularMovies);
   const [hoverIndex, setHoverIndex] = useState();

   const selectDropDownValue = (value) => {
      setDropDownSelected(value);
   };

   useEffect(() => {
      setDropDownSelected(popularMovies);
   }, []);

   if (popularMovies) {
      console.log(popularMovies)
   }

   const contentClassName = (index) => {
      if (index === hoverIndex || hoverIndex === null) {
         return 'card-content hide';
      } else {
         return 'card-content';
      }
   };

   const showClassName = (index) => {
      if (index === hoverIndex || hoverIndex === null) {
         return 'card-content-show';
      } else {
         return 'card-content-show hide';
      }
   };

   const replaceDot = (rating) => {
      const toString = rating.toString();
      return toString.replace(/\./g, ',');
   };

   const getReleaseYear = (date) => {
      const separateBy = date.split("-");
      return separateBy[0]
   };

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
                     popularMovies.map((movie, index) => {
                        return (
                           <Col key={index}>
                              <Card hoverable className="popular-card">
                                 <Row
                                    justify="center"
                                    style={{
                                       backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
                                       backgroundSize: 'cover',
                                       backgroundPosition: 'center',
                                       backgroundRepeat: 'no-repeat',
                                       height: 146,
                                       width: 220
                                    }}
                                    className={contentClassName(index)}
                                    onMouseOver={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex()}
                                 >
                                    <Col lg={24}>
                                       <Row justify="center" className="info-wrapper">
                                          <Col className="info-wrapper__icon">
                                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20" r="19.5" stroke="white"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M26.6484 20.2701L16 13V27L26.6484 20.2701Z" stroke="white"/>
                                             </svg>
                                          </Col>
                                          <Col lg={24} className="info-wrapper__title">
                                             <p>{movie.original_title}</p>
                                          </Col>
                                       </Row>
                                    </Col>
                                 </Row>
                                 
                                 <Row
                                    justify="center"
                                    style={{
                                       backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
                                       backgroundSize: 'cover',
                                       backgroundPosition: 'center',
                                       backgroundRepeat: 'no-repeat',
                                       height: 146,
                                       width: 220
                                    }}
                                    className={showClassName(index)}
                                    onMouseOver={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex()}
                                 >
                                    <Col lg={24} style={{ backgroundColor: 'rgba(36, 36, 36, 0.7)'}}>
                                       <Row justify="center" className="info-wrapper-hover">
                                          <Col lg={24} className="info-wrapper-hover__icon">
                                             <Row justify="start" style={{ width: '100%'}}>
                                                <Col lg={3}>
                                                   <svg className="play-icon" width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <circle cx="20" cy="20" r="19.5" stroke="white"/>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M26.6484 20.2701L16 13V27L26.6484 20.2701Z" stroke="white"/>
                                                   </svg>
                                                </Col>
                                                <Col lg={21} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                   <p>{movie.original_title}</p>
                                                </Col>
                                             </Row>
                                          </Col>
                                          <Col lg={24} className="info-wrapper-hover__title">
                                             <Row justify="space-between" style={{ width: '100%'}}>
                                                <Col>
                                                <Row>
                                                   <Col>
                                                      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M5.81064 0.557022C5.87212 0.376184 6.12788 0.376184 6.18936 0.557023L7.34407 3.95378C7.37132 4.03393 7.44608 4.08825 7.53073 4.08939L11.1181 4.13794C11.309 4.14052 11.3881 4.38377 11.2351 4.49812L8.36141 6.64597C8.2936 6.69666 8.26505 6.78454 8.29011 6.8654L9.3525 10.2922C9.40905 10.4746 9.20214 10.6249 9.04611 10.5148L6.11536 8.44545C6.0462 8.39662 5.9538 8.39662 5.88464 8.44545L2.95389 10.5148C2.79786 10.6249 2.59095 10.4746 2.6475 10.2922L3.70989 6.8654C3.73495 6.78454 3.7064 6.69666 3.63859 6.64597L0.764906 4.49812C0.611916 4.38377 0.690952 4.14052 0.881936 4.13794L4.46927 4.08939C4.55392 4.08825 4.62868 4.03393 4.65593 3.95378L5.81064 0.557022Z" fill="#64EEBC"/>
                                                      </svg>
                                                   </Col>
                                                   <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                      <p>
                                                         {replaceDot(movie.vote_average)}
                                                      </p>
                                                   </Col>
                                                </Row>
                                                </Col>
                                                <Col  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                   <p>{getReleaseYear(movie.release_date)}</p>
                                                </Col>
                                             </Row>
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