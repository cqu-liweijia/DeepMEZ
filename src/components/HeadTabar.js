import React from "react"
import "./headTabar.css"
import {Button, Form} from "antd"
import {Link} from "react-router-dom";


const HeadTabar = () =>{
    return(
            <div className="head-tabar">
                <Link to="/home" className="to-home"> <span > DeepMEZ</span></Link>
                <Button type="primary"
                        htmlType="submit"
                        className="home-login"
                >
                    <Link to="/login" > Log in</Link>
                </Button>
                <Button type="primary" htmlType="submit" className="home-login">
                    <Link to="/register">Register</Link>
                </Button>
            </div>

    )
}

export default HeadTabar