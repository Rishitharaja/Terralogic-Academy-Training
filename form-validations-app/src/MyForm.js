import MyInput from "./MyInput";

const MyForm =() => {
    const formConfig = {
        name:{
            label:"Your Name",
            type:"Text",
            validations:{required: true},
        },
        email:{
             label:"Your Email",
            type:"Email",
            validations:{required: true, isEmail:true},
        },
    };
    return(
        <form>
            {Object.keys(formConfig).map((key)=> (
                <MyInput
                key={key}
                label={formConfig[key].label}
                type={formConfig[key].type}
                />
            ))}
        </form>
    )
}
export default MyForm