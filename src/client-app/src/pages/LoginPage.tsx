import {Typography} from "antd"
import {CSSProperties} from "react"
import {ILoginPageProp} from "../props/ILoginPageProp"

const imageLink = `https://i.pinimg.com/originals/83/08/61/8308613bdbae5d2845f5085a1a7d62e1.jpg`

const styleMain : CSSProperties = {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${imageLink})`
}

export function LoginPage({ title } : ILoginPageProp) {
    return (
        <div style={styleMain}>
            <Typography.Title>
                {title}
            </Typography.Title>
        </div>
    );
}