import React from "react";
import { Button,Input } from "antd";
import {SearchOutlined} from '@ant-design/icons';
const ButtonInputSearch = (props) => {
    const {size,placeholder,textButton}=props
    return (
        <div style={{ display: 'flex' }}>
            <Input size={size} placeholder={placeholder} bordered={false} style={{backgroundColor: '#fff'}}/>
            <Button size={size} bordered={false} icon={<SearchOutlined />} >{textButton}</Button>
        </div>
    )
}
export default ButtonInputSearch;