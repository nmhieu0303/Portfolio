import React from 'react';
import styles from './style.module.scss';

const TitleSession = ({title,icon}) => {
    return (
        <div className={styles.title}>
        <div className={styles.icon}>
            {icon}
        </div>
        <h2 className="text-light text-bolder">{title}</h2>
    </div>
    );
}

export default TitleSession;
