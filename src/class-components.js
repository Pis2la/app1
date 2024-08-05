import React from "react";
export default class Calendar extends React.Component{
    getDate(){
        const dayNames=['Sunday','Monday','Tuesday','Wednesday','Friday',
            'Saturday']
        const monthNames=['January','Fedruary','March','April','May','June','Jury'
            ,'August','September','October','November','December']
        const date =new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month =monthNames[date.getMonth()]
        const year = date.getFullYear()
        return`วัน${weekDay}ที่ ${day} ${month} ${year}`
    }
    render(){
        return<div>{this.getDate()}</div>
    }
}