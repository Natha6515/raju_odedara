import React, { useState, useEffect, useContext } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import { Navbar } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};


const styles2 = {
  logoStyle: {
    width: 100,
    height: 80,
  },
};


function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const theme = useContext(ThemeContext);
  const [data2, setData2] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(endpoints.navbar, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData2(res))
      .catch((err) => err);
  }, []);

  return data ? (
    
    <Fade>      
      <div style={styles.mainContainer}>


    <div   
   className='my-4'>
      <img 
              src={data2?.logo2?.source}
              className="d-inline-block align-top"
              alt="main logo"
              style={
                data2?.logo2?.height && data2?.logo2?.width
                  ? { height: data2?.logo2?.height, width: data2?.logo2?.width }
                  : styles2.logoStyle
              }
            />
    </div>

        <h1 style={styles.nameStyle}>{data?.name}</h1>
        <div style={{ flexDirection: 'row' }}>


          

          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </div>
        <Social />
      </div>
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;
