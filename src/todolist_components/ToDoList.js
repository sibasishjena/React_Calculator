import React from 'react'
import ToDoItem from './ToDoItem'
import todosData from './todosData'

class ToDoList extends React.Component
{
    constructor()
    {
        super()
        this.state={
            todos: todosData
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(id)
    {
        this.setState((prevState)=>{
            return({
                todos: prevState.todos.map(
                    (todoItem)=>{
                        if(todoItem.id===id)
                        {
                            todoItem.completed=!todoItem.completed
                        }
                        return todoItem
                    }
                )
            })
        })
    }

    render()
    {
        this.todoItemComponents=this.state.todos.map((todoItem, index) => 
        {
            return(
                <ToDoItem key={todoItem.id} todoData={todoItem} changed={this.handleChange} />
            )
        })
        return (
            <div className="todo-list">
                {this.todoItemComponents}
            </div>
        )
    } 
}

export default ToDoList