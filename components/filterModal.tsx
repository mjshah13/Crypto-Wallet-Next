import type { NextPage } from 'next';
import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import styles from '../styles/filtermodal.module.scss';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const filterModal: NextPage<any> = ({ handleOpen, handleClose, open }) => {
  interface A<T> {
    T: boolean;
  }
  const data = [
    {
      name: 'All Experiences',
      icon: '',
      id: '1',
    },
    {
      name: 'Exchanges',
      icon: 'Assets/exchange.svg',
      id: '2',
    },
    {
      name: 'Games',
      icon: 'Assets/games.svg',
      id: '3',
    },
    {
      name: 'Marketplace',
      icon: 'Assets/markets.svg',
      id: '4',
    },
    {
      name: 'DeFi',
      icon: 'Assets/defi.svg',
      id: '5',
    },
    {
      name: 'Others',
      icon: 'Assets/others.svg',
      id: '6',
    },
  ];

  const [selectedItem, setSelectedItem] = useState<A<string> | {}>({});

  const handleChange = (id: string) => {
    setSelectedItem({ ...selectedItem, [id]: !(selectedItem as A<string>)[id] });
  };
  console.log(selectedItem, 'xcheck');
  const getSelectedItems = () => {
    Object.keys(selectedItem).forEach((key) => {
      if (!selectedItem[key]) {
        delete selectedItem[key];
      }
    });
    return Object.keys(selectedItem).length;
  };
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
              Filter <div className={styles.count}>{getSelectedItems()}</div>
              <button onClick={handleClose}>
                <img src='Assets/close.svg' alt='close' />
              </button>
            </h2>
            {data.map((item) => (
              <div className={styles.checklist}>
                <Checkbox {...label} onChange={() => handleChange(item?.id)} />
                {item?.icon && <img src={item.icon} alt='' />}
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </StyledModal>
  );
};
export default filterModal;
