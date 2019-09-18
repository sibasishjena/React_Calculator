import React from 'react'

class CalculatorScreen extends React.Component
{
    ShowValue()
    {
        this.screen=<input className="calculator-screen" type="text" value={this.props.value} disabled={true}/>
    }
    render()
    {
        this.ShowValue()
        return(
            <div>
                {this.screen}
            </div>
        )
    }
}

export default CalculatorScreen