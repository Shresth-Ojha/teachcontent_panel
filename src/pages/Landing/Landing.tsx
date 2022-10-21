import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../../components/Login/Login'
import Uploading from '../Uploading/Uploading'
import logo from '../../assets/logo.svg'

const Landing = ({user}:any) => {
    return (
        <div className='container d-flex align-items-center justify-content-center' style={{height: "100vh"}}>
            {!user?
				<Login/> : <Uploading />
            }       
        </div>
    )
}

export default Landing