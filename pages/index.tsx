import type { NextPage } from 'next';
import styles from '../styles/index.module.scss';
import { useRouter } from 'next/router';

const splash: NextPage = () => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('home');
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.center}>
          <div>
            <img src='Assets/home_icon.svg' alt='home' />
            <h3>HomePage</h3>
          </div>
          <p>a web3 gateway to hidden experiences</p>
          <button onClick={handleClick}>continue</button>
        </div>
        <div className={styles.footer}>
          <p>powered by</p>
          <img src='Assets/near_icon.svg' alt='Near' />
        </div>
      </div>
    </div>
  );
};

export default splash;
