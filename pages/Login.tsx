import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Login: NextPage = () => {
  const onSubmit = () => {
    toast("Working");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imgCont}>
          <img src="/images/login.jpg" height="100%" width="100%" />
        </div>

        <div className={styles.formCont}>
          <h1>LOGIN</h1>
          <input
            type="email"
            className={styles.inputBox}
            placeholder="Email id"
          />

          <input
            type="password"
            className={styles.inputBox}
            placeholder="Password"
          />
          <div className={styles.otherInputs}>
            <div className={styles.checkboxCont}>
              <input type="checkbox" />
              Remember me
            </div>
            Forget Password?
          </div>
          <button onClick={onSubmit} className={styles.btn}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
