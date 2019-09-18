import React from 'react'
import calculatorKeysData from './calculatorKeysData'
import CalculatorKey from './CalculatorKey'

class CalculatorKeyList extends React.Component
{
    constructor()
    {
        super()
        this.reset=null
        this.showValue=null
        this.HandleClick=this.HandleClick.bind(this)
    }
    HandleClick(clickedElement)
    {
        //console.log(clickedElement.target.tagName);
        //console.log(this.props)
        if(clickedElement.target.tagName==="BUTTON")
        {
            let value=clickedElement.target.value;
            //this.props.showValue(clickedElement.target.value)
            if(value==="clear")
            {
                this.props.reset()
            }
            else if(value==="=")
            {
                this.props.equalClicked()
            }
            else if(value==="+" || value==="-" || value==="*" || value==="/")
            {
                this.props.operatorClicked(value)
            }
            else
            {
                this.props.valueClicked(value)
            }
        }
    }

    render()
    {
        let classValue
        this.reset=this.props.reset
        this.showValue=this.props.showValue
        //console.log(this)
        this.CalculatorKeyItem=calculatorKeysData.map((keyData)=>{
        if(keyData.value==="*" || keyData.value==="/" || keyData.value==="+" || keyData.value==="-")
        {
            classValue="operator"
        }
        else if(keyData.value===".")
        {
            classValue="decimal"
        }
        else if(keyData.value==="clear")
        {
            classValue="clear"
        }
        else if(keyData.value==="=")
        {
            classValue="result"
        }
        else
        {
            classValue=null
        }
        return(
            <CalculatorKey key={keyData.id} classValue={classValue} keyValue={keyData.value} keyText={keyData.text}/>
        )
        })
        return(
            <div className="calculator-keys" id="calculator-keys" onClick={this.HandleClick}>
                {this.CalculatorKeyItem}
            </div>
        )
    }
}

export default CalculatorKeyList