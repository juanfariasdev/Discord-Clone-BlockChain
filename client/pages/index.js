import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}></div>
      {/* conversationList */}
      {/* chat view */}
    </div>
  );
}

export default Home;
