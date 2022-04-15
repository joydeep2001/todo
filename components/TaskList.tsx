import styles from "../styles/TaskList.module.css";
import EmptyList from "./EmptyList";
import { BsThreeDotsVertical } from "react-icons/bs";

const TaskList = () => {
  return (
    <div className={styles.listCont}>
      <header className={styles.header}>
        {/*List Name*/}
        <div className={styles.listName}>My List</div>
        <div className={styles.menu}>
          <BsThreeDotsVertical />
        </div>
      </header>

      {/* <div className={styles.addTask}>
        <div className={styles.addBtn}>
          <img src="/images/add.png" height="100%" width="100%" />
        </div>
        Add a Task
      </div> */}
      <EmptyList />
    </div>
  );
};

export default TaskList;
