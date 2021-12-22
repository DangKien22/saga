import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../Redux/Action";
import { Button, Input} from 'antd';

const TodoInput = () => {
    const [name, setName] = useState('');
     const dispatch = useDispatch();
     const handleAddTodo = () => {
         dispatch(addTodos({
             id: Math.random(),
             name,
         }));
         setName("");
     };
    return(
        <>
           <div className="row m-2">
               <Input type="text" onChange={(e)=> setName(e.target.value)} value={name} className="col-8"/>
               <Button type="primary" className="ml-3" onClick={handleAddTodo} size="medium"  style={{width: "135px"}}>Add</Button>
           </div>
        </>
    );
};

export default TodoInput;