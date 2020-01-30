import React from "react";
import MyDropzone from "components/DD";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <MyDropzone />
    </div>
  );
}

export default App;
