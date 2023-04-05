import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import { useState } from "react";


export function MessageForm(props) {
    
    const  [formState, setFormState] = useState('');

    function getTime(){
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            return `${hours}h:${minutes}m:${seconds}s`;
    }

    function handleChange(message) {
        setFormState(message);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormState('');
        props.onSubmit({
                id: Date.now(),
                author: {
                    username: props.username,
                    avatarIndex: props.avatarIndex,
                    id: Date.now(),
                },
                text: formState,
                time: getTime(),
        });
    }

    return (
        <form className="sendFormField" onSubmit={handleSubmit}>
            <InputFormField label="Message" type="text" value={formState} onChange={handleChange} />
            <SubmitFormField label="Send" />
        </form>
    );
}