import Table, { TablePaginationConfig } from "antd/es/table";
import { DataType, TableParams } from "../../../../types/Dashboard";
import { useEffect, useState } from "react";
import qs from 'qs';
import { ColumnsType, FilterValue, SorterResult } from "antd/es/table/interface";
import SectionTitle from "../../components/SectionTitle";
import { Drawer, Space } from "antd";
import FormItem from "../FormItem";

export default function ListItems() {
    const [data, setData] = useState<DataType[]>();
    const [loading, setLoading] = useState(false);
    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState<DataType | null>(null);
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: true,
            render: (name) => `${name.first} ${name.last}`,
            width: '20%',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            filters: [
                { text: 'Male', value: 'male' },
                { text: 'Female', value: 'female' },
            ],
            width: '20%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (data) =>
                <Space size="middle">
                    <a onClick={() => showDrawer(data)}>Edit</a>
                    <a>Delete</a>
                </Space>,
        },
    ];

    const getRandomuserParams = (params: TableParams) => ({
        results: params.pagination?.pageSize,
        page: params.pagination?.current,
        ...params,
    });

    const fetchData = () => {
        setLoading(true);
        fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
            .then((res) => res.json())
            .then(({ results }) => {
                setData(results);
                setLoading(false);
                setTableParams({
                    ...tableParams,
                    pagination: {
                        ...tableParams.pagination,
                        total: 200,
                        // 200 is mock data, you should read it from server
                        // total: data.totalCount,
                    },
                });
            });
    };

    useEffect(() => {
        fetchData();
    }, [JSON.stringify(tableParams)]);

    const handleTableChange = (
        pagination: TablePaginationConfig,
        filters: Record<string, FilterValue | null>,
        sorter: SorterResult<DataType> | SorterResult<DataType>[]
    ) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }
    };

    // In ListItems component
    const showDrawer = (rowData?: DataType) => {
        if (rowData) {
            setSelectedRowData(rowData);
        }
        setDrawerVisible(true);
    };

    const closeDrawer = (drawerData?: DataType) => {
        if (data && drawerData && drawerData?.login) {
            let dataItemIdx: number = data?.findIndex((item: DataType) => item.login.uuid === drawerData?.login.uuid);
            if (dataItemIdx !== -1) {
                data[dataItemIdx] = {...data[dataItemIdx],...drawerData};
                setData(data);
            };
        }
        setSelectedRowData(null); // Clear the selected data
        setDrawerVisible(false);
    };

    return (
        <>
            <SectionTitle title="List Items" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." showDrawer={showDrawer} />

            <Table
                columns={columns}
                rowKey={(record) => record.login.uuid}
                dataSource={data}
                pagination={tableParams.pagination}
                loading={loading}
                onChange={handleTableChange}
            />

            <Drawer
                placement="right"
                closable={false}
                open={isDrawerVisible}
                width={400} // Set the width as needed
            >
                {/* Content for your drawer */}
                <FormItem rowData={selectedRowData} onClose={closeDrawer} />
                {/* <p>Drawer content goes here. {selectedRowData?.email}</p> */}
                {/* <p>{JSON.stringify(selectedRowData, null, 2)}</p> */}
            </Drawer>

            {/* <p>{JSON.stringify(selectedRowData, null, 2)}</p> */}

        </>
    );
}