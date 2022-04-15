import styles from "../styles/ListItemCreator.module.css";
import { AiOutlineDelete, AiOutlineClose } from "react-icons/ai";

const ListItemCreator = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <AiOutlineDelete />
          <AiOutlineClose />
        </div>
        <div className={styles.text}>Camput build</div>
        <textarea
          className={styles.txtArea}
          placeholder="Add details"
        ></textarea>
        <div className={styles.text}>Add date</div>
        <div className={styles.text}>Move to another List</div>
      </div>
    </div>
  );
};

export default ListItemCreator;
