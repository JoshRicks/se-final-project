import { useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  isOpen,
  onClose,
  loginClick,
  formRef,
  data,
  handleChange,
  handleRegisterError,
  registerError,
  signUpClick,
}) {
  const labelClassName = registerError
    ? "modal__label modal__label_type_error"
    : "modal__label";
  const belowSubmit = (
    <button className="login__btn" onClick={loginClick}>
      <p className="login__btn-text">or</p>
      Sign in
    </button>
  );
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      id="register-modal"
      formId="register-form"
      isOpen={isOpen}
      onClose={onClose}
      formRef={formRef}
      onSubmit={signUpClick}
      belowSubmit={belowSubmit}
    >
      <label htmlFor="register-email-input" className="modal__label">
        Email
        <input
          required
          type="email"
          className="modal__input"
          id="register-email-input"
          placeholder="Enter email"
          name="email"
          value={data.email}
          onChange={handleChange}
          onBlur={handleRegisterError}
        />
        <span className="modal__error" id="register-email-input-error"></span>
      </label>
      <label htmlFor="register-password-input" className="modal__label">
        Password
        <input
          required
          type="password"
          className="modal__input"
          id="register-password-input"
          placeholder="Enter password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <span
          className="modal__error"
          id="register-password-input-error"
        ></span>
      </label>
      <label htmlFor="register-username-input" className={labelClassName}>
        Username
        <input
          required
          type="text"
          className="modal__input"
          id="register-username-input"
          placeholder="Enter your username"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <span
          className="modal__error"
          id="register-username-input-error"
        ></span>
        {registerError ? (
          <span htmlFor="register-error" className="modal__register-error">
            This email is not available
          </span>
        ) : null}
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
