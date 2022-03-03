import type { NextPage } from 'next';
import styles from '../styles/contract.module.scss';
import { ReactSVG } from 'react-svg';

const contract: NextPage<any> = ({ name, desc, user, img }) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.left_col}>
        <img src={img} alt='icon' />
      </div>
      <div className={styles.right_col}>
        <h2>{name}</h2>
        <div className={styles.div}>
          <div className={styles.desc}>
            <p>{desc}</p>
          </div>
          <div className={styles.icon}>
            <button>
              <ReactSVG src='Assets/Arrow.svg' className={styles.arrow_svg} />
            </button>
          </div>
        </div>
        <a href='#'>{user}</a>
      </div>
    </div>
  );
};

export default contract;
