import { Button, Drawer } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import '../../../../styles/DashNavbar.css'
import { NavLink } from "react-router-dom";

export default function DashNavbar({ menu }: { menu: JSX.Element }) {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <a className="navbar-brand" href="#root">
        <NavLink className="nav-link" to="/" >Training App</NavLink>
      </a>
      <Drawer
        title="Menu"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        open={visible}
      >
        {menu}
      </Drawer>
    </nav>
  );
}