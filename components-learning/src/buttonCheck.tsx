function ButtonCheckComponent(){
    const handleClick=()=>{
        const result = window.confirm('Are you sure you want to continue?');
        if (result) {
            alert('You chose YES ✅');
       } else {
           alert('You chose NO ❌');
       }  
    };

    return(
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}
export default ButtonCheckComponent;