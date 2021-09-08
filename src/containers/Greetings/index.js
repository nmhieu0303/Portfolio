import { Button } from 'antd';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import GreetingLottie from './../../Components/GreetingLottie';
import Navigation from './../../Components/Navigation';
import SocialLink from './../../Components/SocialLink';
import './style.css';
import code from './../../assets/lottie/code.json'
import Separator from './../../Components/Separator';

const Greetings = () => {
    return (
        <div className="greetings">
            <section className="section-shaped">
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
                <Navigation />
                <Container style={{paddingBottom: '6rem'}}>
                    <Row className="align-items-center justify-content-between ">
                        <Col md={5} xs={12} >
                            <h1 className="mt-4 text-light">Hi all, I'm Minh Hieu</h1>
                            <p className="lead my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur sed blanditiis voluptatibus natus recusandae sint debitis voluptatem consequuntur quidem!</p>
                            <SocialLink />
                            <Button href="https://www.topcv.vn/xem-cv/UFAGUAEBB11XVABRBF0DUgABBldTUwRdAVEHCwd4fd" className="btn-cv mt-4" icon={<i class="far fa-file"></i>} size="large" shape="round">
                                SEE MY CV
                            </Button>
                        </Col>
                        <Col md={5} xs={12} >
                            <GreetingLottie animationData={code} />
                        </Col>
                    </Row>
                </Container>
                 <Separator/>
            </section>


        </div>
    );
}

export default Greetings;
