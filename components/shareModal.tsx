import type { NextPage } from 'next';
import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import styles from '../styles/modal.module.scss';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 300,
  bgcolor: 'white',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

const shareModal: NextPage<any> = ({ handleOpen, handleClose, open }) => {
  return (
    <StyledModal
      aria-labelledby='unstyled-modal-title'
      aria-describedby='unstyled-modal-description'
      open={open}
      BackdropComponent={Backdrop}
    >
      <div className='modal_container'>
        <Box sx={style}>
          <div className={styles.container}>
            <h2>
              Share this Experience
              <button onClick={handleClose}>
                <img src='Assets/close.svg' alt='close' />
              </button>
            </h2>
            <input
              type='text'
              value='Hello World'
              id='myInput'
              placeholder='https://nearlabs.app/app/docu_s...'
            />
            <button className={styles.copy}>
              <img src='Assets/copy_link.svg' alt='copy' />
            </button>
            <div className={styles.btn_container}>
              <button>
                <img src='Assets/twitter.svg' alt='twitter' />
              </button>
              <button>
                <img src='Assets/discord.svg' alt='discord' />
              </button>
              <button>
                <img src='Assets/msg.svg' alt='msg' />
              </button>
            </div>
          </div>
        </Box>
      </div>
    </StyledModal>
  );
};
export default shareModal;
