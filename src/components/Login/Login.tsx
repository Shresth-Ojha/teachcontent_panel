import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import Input from './Input';
import './Login.css'


const Login = () => {
    const [email, set_email] = useState<string | null>('');
    const [password, set_password] = useState<string | null>('');
    return (
        <div className='container-lg'>
            <div className="card mx-auto border border-2 rounded-4 shadow-lg p-3 mb-5 bg-body" style={{}}>
                <Link to='/teachcontent_panel' className='navbar-brand'>
                    <img src={logo} alt='' className='loginlogo mt-4' />
                </Link>
                <div className="card-body">

                    {/* <div className=' login-form w-100 purple-drop-shadow bg-white pb-5'> */}
                        {/* <div className='mt-0 pt-4 d-flex w-100 flex-column align-items-center'> */}
                            <div className='mt-4 mb-5 px-0 mx-0 d-flex flex-column w-100'>
                                <div className=''>
                                    <Input
                                        onChange={(e: any) => {
                                            set_email(e.target.value);
                                        }}
                                        onKeyUp={(e: any) => {
                                            set_email(e.target.value);
                                            console.log(email, password);
                                        }}
                                        placeholder='Enter your email id'
                                        icon={<i className='fa fa-solid fa-user'></i>}
                                        type='text'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <Input
                                        onChange={(e: any) => {
                                            set_password(e.target.value);
                                        }}
                                        onKeyUp={(e: any) => {
                                            set_password(e.target.value);
                                            console.log(email, password);
                                        }}
                                        type='password'
                                        placeholder='Enter your password'
                                        icon={<i className='fa fa-solid fa-key'></i>}
                                    />
                                </div>
                            </div>
                        {/* </div> */}
                    {/* </div> */}

                    {/* <h5 className="display-3 card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

export default Login