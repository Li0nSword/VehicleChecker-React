import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./Menu";
import Header from "./Header";
import { MenuItem } from "../types";
import menuData from "../data/menu.json";

const Layout: React.FC = () => {
    const menuItems: MenuItem[] = menuData.data;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Header />
            <div style={{ display: "flex", flex: 1 }}>
                <SideMenu items={menuItems} />
                <main style={{ flex: 1, padding: "20px" }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
