function Greeting(props:any){
    return(
        <div>
            {props.isLoggedIn?(props.isAuthorized?<h1>You are Authorized!</h1>:<h1>You are not Authorized!</h1>
        ):(
        <h1>Plese login.</h1>
        )}
        </div>
    );
}
export default Greeting;