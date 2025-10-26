import React, {Component} from'react';
interface CounterProps{

}
interface CounterState{
    count:number;
}
class ClassCounter extends Component <CounterProps,CounterState>{
    constructor(props:CounterProps){
        super(props);
        this.state={
            count:0,
        };
    }
    

    increment =()=>{
        this.setState({count:this.state.count+1});
    };
    decrement =()=>{
        this.setState({count:this.state.count-1});
    };

    render(){
        return(
            <div style={{textAlign:'center',marginTop:'50px'}}>
                <h2>Counter:{this.state.count}</h2>
                <button onClick={this.decrement} style={{marginRight:'10px'}}></button>  
                <button onClick={this.increment}>+</button>       
             </div>
        );
    }
}

export default ClassCounter;