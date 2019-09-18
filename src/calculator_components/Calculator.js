import React from 'react'
import CalculatorScreen from './CalculatorScreen'
import CalculatorKeyList from './CalculatorKeyList'
import {evaluate,format} from 'mathjs'

class Calculator extends React.Component
{
    constructor()
    {
        super()
        this.firstValue=null
        this.secondValue=null
        this.firstEntered=false
        this.action=null
        this.state={
            result: "0"
        }
        this.ResetCalculator=this.ResetCalculator.bind(this)
        this.ShowValue=this.ShowValue.bind(this)
        this.ValueClicked=this.ValueClicked.bind(this)
        this.OperatorClicked=this.OperatorClicked.bind(this)
        this.EqualClicked=this.EqualClicked.bind(this)
    }
    ResetCalculator()
    {
        this.firstValue=null
        this.secondValue=null
        this.firstEntered=false
        this.action=null
        this.setState(()=>{
            return({
                result: "0"
            })
        })
    }
    ShowValue(value)
    {
        this.setState(()=>{
            return({
                result: value
            })
        })
    }
    EqualClicked()
    {
        if(this.firstValue!==null && this.secondValue!==null && this.action!=null)
        {
            this.firstValue=format(evaluate(this.firstValue+this.action+this.secondValue), {precision: 4}).toString()
            this.action=null
            this.secondValue=null
            this.ShowValue(this.firstValue)
        }
    }
    OperatorClicked(value)
    {
        if(this.firstValue!==null && this.secondValue===null)
        {
            this.action=value
            if(this.firstEntered===false)
            {
                this.firstEntered=true
                this.ShowValue("")
            }
        }
        else if(this.firstValue!==null && this.secondValue!==null)
        {
            this.firstValue=format(evaluate(this.firstValue+this.action+this.secondValue), {precision: 4}).toString()
            this.action=value
            this.secondValue=null
            this.ShowValue(this.firstValue)
        }
        console.log(this.firstValue,this.action,this.secondValue)
    }
    ValueClicked(value)
    {
        //console.log(format(evaluate("0.1+0.2"), {precision: 4}).toString()) 
        if(this.action===null)
        {
            if(this.firstEntered===true)
            {
                this.firstEntered=false
                this.firstValue=null
            }
            if(this.firstValue===null || this.firstValue==="0")
            {
                this.firstValue=value
            }
            else
            {
                this.firstValue+=value
            }
            this.ShowValue(this.firstValue)
        }
        else
        {
            if(this.secondValue===null || this.secondValue==="0")
            {
                this.secondValue=value
            }
            else
            {
                this.secondValue+=value
            }
            this.ShowValue(this.secondValue)
        }
        console.log(this.firstValue,this.action,this.secondValue)
    }
    render()
    {
        return(
            <div className="calculator">
                <CalculatorScreen value={this.state.result}/>
                <CalculatorKeyList reset={this.ResetCalculator} showValue={this.ShowValue} valueClicked={this.ValueClicked} operatorClicked={this.OperatorClicked} equalClicked={this.EqualClicked}/>
            </div>
        )
    }
}

export default Calculator