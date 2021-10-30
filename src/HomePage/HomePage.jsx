import { useEffect, useState, Fragment } from 'react';
import { Row, Col, Spin } from 'antd';
import MainBackground from '../images/MainBackground.png';
import Navbar from './components/Navbar';
import AboutMovie from './components/AboutMovie';
import MovieSider from './components/MovieSider';
import homeService from '../services/homeService';

const HomePage = () => {
   const [loading, setLoading] = useState(false);
   const [featuredLiteflix, setFeaturedLiteflix] = useState();
   const [popularMovies, setPopularMovies] = useState();

   const fetchFeatured = async () => {
      setLoading(true);
      const response = await homeService.getFeaturedLiteflix();
      setFeaturedLiteflix(response);
      setLoading(false);
   };

   const fetchPopularMovies = async () => {
      setLoading(true);
      const response = await homeService.getPopularMovies();
      setPopularMovies(response.results);
      setLoading(false);
   };

   useEffect(() => {
      fetchFeatured();
      fetchPopularMovies();
   }, []);

   if (featuredLiteflix) {
      console.log(featuredLiteflix)
   }

   if(popularMovies){
      console.log(popularMovies)
   }

   return (
      <Row justify="center">
         {
            loading ?
            <Spin style={{ display: 'flex', justifyContent: 'center', marginTop: '30vh' }} />
            :
            <Fragment>
               {
                  popularMovies && featuredLiteflix && 
                  <Col lg={24}
                     style={{
                        backgroundImage: `url('${MainBackground}')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '140vh',
                        width: '100vw',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center'
                     }}
                  >
                     <Navbar />
                     <Row justify="center">
                        <AboutMovie />
                        <MovieSider popularMovies={popularMovies} />
                     </Row>
                  </Col>
               }
            </Fragment>
         }
      </Row>
   );

}; 

export default HomePage