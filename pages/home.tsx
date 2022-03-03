import type { NextPage } from 'next';
import styles from '../styles/home.module.scss';
import Grid from '@mui/material/Grid';
import { ReactSVG } from 'react-svg';
import Contract from '../components/contract';
import Categories from '../components/categories';
import ProfileHeader from '../components/profileHeader';
import FilterModal from '../components/filterModal';
import * as React from 'react';
import { useRouter } from 'next/router';

const home: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('docu-sign');
  };
  return (
    <div className={styles.main_container}>
      <ProfileHeader />
      <div className={styles.search}>
        <div className={styles.div_one}>
          <img src='Assets/search.svg' alt='' />
          <input type='text' placeholder='Search experiences' />
        </div>
        <div className={styles.div_two}>
          <button onClick={handleOpen}>
            <img src='Assets/filter.svg' alt='' />
          </button>
        </div>
      </div>
      <div className={styles.experiences}>
        <h2>Recent Experiences</h2>
        <div className={styles.contract} onClick={handleClick}>
          <Contract
            img='Assets/defi_logo.svg'
            name='DeFi Swap'
            desc='Swap your digital assets'
            user='+200 users'
          />
        </div>
        <div className={styles.contract} onClick={handleClick}>
          <Contract
            img='Assets/docu_logo.svg'
            name='Docu Sign'
            desc='Sign smart contracts seamlessly'
            user='+1k users'
          />
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>Categories</h2>
          </div>
          <div className={styles.seeAll}>
            <button>
              See All
              <ReactSVG src='Assets/Arrow.svg' />
            </button>
          </div>
        </div>
        <Grid container className={styles.row}>
          <Grid sm={10} className={styles.category}>
            <Categories
              icon='Assets/exchanges.svg'
              iconBg='#587BE0'
              title='Exchanges'
              boxBg='#EAEFFF'
            />
          </Grid>
          <Grid sm={10} className={styles.category}>
            <Categories
              icon='Assets/game.svg'
              iconBg='#414047'
              title='Games'
              boxBg='#F5F5F5'
            />
          </Grid>
          <Grid sm={10} className={styles.category}>
            <Categories
              icon='Assets/market.svg'
              iconBg='#34AE91'
              title='Marketplaces'
              boxBg='#E2F9F3'
            />
          </Grid>
          <Grid sm={10} className={styles.category}>
            <Categories
              icon='Assets/box.svg'
              iconBg='#F98F54'
              title='Defi'
              boxBg='#FFF3EC'
            />
          </Grid>
        </Grid>
      </div>{' '}
      <div className={styles.experiences}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>Trending Experience</h2>
          </div>
          <div className={styles.seeAll}>
            <button>
              See All
              <ReactSVG src='Assets/Arrow.svg' />
            </button>
          </div>
        </div>

        <div className={styles.contract}>
          <Contract
            img='Assets/docu_logo.svg'
            name='Docu Sign'
            desc='Sign smart contracts seamlessly'
            user='+1k users'
          />
        </div>
        <div className={styles.contract}>
          <Contract
            img='Assets/defi_logo.svg'
            name='DeFi Swap'
            desc='Swap your digital assets'
            user='+200 users'
          />
        </div>
        <div className={styles.contract}>
          <Contract
            img='Assets/docu_logo.svg'
            name='Docu Sign'
            desc='Sign smart contracts seamlessly'
            user='+1k users'
          />
        </div>
      </div>
      <FilterModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default home;
