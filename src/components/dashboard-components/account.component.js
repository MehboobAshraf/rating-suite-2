import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Spinner } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { EditOutlined } from '@ant-design/icons';
import { Switch, Divider, Table, Pagination } from 'antd';

const AccountComponent = (props) => {
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [current, setCurrent] = useState(1);

  const [inputActions, setInputActions] = useState({
    editName: false,
    editOrganization: false,
  });

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

  const onUpdateNotificationFlagSubmit = (flag) => {
    props.updateNotificationFlag(
      {
        flag: +flag,
      },
      onReset
    );
  };

  const onReset = () => {
    reset();
  };

  const columns = [
    {
      title: 'Invoice',
      dataIndex: 'invoice',
      key: 'invoice',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  const data = [
    {
      invoice: '123',
      date: 'John Brown',
      amount: '$9',
      key: 1
    },
    {
      invoice: '456',
      date: 'John Brown',
      amount: '$9',
      key: 2
    },
    {
      invoice: '789',
      date: 'John Brown',
      amount: '$9',
      key: 3
    },
  ];


  const pageSize = 10;

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return data.slice((current - 1) * pageSize, current * pageSize);
  };

  // Custom pagination component
  const MyPagination = ({ total, onChange, current }) => {
    return (
      <Pagination
        className="mt-3"
        onChange={onChange}
        total={total}
        current={current}
        pageSize={pageSize}
      />
    );
  };

  return (
    <div className="container-fluid section-border">
      <div className="row mb-3">
        <div className="col pl-5 text-left">
          <h5>Profile</h5>
        </div>
      </div>
      {props.isLoadingAuthContext ? (
        ''
      ) : (
        <>
          <div className="row">
            <div className="col-md-8 pl-md-5">
              <form
                className="login-form account"
                onSubmit={handleSubmit(onUpdateSubmit)}
              >
                <div className="row">
                  <div className="col-lg-12 mt-2 text-left">
                    <label className="form-control-label">Name:</label>
                    <div className="account-input">
                      <input
                        type="text"
                        className="form-control form-control-account"
                        placeholder="Name"
                        name="name"
                        defaultValue={props.user.name || ''}
                        ref={register}
                        readOnly={!inputActions.editName}
                      />
                      <EditOutlined
                        onClick={() => {
                          setInputActions({ ...inputActions, editName: true });
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3 text-left">
                    <label className="form-control-label">Organization:</label>
                    <div className="account-input">
                      <input
                        type="text"
                        className="form-control form-control-account"
                        placeholder="Organization"
                        name="organization"
                        defaultValue={props.user.organization || ''}
                        ref={register}
                        readOnly={!inputActions.editOrganization}
                      />
                      <EditOutlined
                        onClick={() => {
                          setInputActions({
                            ...inputActions,
                            editOrganization: true,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3 text-left">
                    <label className="form-control-label">
                      Email : {props.user.userid || ''}
                    </label>
                  </div>

                  <div className="col-lg-12 mt-4 text-left">
                    <button className="btn btn-custom btn-dashboard btn-round mt-2 mr-2">
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
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-custom btn-dashboard danger-button btn-round mt-2"
                      onClick={() => setShowConfirmDeleteModal(true)}
                    >
                      {props.isDeletingAccount ? (
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
                    </button>
                  </div>
                  <Divider className="mt-5 mb-5" />
                  <div className="col-lg-12 mt-3 text-left">
                    <label className="mr-2 form-control-label">
                      Notifications:
                    </label>
                    <Switch
                      checked={props.notificationFlag}
                      checkedChildren="On"
                      unCheckedChildren="Off"
                      onChange={onUpdateNotificationFlagSubmit}
                    />
                    {props.notificationLoading ? (
                        <Spinner
                          size="sm"
                          type="grow"
                          color="dark"
                          className="ml-2"
                        />
                      ) : (
                        ''
                    )}
                  </div>
                  <Divider className="mt-5 mb-5" />
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
                  If you delete your account all of your data will be removed
                  from our database. Are you sure you want to go ahead?
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
          <div className="row  mb-3">
            <div className="col pl-5 text-left">
              <h5>Billing</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 pl-md-5">
              <form className="login-form account">
                <div className="row">
                  <div className="col-lg-12 mt-2 text-left">
                    <label className="form-control-label">
                      Payment Method: Mastercard ending 4200
                    </label>
                    <button className="btn btn-custom btn-dashboard btn-round ml-5">
                      Update
                    </button>
                  </div>
                  <div className="col-lg-12 mt-2 text-left mt-3">
                    <label className="form-control-label">
                      Billing Address: 123 Mayfair Street, London
                    </label>
                    <button className="btn btn-custom btn-dashboard btn-round ml-5">
                      Update
                    </button>
                  </div>
                  <Divider className="mt-5 mb-5" />
                </div>
              </form>
            </div>
          </div>
          <div className="row  mb-3">
            <div className="col pl-5 text-left">
              <h5>Invoices</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 pl-md-5">
              <div className="row">
                <div className="col-lg-12 mt-2 text-center">
                  <Table columns={columns} dataSource={getData(current, pageSize)} pagination={false} />
                  <MyPagination
                    total={data.length}
                    current={current}
                    onChange={setCurrent}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AccountComponent;
