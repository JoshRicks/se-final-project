import "../ModalWithForm/ModalWithForm.css";
import closeBtn from "../../assets/close.png";

function ModalWithForm({ children, title, buttonText, id, formId }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`} id={id}>
      <div className="modal__container">
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-btn">{closeBtn}</button>
        <form id={formId} className="modal__form">
          {children}
          <button className="modal__submit-btn">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
