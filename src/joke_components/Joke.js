import React from 'react'

class Joke extends React.Component
{
    checkJoke()
    {
        if (this.props.jokeObj.question==null)
        {
            this.jokeBlock=<div>
                <p style={{color:"red"}}>Punch Line: {this.props.jokeObj.punchLine}</p>
                </div>
        }
        else
        {
            this.jokeBlock=<div>
                <p>Question: {this.props.jokeObj.question}</p>
                <p>Punch Line: {this.props.jokeObj.punchLine}</p>
            </div>
        }
    }
    render()
    {
        this.checkJoke()
        return(
            <div>
                <p>Joke: {this.props.jokeObj.number}</p>
                {this.jokeBlock}
                <hr/>
            </div>
        )
    }
    
}

export default Joke