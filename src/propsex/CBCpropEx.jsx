// !props
import React, { Component } from 'react'
import CBCPropEx from './propsex/CBCPropEx'

export default class App extends Component {
render() {
return (
<div>
<CBCPropEx
username="Vamshi"
age={20}
hobbies={["Playing" , "reading books" , "stock"]}
address={{city:"sircilla", area:"Gandinagar"}}
sendFun={function(){alert("hi i am vamshi") }}
/>
</div>
)
}

} 