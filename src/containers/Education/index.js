import { Tag } from 'antd';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';

const Education = () => {
    return (
        <div className={styles.education}>
            <Container>
                <div className={styles.title}>
                    <div className={styles.icon}>
                        <span class="iconify" data-icon="cil:education" style={{ color: ' #1171ef' }}></span>
                    </div>
                    <h2 className="text-light text-bolder">Education</h2>
                </div>
                <Row className="justify-content-center mt-3 mb-5">
                    <Col md={5} xs={12} className="mt-3">
                        <div className={styles.card}>
                            <h5 className={styles.schoolName}>University of Science</h5>
                            <h6>Infomation Technology</h6>
                            <Tag color="#2db7f5" className="mb-2">Aug 2018 - Sep 2021 </Tag>
                            <h6>{`GPA: `}<strong>7.5</strong></h6>
                            <p className={styles.description}>I have spent three years improving my skills in coding</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Education;
