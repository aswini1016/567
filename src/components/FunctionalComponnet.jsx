import React from 'react'
import "./Styles.css"

function FunctionalComponent(props){
    console.log(props)
    let appStyle = props.apply ? 'heading':''
    let inlineStyle ={
        color:'green',
        backgroundcolor:'red',
        fontSize:'50px'
    }
    return (
        <div>
            <h1 class={'${applyStyle} font-stule'}>Welcome to my React class {props.clgName},{props.clgCity}</h1>
                {props.children}
                <h2 style ={inlinestyle}>Good afternoon</h2>
            
        </div>
    )
}