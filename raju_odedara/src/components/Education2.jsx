import React, { useEffect, useState, useContext } from 'react';
import { Chrono } from 'react-chrono';
import { Container } from 'react-bootstrap';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import '../css/education.css';


const styles = {
    ulStyle: {
      listStylePosition: 'outside',
      paddingLeft: 20,
    },
    subtitleContainerStyle: {
      marginTop: 10,
      marginBottom: 10,
    },
    subtitleStyle: {
      display: 'inline-block',
    },
    inlineChild: {
      display: 'inline-block',
    },
    itemStyle: {
      marginBottom: 10,
    },
  };
  

function Education2(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [width, setWidth] = useState('50vw');
  const [mode, setMode] = useState('VERTICAL_ALTERNATING');

  useEffect(() => {
    fetch(endpoints.education, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res.education))
      .catch((err) => err);

      console.log(data); 

    if (window?.innerWidth < 576) {
      setMode('VERTICAL');
    }

    if (window?.innerWidth < 576) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth('75vw');
    } else {
      setWidth('50vw');
    }
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div style={{ width }} className="section-content-container">
          <Timeline
                lineColor={theme.timelineLineColor}
              >
                {data.map((item) => (
                  <Fade>
                    <TimelineItem
                      key={item.cardTitle}
                      dateText={item.title}
                      dateInnerStyle={{ background: theme.accentColor }}
                      style={styles.itemStyle}
                      bodyContainerStyle={{ color: theme.color }}
                    >
                      <h2 className="item-title">
                        {item.cardTitle}
                      </h2>
                      <div style={styles.subtitleContainerStyle}>
                        <h4 style={{ ...styles.subtitleStyle, color: theme.accentColor }}>
                         <br/>
                          {item.cardSubtitle}
                        </h4>
                        <br/>
                        <br/>
                        <br/>
                        {item.cardDetailedText && (
                        <h5 style={styles.inlineChild}>
                    &nbsp;·
                          {' '}
                          {item.cardDetailedText}
                        </h5>
                        )}
                      </div>
                        </TimelineItem>
                  </Fade>
                ))}
              </Timeline>

          </div>
        </Fade>
        
      ) : <FallbackSpinner /> }
    </>
    
  );
}

Education2.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education2;
