
function ChildComponent(props:any){
    return(
        <button onClick={props.onButtonClick}>
            Click me to AlertParent
        </button>
    );
}
export default ChildComponent;