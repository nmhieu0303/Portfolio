import { Tag } from 'antd';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Fade from 'react-reveal';
import styles from './style.module.scss';
import { educationInfo } from '../../portfolio';

const Education = () => {
    return (
        <Fade top duration={1000} distance="40px">
            <div className={styles.education}>
                <Container>
                    <div className={styles.title}>
                        <div className={styles.icon}>
                            <span class="iconify" data-icon="cil:education" style={{ color: ' #1171ef' }}></span>
                        </div>
                        <h2 className="text-light text-bolder">Education</h2>
                    </div>
                    <Row className="justify-content-center mt-3 mb-5">
                        {educationInfo.map((item, index) => {
                            return <Col md={5} xs={12} className="mt-3">
                                <Fade left duration={1000} distance="40px">
                                    <div className={styles.card}>
                                        <h5 className={styles.schoolName}>{item.schoolName}</h5>
                                        <h6>{item.major}</h6>
                                        <Tag color="#2db7f5" className="mb-2">{item.duration}</Tag>
                                        <h6>{`GPA: `}<strong>{item.gpa}</strong></h6>
                                        <p className={styles.description}>{item.desc}</p>
                                    </div>
                                </Fade>
                            </Col>
                        })}

                    </Row>
                </Container>
            </div>
        </Fade>
    );
}

export default Education;
