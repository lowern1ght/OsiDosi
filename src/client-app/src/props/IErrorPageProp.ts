import {ResultStatusType} from "antd/es/result";

export interface IErrorPageProp {
    readonly statusCode?: ResultStatusType,
    subTitle?: string,
    message?: string
}