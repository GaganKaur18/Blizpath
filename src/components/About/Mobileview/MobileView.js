import styles from "./mobileView.module.css";
const MobileView = () => {
  return (
    <div className = {styles.mobileabout}>
      <h2 className={styles.heading}>Why Us?</h2>

      <div className={styles.circleWrapper1}>
        <div className={styles.circles}>
        </div>
        <div className={styles.contentWrapper}>
            <h3>400+</h3>
            <h5>Technical Services </h5>
          </div>
      </div>
      <div className={styles.circleWrapper2}> 
        <div className={styles.circles}>
        </div>
        <div className={styles.contentWrapper}>
            <h3>30+</h3>
            <h5>Law Professionals</h5>
          </div>
      </div>
      <div className={styles.circleWrapper3}>
        <div className={styles.circles}>
        </div>
        <div className={styles.contentWrapper}>
            <h3>110+</h3>
            <h5>Content Developers</h5>
          </div>
      </div>
      <div className={styles.circleWrapper4}>
        <div className={styles.circles}>
        </div>
        <div className={styles.contentWrapper}>
            <h3>150+</h3>
            <h5>Language Experts</h5>
          </div>
      </div>
    </div>
  );
};

export default MobileView;
