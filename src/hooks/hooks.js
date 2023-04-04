import {useState} from "react";

export default function UserFormInput(initialsValue){


    const [value, setValue] = useState("");


    const handlChange=(e)=>{

           setValue(()=> e.target.value);
    }

    return {

        value,
        onChange: handlChange
    }
}