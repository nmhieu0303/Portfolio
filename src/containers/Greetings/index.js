import { Button } from 'antd';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import GreetingLottie from './../../Components/GreetingLottie';
import Navigation from './../../Components/Navigation';
import SocialLink from './../../Components/SocialLink';
import './style.css';
import code from './../../assets/lottie/code.json'
import Separator from './../../Components/Separator';
import { greetings } from '../../portfolio';

const Greetings = () => {
    return (

        <div className="greetings">
            <section className="section-shaped">
                <Navigation />
                <Fade top duration={1000} distance="40px">
                    <div className="shape shape-style-1 bg-gradient-info">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>

                    <Container style={{ paddingBottom: '6rem' }}>
                        <Row className="align-items-center justify-content-between ">
                            <Col md={5} xs={12} >
                                <h1 className="mt-4 text-light">{greetings.title}</h1>
                                <p className="lead my-4">{greetings.description}</p>
                                <SocialLink />
                                <Button href={greetings.linkCv} className="btn-cv mt-4" icon={<i class="far fa-file"></i>} size="large" shape="round">
                                    SEE MY CV
                                </Button>
                            </Col>
                            <Col md={5} xs={12} >
                                <GreetingLottie animationData={code} />
                            </Col>
                        </Row>
                    </Container>
                    <Separator />
                </Fade>

            </section>


        </div>
    );
}

export default Greetings;
