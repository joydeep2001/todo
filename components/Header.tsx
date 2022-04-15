import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = ({ userImage }: { userImage: string }) => {
  return (
    <div className={styles.header}>
      {/*Logo*/}
      <div className={styles.logoCont}>
        <img src="/images/logo.png" width={"80px"} />
        <h2>TaskBoard</h2>
      </div>
      {/*Profile Pic */}
      <div>
        <img
          src={userImage}
          style={{
            borderRadius: "50%",
            marginRight: "30px",
            marginTop: "10px",
          }}
          height={"60px"}
          width={"60px"}
        />
      </div>
    </div>
  );
};

export default Header;
