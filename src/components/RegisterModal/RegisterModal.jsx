import { Link } from "react-router-dom";
import { useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal() {
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      id="register-modal"
      formId="register-form"
    >
      <label htmlFor="register-email-input" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="register-email-input"
          placeholder="Enter email"
          name="email"
        />
        <span className="modal__error" id="register-email-input-error"></span>
      </label>
      <label htmlFor="register-password-input" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="register-password-input"
          placeholder="Enter password"
          name="password"
        />
        <span
          className="modal__error"
          id="register-password-input-error"
        ></span>
      </label>
      <label htmlFor="register-username-input" className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          id="register-username-input"
          placeholder="Enter your username"
          name="username"
          value={data.name}
          onChange={handleChange}
        />
        <span
          className="modal__error"
          id="register-username-input-error"
        ></span>
      </label>
      <p className="login__btn">
        or
        <Link className="login__link" to="login-modal" onClick={loginClick}>
          Sign in
        </Link>
      </p>
    </ModalWithForm>
  );
}

export default RegisterModal;
