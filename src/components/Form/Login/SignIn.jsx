import * as s from "./style.module.css";

export default function SignIn() {
  return (
    <>
      <h3 className={s.form_title}>Login to your account</h3>
      <input type="email" placeholder="username or email" />
      <input type="password" placeholder="password" />
      <button type="submit" className={s.login_submit}>
        Submit
      </button>
    </>
  );
}
