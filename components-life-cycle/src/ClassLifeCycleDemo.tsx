import React, { Component } from 'react'
type Istate={
count: number;
};
type Iprops ={};''
class LifeCycleDemo extends Component <Iprops,Istate> {
    constructor(props: Iprops){
        super(props);
        this.state = { count:0};
        console.log("constructor: component is being created");
    }
    static getDerivedStateFromProps(props: any, state: any) {
        console.log("getDerivedStateFromProps: Sync state with props if needed");
        return null;//no cahnge to state
    }
    componentDidMount() {
        console.log("componetDidMount: Component Mounted to DOM");
    }

    shouldComponentUpdate(nextProps: any, nextState: any, ) {
        console.log("shouldComponentUpdate: ","Yes");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
        console.log("shouldSnapshotBeforeUpdate: Just Before DOM is Updated");
        return null;
    }
    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        console.log("componentDidUpdate: component updated");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount: component is removed");
    }

    increment = () =>{
        this.setState({count: this.state.count + 1});
    };
    render(){
        console.log('Render:Renedering the component ');
      return (
    <div>
       <h1>Lifecycle Demo Component</h1>
       <p> count: {this.state.count}</p>
       <button onClick={this.increment}>Increment</button>
    </div>
   );
 }
}

export default LifeCycleDemo;
