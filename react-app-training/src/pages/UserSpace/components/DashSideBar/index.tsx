import { Layout } from "antd";

export default function DashSideBar({ menu }: { menu: JSX.Element }) {
    return (
        <Layout.Sider
            className="sidebar"
            breakpoint={"lg"}
            theme="light"
            collapsedWidth={0}
            trigger={null}
        >
            {menu}
        </Layout.Sider>
    );
}