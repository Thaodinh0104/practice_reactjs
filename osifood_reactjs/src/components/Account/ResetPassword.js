import React from "react";
import { useForm } from "react-hook-form";
export const ResetPassword = ({ isOpen, onClose }) => {
  console.log(isOpen);
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div
      id="header-recover-panel"
      className={`site_account_panel site_account_sliding ${
        isOpen ? "is-selected" : ""
      }`}
    >
      <div className="site_account_header">
        <p className="txt-title ">Khôi phục mật khẩu</p>
        <p className="txt-small">Nhập email của bạn:</p>
      </div>
      <div className="site_account_inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type={"text"}
              {...register("email", {
                required: "Please enter your Email.",
              })} // custom message
            />
            <label htmlFor="email">Email</label>
          </div>
          <button
            type="submit"
            className="form__submit button dark"
            id="form_submit-recover"
          >
            Khôi phục
          </button>
        </form>
        <div className="site_account_secondary-action">
          <p>
            Bạn đã nhớ mật khẩu?
            <button
              onClick={() => onClose(false)}
              aria-controls="header-login-panel"
              className="js-link link"
            >
              Trở về đăng nhập
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
