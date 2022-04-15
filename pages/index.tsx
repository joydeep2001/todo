import type { GetServerSideProps, NextPage } from "next";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import styles from "../styles/Home.module.css";
import ListItemCreator from "../components/ListItemCreator";
import { useContext, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

type ImageProps = {
  imageURL: string;
};

const Home = (props: ImageProps) => {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/Login");
  }, []);

  return (
    <div>
      <Header userImage={props.imageURL} />

      <div className={styles.container}>
        {/* <ListItemCreator /> */}
        <TaskList />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const randomNumber = Math.round(Math.random() * 10000) % 1000;
  console.log(randomNumber);
  const res = await fetch(`https://picsum.photos/id/${randomNumber}/info`);
  const image = await res.json();
  console.log(image);
  return {
    props: { imageURL: image.download_url },
  };
};
export default Home;
