import React, { useEffect, useState } from "react";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { Button } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import "./admin.scss"
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
const Admin = () => {
    const usenavigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
   
    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
            usenavigate("/login")
        }
    }, [usenavigate]);
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then((res) => {
                setDataSource(res);
                setLoading(false);
            });
    }, []);
    return (
        <>

            <div className="logout">
                <Link to={"/login"}>
                    <button type="button" class="btn btn-dark">Logout</button>
                </Link>
            </div>
            <div className="inventory">
                <Space size={20} direction="vertical">
                    <Typography.Title level={4}>Inventory</Typography.Title>
                    <div className="button-modal">
                        <Link to="/addcrud">
                            <Button type="primary" >
                                + Add product
                            </Button>
                        </Link>
                    </div>
                    <Table
                        loading={loading}
                        columns={[
                            {
                                title: "Thumbnail",
                                dataIndex: "thumbnail",
                                render: (link) => {
                                    return <Avatar src={link} />;
                                },
                            },
                            {
                                title: "Title",
                                dataIndex: "title",
                            },
                            {
                                title: "Price",
                                dataIndex: "price",
                                render: (value) => <span>${value}</span>,
                            },
                            {
                                title: "Rating",
                                dataIndex: "rating",
                                render: (rating) => {
                                    return <Rate value={rating} allowHalf disabled />;
                                },
                            },
                            {
                                title: "Stock",
                                dataIndex: "stock",
                            },

                            {
                                title: "Brand",
                                dataIndex: "brand",
                            },
                            {
                                title: "Category",
                                dataIndex: "category",
                            },
                            {
                                title: "CRUD",
                                render: () => {
                                    return (
                                        <>
                                            <AiFillDelete />
                                            <BiEdit />
                                        </>
                                    )
                                }

                            },
                        ]}
                        dataSource={dataSource}
                        pagination={{
                            pageSize: 5,
                        }}
                    ></Table>
                </Space>
            </div>
        </>
    )
}
export default Admin;