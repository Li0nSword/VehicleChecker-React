import React from "react";
import { styles } from "../styling/styles";
import logo from "../assets/logo.png";

const Header: React.FC = () => (
    <header style={styles.header}>
        <img src={logo} alt="Logistics UK Logo" style={styles.logo} />
    </header>
);

export default Header;
