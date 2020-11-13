import React, { useState } from 'react';
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
    <div className="container-fluid section-border">
      <div className="row">
        <div className="col pl-5 text-left">
          <h5>Account</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 pl-5">
          {props.isLoadingAuthContext ? (
            ''
          ) : (
            <form
              className="login-form"
              onSubmit={handleSubmit(onUpdateSubmit)}
            >
              <div className="row">
                <div className="col-lg-12 mt-2 text-left">
                  <label className="form-control-label">Name:</label>
                  <input
                    type="text"
                    className="form-control form-control-account"
                    placeholder="Name"
                    name="name"
                    defaultValue={props.user.name || ''}
                    ref={register}
                  />
                </div>
                <div className="col-lg-12 mt-3 text-left">
                  <label className="form-control-label">Organization:</label>
                  <input
                    type="text"
                    className="form-control form-control-account"
                    placeholder="Organization"
                    name="organization"
                    defaultValue={props.user.organization || ''}
                    ref={register}
                  />
                </div>
                <div className="col-lg-12 mt-3 text-left">
                  <label className="form-control-label">
                    Email: {props.user.userid}
                  </label>
                </div>
                <div className="col-lg-12 mt-3 text-left">
                  <label className="form-control-label">
                    User Status: {props.user.userStatus}
                  </label>
                </div>
                <div className="col-lg-12 mt-3 text-left">
                  <label className="form-control-label">
                    Created on: 01-12-2020 (This is hard coded)
                  </label>
                </div>
                <div className="col-lg-12 mt-4 text-left">
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
                  <button
                    type="button"
                    className="btn btn-custom btn-dashboard danger-button ml-2"
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
              </div>
            </form>
          )}
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
};

export default AccountComponent;
