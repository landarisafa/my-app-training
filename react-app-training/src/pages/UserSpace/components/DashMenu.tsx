import {Menu} from "antd";
import { DashMenu } from "../../../types/Dashboard";
import { NavLink } from "react-router-dom";

const TopicMenu = ({ menuItems, selectedKey, changeSelectedKey }:DashMenu) => {
  const styledTopics:any[] = [];
  menuItems.forEach((item, index) =>
    styledTopics.push(
      <Menu.Item key={index} onClick={changeSelectedKey}>
        <NavLink className="nav-link" to={item.link}>  {item.title} </NavLink>
      </Menu.Item>
    )
  );

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
}
export default TopicMenu;
