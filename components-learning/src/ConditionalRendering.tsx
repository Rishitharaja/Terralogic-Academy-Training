import React from 'react'
type Iprops = {
    isLoggedIn:boolean;
    defaultProp?:boolean;
}
 const ConditionalRendering = (props:Iprops) => {
    const {isLoggedIn,defaultProp="No val from Parent"} = props;
    console.log("defaultProp",defaultProp);

    const checkIfUserHasAccount = (hasAccount:boolean)=>{
        if(hasAccount)
            return<h1>User Can Login</h1>;
            return<h1>User Need To Register</h1>;
    }
  return (
    <div>
        {isLoggedIn ? <h1>Yes,Login</h1> : checkIfUserHasAccount(true)}
        </div>
  );
};
export default ConditionalRendering;
