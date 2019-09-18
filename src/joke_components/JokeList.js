import React from 'react'
import Joke from './Joke'
import jokesData from './jokesData'

class JokeList extends React.Component
{
    jokeFiltered=jokesData.filter((joke)=>
    {
        return joke.question!=null
    })
    jokeComponents=jokesData.map((joke) =>
    {
        return(
            <Joke key={joke.id} jokeObj={{number:joke.id, question: joke.question, punchLine: joke.punchLine}}/>
        )
    })
    render()
    {
        return(
            <div>
                {this.jokeComponents}
            </div>
        )
    } 
}

export default JokeList