import type { NextPage } from 'next';
import styles from '../styles/docuTop.module.scss';
import React from 'react';
import ShareModal from '../components/shareModal';

const docuTop: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.main_container}>
      <div className={styles.bg}>
        <img className={styles.icon} src='Assets/docu_logo.svg' alt='' />
      </div>
      <div className={styles.section}>
        <button onClick={handleOpen}>
          <img src='Assets/share.svg' alt='' />
        </button>
        <div className={styles.content}>
          <h3>Docu Sign</h3>
          <p>Sign smart contracts seamlessly</p>
          <p id={styles.util}>Utilities</p>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.button_check}>
            <img src='Assets/primary_button.svg' alt='button' />
          </button>
          <div className={styles.user_detail}>
            <img src='Assets/user.svg' alt='users' />
            <p>24,000+ Users</p>
          </div>
        </div>
      </div>
      <ShareModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default docuTop;
