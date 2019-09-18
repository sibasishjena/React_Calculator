import React from 'react'

class ToDoItem extends React.Component
{
    constructor()
    {
        super()
        this.styles=null
    }
    CheckStyles()
    {
        if(this.props.todoData.completed)
        {
            this.styles={
                textDecoration: "line-through",
                color: "#8a919c"
            }
        }
        else
        {
            this.styles={
                textDecoration: "none"
            }
        }
    }
    render()
    {
        // console.log(this.props);
        this.CheckStyles()
        return(
            <div className="todo-item">
                <input type="checkbox" checked={this.props.todoData.completed} onChange={()=>{this.props.changed(this.props.todoData.id)}}/>
                <p style={this.styles}>{this.props.todoData.text}</p>
            </div>
            
        )
    }
}
export default ToDoItem