import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ResetPassword } from "./ResetPassword";
export const Login = () => {
  const [resetPassword, setResetPassword] = useState(false);
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  console.log("resetPassword", resetPassword);
  return (
    <div className="site_account_panel_list">
      <div
        id="header-login-panel"
        className={`site_account_panel site_account_default ${
          !resetPassword ? "is-selected" : ""
        }`}
      >
        <div className="site_account_header">
          <p className="txt-title ">Đăng nhập tài khoản</p>
          <p className="txt-small">Nhập email và mật khẩu của bạn:</p>
        </div>
        <div className="site_account_inner">
          <form onSubmit={handleSubmit(onSubmit)} id="customer_login">
            <div className="form-group">
              <input
                type={"text"}
                {...register("email", {
                  required: "Please enter your Email.",
                })} // custom message
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <input
                type={"password"}
                {...register("password", {
                  required: "Please enter your Password.",
                })} // custom message
              />
              <label htmlFor="password">Password</label>
            </div>
            <button
              type="submit"
              className="form__submit button dark"
              id="form_submit-login"
            >
              Đăng nhập
            </button>
          </form>

          <div className="site_account_secondary-action">
            <p>
              Khách hàng mới?
              <Link className="link" href="/account/register">
                Tạo tài khoản
              </Link>
            </p>
            <p>
              Quên mật khẩu?
              <button
                aria-controls="header-recover-panel"
                className="js-link link"
                onClick={() => setResetPassword(true)}
              >
                Khôi phục mật khẩu
              </button>
            </p>
          </div>
        </div>
      </div>

      <ResetPassword
        isOpen={resetPassword}
        onClose={(isShow) => setResetPassword(isShow)}
      />
    </div>
  );
};
