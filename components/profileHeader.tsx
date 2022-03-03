import type { NextPage } from 'next';
import styles from '../styles/profileHeader.module.scss';
import { useRouter } from 'next/router';
const ProfileHeader: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.main_container}>
      <div className={styles.back_arrow}>
        <button onClick={() => router.back()}>
          <img src='Assets/back_arrow.svg' alt='icon' />
        </button>
      </div>
      <div className={styles.home}>
        <button>
          <img src='Assets/home.svg' alt='icon' />
        </button>
      </div>
      <div className={styles.search}>
        <button>
          <img
            src='Assets/circle_avatar.svg'
            alt='icon'
            className={styles.avatar_icon}
          />
        </button>

        <h3>johndoe.near</h3>
        <button>
          <img
            src='Assets/search_field_arrow.svg'
            alt='icon'
            className={styles.search_arrow}
          />
        </button>
      </div>
      <div className={styles.noticification}>
        <button>
          <img src='Assets/notification.svg' alt='icon' />
        </button>
      </div>
      <div className={styles.settings}>
        <button>
          <img src='Assets/settings.svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
