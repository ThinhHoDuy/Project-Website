import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import "./login.scss"
import Footer from "../component/footer/footer"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usenavigae = useNavigate();
    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
                .then(res => res.json())

                .then(response => {
                    console.log(response);
                    if (Object.keys(response).lenght === 0) {
                        toast.error("Please Enter Valid Username");
                    } else {
                        if (response.token) {
                            toast.success("Success");
                            sessionStorage.setItem("username", username);
                            usenavigae("/admin")
                        } else {
                            toast.error("Please Enter Valid Credentialts")
                        }
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    const validate = () => {
        let result = true;
        if (username === "" || username === null) {
            result = false
            toast.warning("Please Enter Username");
        }
        if (password === "" || password === null) {
            result = false
            toast.warning("Please Enter Password")
        }
        return result;
    }

    return (
        <>
            <form onSubmit={ProceedLogin}>
                <div className='login'>
                    <div className="login-container">
                        <h2>Login</h2>
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Tên đăng nhập"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type='submit' className="login-button">SIGN IN</button>
                    </div>
                </div>
            </form>
            <div>
                <Footer />
            </div>
        </>

    );
}
export default Login;