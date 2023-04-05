import { FormField } from "./FormField";
import { useEffect, useState } from "react";
import { avatarImages } from "../library/avatar"
import { Avatar } from "./Avatar";


export function AvatarFormField (props) {
    const [index, setIndex] = useState(0);

    useEffect(() =>{
    props.onChange(index);
    },[index, props]);

    function handleNextClick () {
        if(index >= avatarImages.length -1) {
            setIndex(0);
        } else {
        setIndex(index + 1);
        }
    }

    function handlePreviusClick () {
        if(index <= 0) {
            setIndex(avatarImages.length -1);
            
        } else {
        setIndex(index - 1);
        }
    }
    return(
        <FormField>
        <button type="button" onClick={handlePreviusClick}>Previus</button>
        <Avatar avatarIndex={index} index={index}/>
        <button type="button" onClick={handleNextClick}>Next</button>
    </FormField>
    
    )
}