export interface IProps {
    title: string;
    url: string;
    des: string;
    img: string;
    tools: string[];
}

export interface IContact {
    name: string;
    url: string;
    icon: string;
}

export interface IInfo {
    title: string;
    des: string;
    btn: boolean;
    ancla: string;
    contact?: IContact[];
}