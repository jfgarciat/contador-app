import Card from "../../UI/Card";

const TodoItem =(props) => {

    return (
        <Card>
            {/* // <div> {props.children}</div> */}
            <div>{props.name}</div>
            {/* <div>Holaaaaaaa</div> */}
        </Card>
    )
}


export default TodoItem;

// style={{height: "3rem", display:"inline-block" }}