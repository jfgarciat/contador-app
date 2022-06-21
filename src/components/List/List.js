import TodoItem from './TodoItem.js/TodoItem'
import classes from './List.module.css'



const List = (props) => {
    
    const todoList = props.items.map((user) => (
        <TodoItem
        key={user.id}
        id={user.id}
        name={user.text}
        />
        ));
        
        return (
            <section className={classes.todos}>
            {todoList}
        </section>
    )
}







// const DUMMY_TODOS = [
//     {
//         id: 't1',
//         name: 'Test the coffee machine',
//     },
//     {
//         id: 't2',
//         name: 'Print the CV',
//     },
//     {
//         id: 't3',
//         name: 'Fix the printer',
//     },
//     {
//         id: 't4',
//         name: 'Drink water',
//     }
// ]

// const List = (props) => {

//     return (
//         <TodoItem className={classes.todos}>
//             {props.todo.map((user) => (
//                 <section key={user.id} id={user.id}>
//                     {user.name}
//                 </section>
//             ))}
//         </TodoItem>
//     )
// };

export default List;