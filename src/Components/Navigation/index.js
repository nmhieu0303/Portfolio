import React, { useState } from 'react';
import {
    Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem,
    NavLink
} from 'reactstrap';
import { socialData } from '../../portfolio';
import styles from './style.module.scss';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={styles.navigation}>
            <Navbar color="translate" light expand="md">
                <div className="container">
                    <NavbarBrand href="/" className={styles.logo}>Minh Hiếu</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar className="justify-content-end">
                        <Nav navbar>
                            {socialData.map((item, index) => {
                                return <NavItem>
                                    <NavLink href={item.link}>
                                        {item.icon}
                                        <span className={styles.social_text}>
                                            {item.text}
                                        </span>
                                    </NavLink>
                                </NavItem>
                            })}
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Navigation;
