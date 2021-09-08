import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProjectCard from '../../Components/ProjectCard';
import TitleSession from '../../Components/TitleSession';
import { projects } from '../../portfolio';
import styles from './style.module.scss';
import Fade from 'react-reveal'

const Projects = () => {
    return (
        <Fade top duration={1000} distance="40px">
            <div className={styles.projects}>
                <Container>
                    <TitleSession title="Project"
                        icon={<span class="iconify" data-icon="entypo:laptop" style={{ color: ' #11cdef' }}></span>}
                    />
                    <Row className="justify-content-start align-items-strech my-3">
                        {projects.map((project, index) => {
                            return <Col md={4} xs={12} className="my-4" key={index}>
                                <ProjectCard project={project} />
                            </Col>

                        })}
                    </Row>
                </Container>
            </div >
        </Fade>
    );
}

export default Projects;
