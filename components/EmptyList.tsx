import styles from "../styles/TaskList.module.css";
import { IoIosAddCircle } from "react-icons/io";

const EmptyList = () => {
  return (
    <div className={styles.emptyList}>
      New Task <IoIosAddCircle size="2em" className={styles.addIcon} />
    </div>
  );
};

export default EmptyList;
