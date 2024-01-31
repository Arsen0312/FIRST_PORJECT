import React, {useContext} from 'react';
import Li from "../../components/li";
import Button from "../../components/button";
import {Context} from "../../server/Provider";

const Read = () => {
    const arr = [1,2,3,4,5]

    const { contact } = useContext(Context)

    console.log(contact)

    const log = (event: any) => {
        console.log(event.target.id)
    }

    return (
        <div>
            <ul>
                {arr.map((elem, id) => <Li content={elem} children={<Button onClick={log} content={"Изменить"} id={id}/>}></Li>)}
            </ul>
        </div>
    );
};

export default Read;