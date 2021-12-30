import React,{useState} from "react"
import './Main.css'
import Header from './Header'
import Body from './Body'
import Bottom from './Bottom'

const Main = () =>{

    return(
        <div className={'Main-container'}>
            <div className={'Main-header'}><Header /></div>
            <div className={'Main-body'}><Body /></div>
            <div className={'Main-bottom'}><Bottom /></div>
        </div>
    )
}

export default Main