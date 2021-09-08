import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import SocialLink from '../../Components/SocialLink';
import { contact } from '../../portfolio';
import avatar from './../../assets/images/avatar.jpg';
import styles from './style.module.scss';
import Fade from 'react-reveal'
const Profile = () => {
    return (
        <div className={styles.profile}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={{ size: 4, order: 1 }} xs={{ size: 12, order: 2 }} className="my-3">
                        <Fade left duration={1000} distance="40px">
                            <div className={styles.info}>
                                <h3 className="display-5">{contact.title}</h3>
                                <h4>{contact.subTitle}</h4>
                                <p>{`Phone: ${contact.phone}`}</p>
                                <p>{`Mail: ${contact.mail}`}</p>
                                <SocialLink className="mt-4" />
                            </div>
                        </Fade>
                    </Col>
                    <Col md={{ size: 5, order: 2 }} xs={{ size: 12, order: 1 }} className="text-center my-3">
                        <Fade right duration={1000} distance="40px">
                            <img src={avatar} alt="avatar" className={styles.avatar} />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;
