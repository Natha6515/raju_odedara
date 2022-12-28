import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';


const styles = {
  introTextContainer: {
    marginLeft: "10%",
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: "5%",
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  outerSide:{
   marginTop:"0%",
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
   flexDirection:"column-reverse", 
   
  },
  container:{
    marginLeft:"10%",
  }
};

function About(props) {
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);



if(window.innerWidth > 800){
  styles.container = null;
}

  return (
    <>
      <div style={styles.container} className="container">

        <Container>
          {data
            ? (
              <Fade>

                     <div className="my-5 order-4">
                      
                      </div>
                   
                    
                    <div style={styles.outerSide} className="row">


                   
                    <div style={styles.introImageContainer} className="mx-5 col-md-12 mx-5 m-md-5 m-sm-5 m-xl-0 col-sm-12 pt-1 text-sm-center pt-lg-0 mt-sm-3 mt-md-3 order-3 order-md-3 order-lg-3 order-sm-3">
                          
                         <img src={data?.imageSource} alt="profile" />

                      </div>
                      <div className="my-3 order-2">
                      
                       </div>
                    
                    <div className='my-3 mx-5'>

                       <div style={styles.introTextContainer} className="col-md-12 mx-5 m-md-5 m-sm-5 m-xl-0 col-sm-12 pt-1 text-sm-center pt-lg-0 mt-sm-3 mt-md-3 order-1 order-md-1 order-lg-1 order-sm-1">
                              {parseIntro(data.about)} 
                         </div>
                    </div>
                   </div>
                     

                {/* <Row style={styles.both}>
                  <Col style={styles.introTextContainer}>
                    {parseIntro(data.about)}
                  </Col>
                  <Col style={styles.introImageContainer}>
                    <img src={data?.imageSource} alt="profile" />
                  </Col>
                </Row> */}
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
