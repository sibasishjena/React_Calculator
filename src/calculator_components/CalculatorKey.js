import React from 'react'

class CalculatorKey extends React.Component
{
    render(){
        return(
            <button className={this.props.classValue} value={this.props.keyValue}>{this.props.keyText}</button>
        )
    }

}

export default CalculatorKey