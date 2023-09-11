import {IErrorPageProp} from "../props/IErrorPageProp";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";
import {FrownOutlined} from "@ant-design/icons";

export default function ErrorPage({ statusCode, subTitle, message } : IErrorPageProp) {
    const defaultValues : IErrorPageProp = {
        statusCode: 404,
        subTitle: 'Not found 🤔',
        message: 'The page you are looking for does not exist'
    }

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column-reverse',
                justifyContent: 'space-between'
            }}
        >
            <Result
                icon={<FrownOutlined />}
                status={statusCode   ?? defaultValues.statusCode}
                title={`${subTitle   ?? defaultValues.subTitle}`}
                subTitle={`${message ?? defaultValues.message}`}
                extra={
                <Link to={`/`}>
                    <Button type="primary">
                        Back to main
                    </Button>
                </Link>
                }
                style={{
                    flex: 'auto'
                }}
            />
        </div>
    );
}