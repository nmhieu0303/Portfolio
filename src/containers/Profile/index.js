import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import SocialLink from '../../Components/SocialLink';
import avatar from './../../assets/images/avatar.jpg';
import styles from './style.module.scss';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} xs={12}>
                        <div className={styles.info}>
                            <h3 className="display-5">Reach out to me!</h3>
                            <h4>I'm a Front End Web Developer</h4>
                            <p>Phone: 0845606616</p>
                            <p>Mail: nmhieu03032000@gmail.com</p>
                        </div>
                        <SocialLink/>
                    </Col>
                    <Col md={5} xs={12} className="text-center">
                        <img src={avatar} alt="avatar" className={styles.avatar} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;
