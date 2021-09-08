import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';
import { experience } from '../../portfolio';
import TitleSession from './../../Components/TitleSession';
import Fade from 'react-reveal';

const Experience = () => {
    return (
        <div className={styles.experience}>
            <Container>
                <TitleSession title="Experience"
                    icon={<span class="iconify" data-icon="bx:bx-briefcase" style={{ color: ' #11cdef' }}></span>}
                />
                <Row className="justify-content-center align-content-strech my-3">
                    {experience.map((item, index) => {
                        return <Col md={4} xs={12} className="my-3" key={index}>
                            <Fade right duration={1000} distance="40px">
                                <Card className={styles.card}>
                                    <CardHeader tag="h5" className={styles.companyName} style={{ background: item.color }}>
                                        {item.company}
                                    </CardHeader>
                                    <CardBody>
                                        <img src={`./../../assets/images/${item.img}.jpg`} alt={item.role} className={styles.logo} />
                                        <h5 className={styles.position}>{item.role}</h5>
                                        <h6 className={styles.date}>{item.date}</h6>
                                        {item.desc.length > 1 ?
                                            (<ul className={styles.reposibles}>
                                                {item.desc.map(item => <li>{item}</li>)}
                                            </ul>)
                                            : item.desc.map(item => <p className={styles.description}>{item}</p>)
                                        }
                                    </CardBody>
                                </Card>
                            </Fade>
                        </Col>
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Experience;
