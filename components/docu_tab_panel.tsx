import type { NextPage } from 'next';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../styles/docu_tab.module.scss';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const docuTab: NextPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='tab_container'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab label='Details' {...a11yProps(0)} />
            <Tab label='Activities' {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className={styles.details}>
            <h2>Overview</h2>
            <p>
              it is easy to electronically sign, manage and distribute all your
              contracts and documents safely, securely, anywhere, anytime-
              paperlessly.
            </p>
            <div className={styles.link}>
              <img src='Assets/globe.svg' alt='globe' />
              <a href='https://docusignn.io'>https://docusignn.io</a>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={styles.activities}>
            <div className={styles.activity}>
              <p>12 activity found </p>
            </div>
            {Array(4)
              .fill(null)
              .map(() => (
                <div className={styles.list}>
                  <div className={styles.left}>
                    <img src='Assets/list_vector.svg' alt='icon' />
                  </div>
                  <div className={styles.right}>
                    <h3>
                      <span>johndoe.near </span>
                      signed the contract successfully
                    </h3>
                    <p>2 days ago</p>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
};

export default docuTab;
