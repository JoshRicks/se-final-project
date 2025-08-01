import "../ModalWithForm/ModalWithForm.css";
import closeBtn from "../../assets/close.svg";

function ModalWithForm({
  children,
  title,
  buttonText,
  id,
  formId,
  onClose,
  isOpen,
  formRef,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`} id={id}>
      <div className="modal__container">
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-btn" onClick={onClose}>
          <img src={closeBtn} alt="Close" className="modal__close-img" />
        </button>
        <form
          id={formId}
          className="modal__form"
          ref={formRef}
          onSubmit={onSubmit}
        >
          {children}
          <button className="modal__submit-btn">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
