import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal-topic">
        <div className="modal-header-topics">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-topic-header">
        <h1>
          Topic Name
        </h1>
        </div>
        <div className="modal-topic-author">
        <h2>
            Group Name 1, Group Name 2, Group Name 3...
        </h2>
        </div>
        <div >
        <p className="modal-topic-body">
            Topic Body <br></br>
            blah<br></br>
            blah<br></br>
            blah<br></br>
            blah<br></br>
            blah<br></br>
        </p>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;