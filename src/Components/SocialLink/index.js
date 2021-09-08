import { Button } from 'antd';
import React from 'react';
import { socialData } from '../../portfolio';
import styles from './style.module.scss';

const SocialLink = (props) => {
    return (
        <div className={props.className}>
            <div className={styles.social_link}>
                {socialData.map((item, index) => {
                    return (
                        <Button href={item.link} className="mx-2" shape="circle" size="large"
                            style={{ background: item.color, borderColor: item.color, color: '#fff' }}
                        >
                            {item.icon}
                        </Button>)
                })}
            </div>
        </div>
    );
}

export default SocialLink;
