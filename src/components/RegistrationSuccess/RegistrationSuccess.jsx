import "../ModalWithForm/ModalWithForm.css";

import closeBtn from "../../assets/close.svg";

function RegistrationSuccess({ isOpen, loginClick, onClose }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`} id="success-modal">
      <div className="modal__container modal__container__type_success">
        <h3 className="modal__title modal__title_type_success">
          Registration successfully completed!
        </h3>
        <button className="modal__close-btn" onClick={onClose}>
          <img src={closeBtn} alt="Close" className="modal__close-img" />
        </button>
        <button className="modal__login-btn" onClick={loginClick}>
          Sign in
        </button>
      </div>
    </div>
  );
}
export default RegistrationSuccess;
