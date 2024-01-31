import React, {useCallback, useState} from 'react';
import Input from "../../components/input";
import Button from "../../components/button";

const Create = () => {
    const [text, setText] = useState("")

    const toggle = (event : any) => {
        setText(event.target.value)
    }
    const log = (event : any) => {
        event.preventDefault()
        console.log(text)
        clear()
    }

    const clear = useCallback(() => {
        setText('')
    },[])

    return (
        <div>
            <form>
                <Input onChange={toggle} value={text}/>
                <Button onClick={log} content={"save"}/>
            </form>
        </div>
    );
};

export default Create;