import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../types";
import { styles } from "../styling/styles";

interface SideMenuProps {
    items: MenuItem[];
}

const SideMenu: React.FC<SideMenuProps> = ({ items }) => (
    <nav style={styles.sideMenu}>
        <ul style={styles.menuList}>
            {items.map((item, index) => (
                <li key={index} style={styles.menuItem}>
                    <Link to={item.url} style={styles.menuLink}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default SideMenu;
