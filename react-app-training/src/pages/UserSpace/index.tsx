import { useState } from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../../styles/UserSpace.css'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DownOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, Dropdown, Space, MenuProps, Flex } from 'antd';
import userProfile from '../../assets/img/user-profile.png';
import { useAuth } from "../../utils/custom-hooks/useAuth";
const { Header, Sider, Content } = Layout;

export default function UserSpace() {
    // const menuItems: MenuParams[] = [
    //     {
    //         title: "Dashboad",
    //         link: '/user'
    //     },
    //     {
    //         title: "List items",
    //         link: '/user/list'
    //     }
    // ];
    // const [selectedKey, setSelectedKey] = useState("0");
    // const changeSelectedKey = (event: any) => {
    //     const key = event.key;
    //     setSelectedKey(key);
    // };

    // const Menuxxx = (
    //     <DashMenu
    //         menuItems={menuItems}
    //         selectedKey={selectedKey}
    //         changeSelectedKey={changeSelectedKey}
    //     />
    // );

    const [collapsed, setCollapsed] = useState(false);
    const { setAuthentication } = useAuth();
    let navigate = useNavigate();

    const items: MenuProps['items'] = [
        {
            label: 'Logout',
            key: '0',
            onClick: () => {
                localStorage.removeItem("login");
                setAuthentication(false); // Update the authentication status
                navigate("/");
            }
        }
    ];

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
                <div className="demo-logo-vertical" />
                <div className="app-name"><Link to='/'>Training App</Link></div>
                <div className="user-section">
                    <img className={collapsed ? "collapse-user-avatar" : "user-avatar"} src={userProfile} alt="user profile img" />

                    <Dropdown menu={{ items }} trigger={['click']}>
                        <Flex gap="small" onClick={(e) => e.preventDefault()}>
                            <div className={collapsed ? 'collapse-user-infos' : "user-infos"}>
                                <span className="user-name">Foulen Ben Foulen</span>
                                <span className="user-role">User</span>
                            </div>
                            <DownOutlined className="user-icon" />
                        </Flex>
                    </Dropdown>

                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <Link to='/user'>Dashboad</Link>

                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: <Link to='/user/list'>List Items</Link>
                        }
                    ]}
                />
            </Sider>
            <Layout className="sidebar">
                <Header className="header-layout" >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content className="content">
                    <Outlet />  {/* //  for nested route content */}
                </Content>
            </Layout>
        </Layout>

        // <div className="App">
        //     {/* <DashNavbar menu={Menu} /> */}
        //     <Layout>
        //     <Header style={{ padding: 0, background: 'red' }}>
        //     <a className="navbar-brand" href="#root">
        //       <NavLink className="nav-link" to="/" >Training App</NavLink>
        //     </a>
        //     </Header>
        //         <DashSideBar menu={Menu} />
        //         <Layout.Content className="content">
        //             <Outlet />  {/* //  for nested route content */}
        //         </Layout.Content>
        //     </Layout>
        // </div>
    )
}