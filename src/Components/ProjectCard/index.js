import { Button } from 'antd';
import React from 'react';
import styles from './style.module.scss';

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.description}>{project.desc}</p>
            <p className={styles.technologies}>Technologies used: {project.technologies.join(', ')}</p>
            <div className={styles.btn_group}>
                {project.github ?
                    <Button size="large" href={project.github} className={styles.btn_github} icon={<i class="fab fa-github"></i>}>
                        Github
                    </Button> : null}

                {project.demo ?
                    <Button size="large" href={project.demo} className={styles.btn_demo} icon={<i class="fas fa-arrow-right"></i>} >
                        Demo
                    </Button> : null}
            </div>
        </div>
    );
}

export default ProjectCard;
