import { useRef } from 'react';
import classes from './TodoInput.module.css'
import Card from '../UI/Card';

const TodoInput = (props) => {
    const todoInputRef = useRef();

    const addTodo = (event) => {
        event.preventDefault();
        const enteredTodo = todoInputRef.current.value;
        // console.log(enteredTodo);
        props.onAddTodo(enteredTodo);
    }

    return (
        <section className={classes.inputs}>
            <Card >
                <form onSubmit={addTodo}>
                    <div>
                        <label htmlFor="todo" >Todo List</label>
                    </div>
                    <div>
                        <input type="text" name="todo" id="todo" placeholder='Type a ToDo' ref={todoInputRef} />
                        <button type="submit" >Add todo</button>
                    </div>
                </form>
            </Card>
        </section>
    )
}


export default TodoInput;

// style={{height: "3rem", display:"inline-block" }}