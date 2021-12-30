import React,{useState, useRef} from "react"
import './Header.css'

import logo from '../img/logo.png'
import mainPage from '../img/page1.png'

import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';

const Header = () =>{
    const [enquire,setenquire] = useState(false)

    const [courses,setcourses] = useState(false)

    return(
        <div className={'Header-container'}>
            <div className="Header-wrapper">
                <div className="Header-contact">
                    <div className="Header-contact-icon"><DraftsOutlinedIcon /></div>
                    {'CONTACT'}
                </div>
                <div className="Header-login">
                    {'STUDENT LOGIN'}
                    <div className="Header-login-icon"><PersonOutlineRoundedIcon /></div>
                </div>
            </div>
            <div className="Header-menu">
                <img className="Header-logo" src={logo}></img>

                <div className={enquire?'Header-onEnquire':'Header-enquire'}
                    onMouseMove={()=>setenquire(true)}
                    onMouseLeave={()=>setenquire(false)}
                >{'Enquire'}</div>
                <div className="Header-apply">{'Apply'}</div>
            </div>

            <div className="Header-menuSelect">
                <div className="Header-courses-option"
                    onMouseMove={()=>setcourses(true)}
                ><MouseListen menu={'Our Courses'} /></div>

                <div className={courses?'display-container':'nondisplay-container'}
                    onMouseLeave={()=>setcourses(false)}
                >
                    <div className={courses?'Header-onCourses':'Header-courses'}>
                        <div>123</div>
                    </div>
                </div>
            </div>
            <img className="Header-mainPage" src={mainPage}></img>
        </div>
    )
}

export default Header

const MouseListen = ({menu}) =>{
    const [text,settext] = useState(false)

    return(
        <div className={text?'onText':'text'}
            onMouseMove={()=>settext(true)}
            onMouseLeave={()=>settext(false)} 
        >{menu}</div>
    )
}