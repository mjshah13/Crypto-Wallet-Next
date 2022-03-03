import type { NextPage } from 'next';
import styles from '../styles/categories.module.scss';
import { ReactSVG } from 'react-svg';

const categories: NextPage<any> = ({ icon, iconBg, title, boxBg }) => {
  return (
    <div className={styles.main_container} style={{ backgroundColor: boxBg }}>
      <div
        className={styles.icon_container}
        style={{ backgroundColor: iconBg }}
      >
        <img src={icon} alt='icon' />
      </div>
      <div className={styles.title_container}>
        <h3>{title}</h3>
        <button>
          <ReactSVG src='Assets/Arrow.svg' className={styles.arrow_svg} />
        </button>
      </div>
    </div>
  );
};

export default categories;
