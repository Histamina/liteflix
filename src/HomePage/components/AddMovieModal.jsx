import { useEffect, useState } from 'react';
import { Row, Col, Form, Button, Modal, message, Input } from 'antd';

const AddMovieModal = ({ isModalVisible, closeModal }) => {
   const [form] = Form.useForm();


   const onFinish = async (values) => {
      console.log(values)
   };

   return (
      <Modal
         visible={isModalVisible}
         onCancel={closeModal}
         centered={true}
         footer={false}
         width={730}
         className="add-movie-modal"
      >
         <Row justify="center" gutter={[0, 48]}>
            <Col lg={10}>
               <h2>Agregar película</h2>
            </Col>
            <Col lg={24} className="add-file-wrapper">
               <Row justify="center">
                  <Col>
                     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9946 11.7082L8.1588 4.58472C7.27098 3.77767 5.83169 3.77767 4.94408 4.58472C4.05612 5.39167 4.05612 6.70015 4.94408 7.50732L11.7755 13.7177L12.1771 13.3522L5.34575 7.14207C4.67987 6.53675 4.67987 5.55532 5.34575 4.95C6.01167 4.34459 7.09114 4.34459 7.75695 4.95L15.593 12.0735C16.7027 13.0823 16.7027 14.7181 15.593 15.7268C14.4831 16.7357 12.6839 16.7357 11.5742 15.7268L2.7338 7.69017C1.18031 6.27778 1.18031 3.9879 2.7338 2.57551C4.28755 1.16327 6.80644 1.16327 8.36004 2.57551L15.1911 8.78587L15.593 8.42071L8.7614 2.21035C6.98561 0.596226 4.10671 0.596614 2.33128 2.21113C0.555884 3.82551 0.556311 6.44269 2.33213 8.05669L11.1726 16.092C12.5041 17.3027 14.6631 17.3027 15.9946 16.092C17.3263 14.8814 17.3263 12.9188 15.9946 11.7082Z" fill="white"/>
                        <path d="M15.9946 11.7082L8.1588 4.58472C7.27098 3.77767 5.83169 3.77767 4.94408 4.58472C4.05612 5.39167 4.05612 6.70015 4.94408 7.50732L11.7755 13.7177L12.1771 13.3522L5.34575 7.14207C4.67987 6.53675 4.67987 5.55532 5.34575 4.95C6.01167 4.34459 7.09114 4.34459 7.75695 4.95L15.593 12.0735C16.7027 13.0823 16.7027 14.7181 15.593 15.7268C14.4831 16.7357 12.6839 16.7357 11.5742 15.7268L2.7338 7.69017C1.18031 6.27778 1.18031 3.9879 2.7338 2.57551C4.28755 1.16327 6.80644 1.16327 8.36004 2.57551L15.1911 8.78587L15.593 8.42071L8.7614 2.21035C6.98561 0.596226 4.10671 0.596614 2.33128 2.21113C0.555884 3.82551 0.556311 6.44269 2.33213 8.05669L11.1726 16.092C12.5041 17.3027 14.6631 17.3027 15.9946 16.092C17.3263 14.8814 17.3263 12.9188 15.9946 11.7082" stroke="white"/>
                     </svg>
                  </Col>
                  <Col>
                     <p><strong>Agregá un archivo</strong> o arrastralo y soltalo aquí </p>
                  </Col>
               </Row>
            </Col>
            <Col lg={10}>
               <Form
                  form={form}
                  onFinish={onFinish}
                  size="large"
               >
                  <Row justify="center">
                     <Col lg={24}>
                        <Form.Item
                           name="original_title"
                           rules={[{
                              required: true,
                              message: 'Título es requerido'
                           }]}
                        >
                           <Input placeholder="Título" />
                        </Form.Item>
                     </Col>
                     <Col lg={24}>
                        <Button htmlType="submit" type="primary" block disabled>
                           Subir película
                        </Button>
                     </Col>
                  </Row>
               </Form>
            </Col>
         </Row>
      </Modal>
   );
};

export default AddMovieModal;