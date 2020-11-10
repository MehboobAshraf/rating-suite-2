import React, { useState } from 'react';
// import { Row, Col, Card, Form, Input, Button, Upload } from 'antd';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Spinner } from 'reactstrap';
import { useForm } from 'react-hook-form';

const AccountComponent = (props) => {
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const toggleConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(!showConfirmDeleteModal);
  };

  const { register, handleSubmit, reset } = useForm();

  const onUpdateSubmit = (data) => {
    if (data.name && data.organization) {
      props.updateUser(
        {
          organization: data.organization,
          name: data.name,
        },
        onReset
      );
    }
  };

  const onReset = () => {
    reset();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 pt-5 pl-5">
          <form onSubmit={handleSubmit(onUpdateSubmit)}>
            <div className="row">
              <div className="col-lg-12 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  defaultValue={props.user.name}
                  ref={register}
                />
              </div>
              <div className="col-lg-12 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Organization"
                  name="organization"
                  defaultValue={props.user.organization}
                  ref={register}
                />
              </div>
              <div className="col-lg-12 mt-2 text-left">
                <button className="btn btn-custom btn-dashboard ml-2">
                  {props.isLoading ? (
                    <Spinner
                      size="sm"
                      type="grow"
                      color="light"
                      className="mr-2"
                    />
                  ) : (
                    ''
                  )}{' '}
                  Submit
                </button>
                {/* <button
                  type="button"
                  className="btn btn-custom btn-dashboard danger-button ml-2"
                  onClick={() => setShowConfirmDeleteModal(true)}
                >
                  {props.isLoading ? (
                    <Spinner
                      size="sm"
                      type="grow"
                      color="light"
                      className="mr-2"
                    />
                  ) : (
                    ''
                  )}{' '}
                  Delete Account
                </button> */}
              </div>
            </div>
          </form>
          <Modal
            isOpen={showConfirmDeleteModal}
            toggle={toggleConfirmDeleteModal}
            className="delete-user-modal"
          >
            <ModalHeader toggle={toggleConfirmDeleteModal}>
              Are you sure you want to delete your account?
            </ModalHeader>
            <ModalBody>
              If you delete your account all of your data will be removed from
              our database. Are you sure you want to go ahead?
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-custom btn-dashboard"
                onClick={() => props.deleteAccount()}
              >
                Confirm
              </button>{' '}
              <button
                className="btn btn-custom btn-dashboard danger-button"
                onClick={toggleConfirmDeleteModal}
              >
                Cancel
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );

  // return (
  //   <>
  //     <Row>
  //       <Col xs={24} sm={24} md={24} lg={24}>
  //         <Card>
  //           <Form
  //             layout="vertical"
  //             form={form}
  //             onSubmit={handleSubmit(onUpdateSubmit)}
  //           >
  //             <Row>
  //               <Col lg={8} sm={24} xs={24}>
  //                 <input
  //                   type="text"
  //                   className="form-control"
  //                   placeholder="Name"
  //                   name="name"
  //                 />
  //                 {errors.name && <span>{errors.name.message}</span>}
  //               </Col>
  //             </Row>
  //             <Row>
  //               <Col lg={8} sm={24} xs={24}>
  //                 <input
  //                   type="text"
  //                   className="form-control"
  //                   placeholder="Organization"
  //                   name="organization"
  //                 />
  //                 {errors.organization && (
  //                   <span>{errors.organization.message}</span>
  //                 )}
  //               </Col>
  //             </Row>
  //             <Row>
  //               <Col lg={8} sm={24} xs={24}>
  //                 <Form.Item className="mt-4">
  //                   <button className="btn btn-custom btn-dashboard">
  //                     {props.isLoading ? (
  //                       <Spinner
  //                         size="sm"
  //                         type="grow"
  //                         color="light"
  //                         className="mr-2"
  //                       />
  //                     ) : (
  //                       ''
  //                     )}{' '}
  //                     Submit
  //                   </button>
  //                 </Form.Item>
  //               </Col>
  //             </Row>
  //           </Form>
  //           <button
  //             type="button"
  //             className="btn btn-custom btn-dashboard danger-button ml-2"
  //             onClick={() => setShowConfirmDeleteModal(true)}
  //           >
  //             Delete Account
  //           </button>
  //         </Card>
  //       </Col>
  //     </Row>
  //   </>
  // );
};

export default AccountComponent;
