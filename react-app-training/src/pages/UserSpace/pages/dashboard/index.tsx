import { Breadcrumb, Card, Col, Row, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { HomeOutlined } from '@ant-design/icons';

export default function Dashboard() {
    return (
        <>
            <Breadcrumb style={{marginBottom: "1rem"}}
                items={[
                    {
                        href: '/user',
                        title: <HomeOutlined />,
                    },
                    {
                        title: 'Dashboard',
                    },
                ]}
            />

            <Row gutter={16}>
                <Col span={12}>
                    <Card bordered={false}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card bordered={false}>
                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
        </>
    )
}