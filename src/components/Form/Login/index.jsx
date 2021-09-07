import { useState } from "react";
import SignIn from "./SignIn";
import * as s from "./style.module.css";

export default function SignUp() {
  const [showSignIn, setshowSignIn] = useState(false);

  return (
    <section className={s.login_container}>
      <form className={s.login_form}>
        {!showSignIn ? (
          <>
            <h3 className={s.form_title}>Create a new account</h3>
            <input type="text" placeholder="full name" />
            <input type="email" placeholder="enter your email" />
            <input type="password" placeholder="password" />
            <button type="submit" className={s.login_submit}>
              Submit
            </button>
          </>
        ) : (
          <SignIn />
        )}

        <span className={s.go_to_signIn}>
          {showSignIn
            ? "New here? create a account"
            : "Already have a account?"}

          {showSignIn ? (
            <span onClick={() => setshowSignIn(false)} className={s.signIn_btn}>
              sign up
            </span>
          ) : (
            <span onClick={() => setshowSignIn(true)} className={s.signIn_btn}>
              sign in
            </span>
          )}
        </span>
      </form>
    </section>
  );
}
