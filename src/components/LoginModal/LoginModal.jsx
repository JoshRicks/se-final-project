import { Link } from "react-router-dom";
//import { useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, registerClick, formRef }) {
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      id="login-modal"
      formId="login-form"
      isOpen={isOpen}
      onClose={onClose}
      formRef={formRef}
    >
      <label htmlFor="login-email-input" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="login-email-input"
          placeholder="Enter email"
          name="email"
        />
        <span className="modal__error" id="login-email-input-error"></span>
      </label>
      <label htmlFor="login-password-input" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="login-password-input"
          placeholder="Enter password"
          name="password"
        />
        <span className="modal__error" id="login-password-input-error"></span>
      </label>
      <p className="register__btn">
        or
        <button className="register__link" onClick={registerClick}>
          Sign up
        </button>
      </p>
    </ModalWithForm>
  );
}

export default LoginModal;
