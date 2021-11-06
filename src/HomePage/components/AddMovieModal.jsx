import { Fragment, useState } from 'react';
import { Row, Col, Form, Button, Modal, Input, Upload, Progress } from 'antd';
import helpers from '../../helpers';
import Navbar from '../../components/Navbar';

const { Dragger } = Upload;

const AddMovieModal = ({ isModalVisible, closeModal, setRefresh }) => {
   const [loadingImage, setLoadingImage] = useState();
   const [movieTitle, setMovieTitle] = useState();
   const [percentValue, setPercentValue] = useState(1);
   const [randomUpdateStatus, setRandomUpdateStatus] = useState();
   const [ready, setReady] = useState(false)
   const [form] = Form.useForm();

   const normFile = (info) => {
      let fileList = info.fileList;

      fileList.forEach((file, index) => {
         let reader = new FileReader();
         reader.onload = (e) => {
            file['base64'] = e.target.result;
         }
         reader.readAsDataURL(file.originFileObj);
      })

      // const lastOfFileList = fileList.slice(-1)[0];
      setLoadingImage(fileList[0].base64)
      percentStatus();
   };

   if (loadingImage) {
      console.log(loadingImage)
   }

   const percentStatus = () => {
      setTimeout(() => {
         for (let i = 1; i < 101 ; i++) {
            setPercentValue(i);
         }
      }, 3000);

      const randomBoolean = Math.random() < 0.7;
      setRandomUpdateStatus(randomBoolean);
   };

   const cancelLoadImage = () => {
      setLoadingImage();
      setPercentValue(1);
      setRandomUpdateStatus();
   };

   const handleMovieTitle = (event) => {
      setMovieTitle(event.target.value);
   };

   const onFinish = async (values) => {
      const params = {
         movie_title: values.original_title,
         movie_data: loadingImage
      }

      helpers.addUserMovie(params);
      setReady(true);
   };
   
   const goHome = () => {
      setLoadingImage();
      form.resetFields();
      closeModal();
      setRefresh(Math.random().toString('26'));
   };

   return (
      <Modal
         visible={isModalVisible}
         onCancel={closeModal}
         centered={true}
         footer={false}
         closable={false}
         className="add-movie-modal"
      >
         <Row justify="center" gutter={[0, 48]}>
            <Col lg={24} className="close-icon-wrapper">
               <Row justify="end">
                  <Col onClick={closeModal}>
                     <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.42892 1.42893L15.5711 15.5711" stroke="white" strokeLinecap="square"/>
                        <path d="M1.42892 15.5711L15.5711 1.42893" stroke="white" strokeLinecap="square"/>
                     </svg>
                  </Col>
               </Row>
            </Col>
            {
               !ready ?
               <Fragment>
                  <Col lg={24} xs={24} className="navbar-mobile-wrapper">
                     <Row justify="end">
                        <Navbar />
                     </Row>
                  </Col>
                  <Col lg={10} xs={24} className="title-wrapper" >
                     <h2>Agregar película</h2>
                  </Col>
                  <Col lg={24} xs={24} className="form-wrapper">
                     <Form form={form} onFinish={onFinish} size="large">
                        <Row justify="center" className="add-file-wrapper">
                           <Form.Item
                              name="dragger"
                              valuePropName="fileList"
                              getValueFromEvent={normFile}
                              noStyle
                           >
                              <Upload.Dragger
                                 name="files"
                                 style={{ display: `${!loadingImage ? 'flex' : 'none' }`}}
                                 customRequest={() => console.log('todo ok')}
                              >
                                 <Row justify="center">
                                    <Col>
                                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fillRule="evenodd" clipRule="evenodd" d="M15.9946 11.7082L8.1588 4.58472C7.27098 3.77767 5.83169 3.77767 4.94408 4.58472C4.05612 5.39167 4.05612 6.70015 4.94408 7.50732L11.7755 13.7177L12.1771 13.3522L5.34575 7.14207C4.67987 6.53675 4.67987 5.55532 5.34575 4.95C6.01167 4.34459 7.09114 4.34459 7.75695 4.95L15.593 12.0735C16.7027 13.0823 16.7027 14.7181 15.593 15.7268C14.4831 16.7357 12.6839 16.7357 11.5742 15.7268L2.7338 7.69017C1.18031 6.27778 1.18031 3.9879 2.7338 2.57551C4.28755 1.16327 6.80644 1.16327 8.36004 2.57551L15.1911 8.78587L15.593 8.42071L8.7614 2.21035C6.98561 0.596226 4.10671 0.596614 2.33128 2.21113C0.555884 3.82551 0.556311 6.44269 2.33213 8.05669L11.1726 16.092C12.5041 17.3027 14.6631 17.3027 15.9946 16.092C17.3263 14.8814 17.3263 12.9188 15.9946 11.7082Z" fill="white"/>
                                          <path d="M15.9946 11.7082L8.1588 4.58472C7.27098 3.77767 5.83169 3.77767 4.94408 4.58472C4.05612 5.39167 4.05612 6.70015 4.94408 7.50732L11.7755 13.7177L12.1771 13.3522L5.34575 7.14207C4.67987 6.53675 4.67987 5.55532 5.34575 4.95C6.01167 4.34459 7.09114 4.34459 7.75695 4.95L15.593 12.0735C16.7027 13.0823 16.7027 14.7181 15.593 15.7268C14.4831 16.7357 12.6839 16.7357 11.5742 15.7268L2.7338 7.69017C1.18031 6.27778 1.18031 3.9879 2.7338 2.57551C4.28755 1.16327 6.80644 1.16327 8.36004 2.57551L15.1911 8.78587L15.593 8.42071L8.7614 2.21035C6.98561 0.596226 4.10671 0.596614 2.33128 2.21113C0.555884 3.82551 0.556311 6.44269 2.33213 8.05669L11.1726 16.092C12.5041 17.3027 14.6631 17.3027 15.9946 16.092C17.3263 14.8814 17.3263 12.9188 15.9946 11.7082" stroke="white"/>
                                       </svg>
                                    </Col>
                                    <Col className="dragger-text-desktop">
                                       <p><strong>Agregá un archivo</strong> o arrastralo y soltalo aquí </p>
                                    </Col>
                                    <Col className="dragger-text-mobile">
                                       <p>Agregá un archivo</p>
                                    </Col>
                                 </Row>
                              </Upload.Dragger>
                           </Form.Item>
                              {
                                 loadingImage &&
                                 <Row justify="center" className="progress-bar-wrapper">
                                    <Col lg={24} md={24} sm={24} xs={24}>
                                       <Row justify="start">
                                          {
                                             percentValue < 100 &&
                                                <Col>
                                                   <p className="mb-15">Cargando <strong>{percentValue}%</strong></p>
                                                </Col>
                                          }
                                          {
                                             (percentValue === 100 && randomUpdateStatus) &&
                                                <Col>
                                                   <p className="mb-15"><strong>100% cargado</strong></p>
                                                </Col>
                                          }
                                          {
                                             (percentValue === 100 && !randomUpdateStatus) &&
                                             <Col>
                                                <p className="mb-15"><strong>¡Error!</strong> no se pudo cargar la película</p>
                                             </Col>
                                          }
                                       </Row>
                                    </Col>
                                    <Col lg={24} md={24} sm={24} xs={24}>
                                       <Progress
                                          percent={percentValue}
                                          showInfo={false}
                                          className={!randomUpdateStatus && 'error-bar'}
                                       />
                                    </Col>
                                    <Col lg={24} md={24} sm={24} xs={24}>
                                       <Row justify="end">
                                       {
                                          percentValue < 100 &&
                                             <Col className="mt-20">
                                                <Button
                                                   className="cancel-upload-button"
                                                   type="primary"
                                                   onClick={cancelLoadImage}
                                                >
                                                   Cancelar
                                                </Button>
                                             </Col>
                                       }
                                       {
                                          (percentValue === 100 && randomUpdateStatus) &&
                                             <Col className="mt-15">
                                                <p className="success-text">¡Listo!</p>
                                             </Col>
                                       }
                                       {
                                          (percentValue === 100 && !randomUpdateStatus) &&
                                             <Col className="mt-15">
                                                <Button onClick={cancelLoadImage}>
                                                   Reintentar
                                                </Button>
                                             </Col>
                                       }
                                       </Row>
                                    </Col>
                                 </Row>
                              }
                        </Row>
                        <Row justify="center" style={{ marginTop: 48 }}>
                           <Col lg={10} xs={18}>
                              <Form.Item
                                 name="original_title"
                                 rules={[{
                                    required: true,
                                    message: 'Título es requerido'
                                 }]}
                                 onChange={handleMovieTitle}
                              >
                                 <Input placeholder="Título" />
                              </Form.Item>
                           </Col>
                        </Row>   
                        <Row justify="center">
                           <Col lg={10} xs={18}>
                              <Button
                                 htmlType="submit"
                                 type="primary"
                                 block
                                 disabled={
                                    !movieTitle || !loadingImage || !randomUpdateStatus
                                 }
                                 className={`${!movieTitle || !loadingImage || !randomUpdateStatus && 'disabled-button'}`}
                              >
                                 Subir película
                              </Button>
                           </Col>
                        </Row>
                     </Form>
                  </Col>
                  <Col xs={18} className="close-modal-mobile mb-40">
                     <Button
                        onClick={closeModal}
                        type="primary"
                        size="large"
                        block
                     >
                        Salir
                     </Button>
                  </Col>
               </Fragment>
               :
               <Fragment>
                  <Col lg={24} xs={24} className="upload-success-wrapper">
                     <Row justify="center" gutter={[0, 24]}>
                        <Col lg={24} xs={24} className="navbar-mobile-wrapper">
                           <Row justify="end">
                              <Navbar />
                           </Row>
                        </Col>
                        <Col lg={24} xs={24}>
                           <h3><strong>Lite</strong>flix</h3>
                        </Col>            
                        <Col lg={24} xs={24}>
                           <p><strong>¡Felicitaciones!</strong></p>
                        </Col>            
                        <Col lg={24} xs={24}>
                           <p className="movie-title">{movieTitle} fue correctamente subida.</p>
                        </Col>            
                        <Col lg={8} xs={18}>
                           <Button
                              type="primary"
                              onClick={goHome}
                              block
                           >
                              Ir al home
                           </Button>
                        </Col>
                     </Row>
                  </Col>
               </Fragment>
            }
         </Row>
      </Modal>
   );
};

export default AddMovieModal;