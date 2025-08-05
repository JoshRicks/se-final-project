import { Link } from "react-router-dom";
//import { useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function LoginModal({
  isOpen,
  onClose,
  registerClick,
  formRef,
  data,
  handleChange,
  handleLogIn,
}) {
  const handleLoginclick = (e) => {
    console.log("submitted");
    e.preventDefault();
    handleLogIn(data);
  };
  const belowSubmit = (
    <button className="register__btn" onClick={registerClick}>
      <p className="register__btn-text">or</p>
      Sign up
    </button>
  );
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      id="login-modal"
      formId="login-form"
      isOpen={isOpen}
      onClose={onClose}
      formRef={formRef}
      onSubmit={handleLoginclick}
      belowSubmit={belowSubmit}
    >
      <label htmlFor="login-email-input" className="modal__label">
        Email
        <input
          required
          type="email"
          className="modal__input"
          id="login-email-input"
          placeholder="Enter email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <span className="modal__error" id="login-email-input-error"></span>
      </label>
      <label htmlFor="login-password-input" className="modal__label">
        Password
        <input
          required
          type="password"
          className="modal__input"
          id="login-password-input"
          placeholder="Enter password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <span className="modal__error" id="login-password-input-error"></span>
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
