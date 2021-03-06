import { useEffect, useState, Fragment } from 'react';
import { Row, Col, Spin } from 'antd';
import Navbar from '../components/Navbar';
import AboutMovie from './components/AboutMovie';
import MovieSider from './components/MovieSider';
import AddMovieModal from './components/AddMovieModal';
import { homeService } from '../services/homeService';

const HomePage = () => {
   const [loading, setLoading] = useState(false);
   const [featuredLiteflix, setFeaturedLiteflix] = useState();
   const [popularMovies, setPopularMovies] = useState();
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [refresh, setRefresh] = useState();

   const fetchFeatured = async () => {
      setLoading(true);
      const response = await homeService.getFeaturedLiteflix();
      setFeaturedLiteflix(response.results[1]);
      setLoading(false);
   };

   const fetchPopularMovies = async () => {
      setLoading(true);
      const response = await homeService.getPopularMovies();
      const allMovies = response.results;
      const firstFourOf = allMovies.slice(0, 4);
      setPopularMovies(firstFourOf);
      setLoading(false);
   };

   useEffect(() => {
      fetchFeatured();
      fetchPopularMovies();
   }, [refresh]);

   const showModal = () => {
      setIsModalVisible(true);
   };

   const closeModal = () => {
      setIsModalVisible(false);
   };


   return (
      <Row justify="center">
         {
            loading ?
            <Spin style={{ display: 'flex', justifyContent: 'center', marginTop: '50vh' }} />
            :
            <Fragment>
               {
                  popularMovies && featuredLiteflix && 
                  <Col lg={24}
                     style={{
                        backgroundImage: `url('https://image.tmdb.org/t/p/original${featuredLiteflix.backdrop_path}')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '140vh',
                        width: '100vw',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                     }}
                  >
                     <Navbar showModal={showModal} />
                     <Row justify="space-between" className="main-wrapper">
                        <AboutMovie featuredLiteflix={featuredLiteflix} />
                        <MovieSider popularMovies={popularMovies} />
                     </Row>
                  </Col>
               }

               <AddMovieModal isModalVisible={isModalVisible} closeModal={closeModal} setRefresh={setRefresh} />
            </Fragment>
         }
      </Row>
   );

}; 

export default HomePage