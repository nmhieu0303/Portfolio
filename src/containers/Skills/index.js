import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { skillsSection } from '../../portfolio';
import GreetingLottie from './../../Components/GreetingLottie';
import styles from './style.module.scss'
import skills from './../../assets/lottie/webdev.json'
import { Tooltip } from 'antd';
import Fade from 'react-reveal/Fade';
const Skills = () => {
    return (
        <Fade right duration={1000} distance="40px">
            <Container className="text-center py-5">
                <div>
                    <h1 className="display-2" >{skillsSection.title}</h1>
                    <p className={styles.lead}>{skillsSection.subTitle.toUpperCase()}</p>
                    <p className={styles.lead}>{skillsSection.subTitleSoftSkills.toUpperCase()}</p>
                </div>
                <Row className="justify-content-around align-items-center ">
                    <Col md={5} xs={12}>
                        <GreetingLottie animationData={skills}></GreetingLottie>
                    </Col>
                    <Col md={5} xs={12}>
                        <div className={styles.software_skills}>
                            {skillsSection.softwareSkills.map(skill => {
                                return <Tooltip placement="bottom" title={skill.skillName} key={skill.skillName}>
                                    <div className={styles.tech_icon} >
                                        <span class="iconify" data-icon={skill.icon}></span>
                                    </div>
                                </Tooltip>
                            })}
                        </div>

                    </Col>
                </Row>
            </Container>
        </Fade>
    );
}

export default Skills;
