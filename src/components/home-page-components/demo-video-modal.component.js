import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const DemoModal = (props) => {
  return (
    <Modal
      isOpen={props.showVideoModalPopup}
      toggle={props.toggleShowVideoModalpopup}
      className={`modal-dialog modal-dialog-centered  modal-lg`}
    >
      <ModalBody className="text-center">
        <iframe
          src="https://player.vimeo.com/video/100902001?title=0&byline=0&portrait=0"
          width="720"
          height="360"
          frameBorder="0"
          allow="autoplay"
          title="demo-video"
        ></iframe>
      </ModalBody>
    </Modal>
  );
};

export default DemoModal;
