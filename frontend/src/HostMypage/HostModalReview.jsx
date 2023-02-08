import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const HostModalReview = (props) => {
  const [show, setShow] = useState(true);




  const close=()=>{
    props.setModalOpen(false);
    console.log(props.modalOpen);
  }


  return (
    <div>
      <Modal
        show={props.modalOpen}
        onHide={() => {
          props.setModalOpen(false);
        }}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton onClick={close}>
          <Modal.Title id="example-custom-modal-styling-title" onClick={close}>
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default HostModalReview;

