import { TablePaginationConfig } from "antd";
import { ColumnsType, FilterValue } from "antd/es/table/interface";

export interface MenuParams {
    title: string;
    link: string;
}

export interface DashMenu {
    menuItems: MenuParams[];
    selectedKey: string;
    changeSelectedKey: any;
}

/******* List params *****/

export interface DataType {
    name: {
        first: string;
        last: string;
    };
    gender: string;
    email: string;
    login: {
        uuid: string;
    };
}

export interface TableParams {
    pagination?: TablePaginationConfig;
    sortField?: string;
    sortOrder?: string;
    filters?: Record<string, FilterValue | null>;
}