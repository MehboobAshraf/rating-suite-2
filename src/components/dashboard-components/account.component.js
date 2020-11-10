import React, { useState } from 'react';
import { Row, Col, Card, Form, Input, Button, Upload } from 'antd';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UploadOutlined } from '@ant-design/icons';

const AccountComponent = ({ loggedInUser, deleteAccount }) => {
  const [form] = Form.useForm();
  const [formLayout] = useState('horizontal');
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const toggleConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(!showConfirmDeleteModal);
  };
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Card>
            <Form
              layout="vertical"
              form={form}
              initialValues={{
                layout: formLayout,
              }}
            >
              <Row>
                <Col lg={8} sm={24} xs={24}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your first name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col lg={8} sm={24} xs={24}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your last name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col lg={8} sm={24} xs={24}>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input type="password" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col lg={8} sm={24} xs={24}>
                  <Form.Item
                    label="Contact Number"
                    name="contactNumber"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your contact number!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col lg={8} sm={24} xs={24}>
                  <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Col>
              </Row>
              <Row>
                <Col lg={8} sm={24} xs={24}>
                  <Form.Item className="mt-4">
                    <button
                      type="submit"
                      className="btn btn-custom btn-dashboard"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-custom btn-dashboard danger-button ml-2"
                      onClick={() => setShowConfirmDeleteModal(true)}
                    >
                      Delete Account
                    </button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
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
              <Button
                className="btn btn-custom btn-dashboard"
                onClick={() => deleteAccount()}
              >
                Confirm
              </Button>{' '}
              <Button
                className="btn btn-custom btn-dashboard danger-button"
                onClick={toggleConfirmDeleteModal}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    </>
  );
};

export default AccountComponent;
