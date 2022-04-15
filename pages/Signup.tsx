import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/router";
import Link from "next/link";

toast.configure();

interface IFormInputs {
  email: string;
  password: string;
  fullname: string;
}

const Signup: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>();

  const { user, signup } = useAuth();
  const router = useRouter();
  const formSubmitHandler: SubmitHandler<IFormInputs> = async (
    data: IFormInputs
  ) => {
    console.log("sub data ", data);
    try {
      const res = await toast.promise(signup(data.email, data.password), {
        pending: "Please wait..",
        success: "Account opened successfully",
      });
      router.push("/");
    } catch (e: any) {
      toast.error(e.code.split("/")[1]);
      console.log(e);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imgCont}>
          <img src="/images/login.jpg" height="100%" width="100%" />
        </div>

        <form
          onSubmit={handleSubmit(formSubmitHandler)}
          className={styles.formCont}
        >
          <h1>Signup</h1>
          <input
            {...register("fullname", { required: true })}
            type="text"
            id="fullname"
            className={styles.inputBox}
            placeholder="Name"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            className={styles.inputBox}
            placeholder="Email id"
          />

          <input
            {...register("password", { required: true })}
            type="password"
            className={styles.inputBox}
            placeholder="Password"
          />
          <div className={styles.otherInputs}>
            <div className={styles.checkboxCont}>
              <input type="checkbox" />
              Accept terms &#38; conditions
            </div>
            <Link href="/Login">Login?</Link>
          </div>
          <button className={styles.btn}>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
