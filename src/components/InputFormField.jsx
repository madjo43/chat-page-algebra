import "../styles/InputFormField.css";
import { FormField } from "./FormField";

export function InputFormField (props){
    function handleChange (event) {
        props.onChange(event.target.value);
    }

    return (
    <FormField className="username-field">
        <label>{props.label}</label>
        <input type={props.type} onChange={handleChange} value={props.value} />
    </FormField>
    );
};