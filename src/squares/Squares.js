export default function Squares(props) {


    const toggleStyles = {
        backgroundColor: props.on ? "red" : "green"
    }


    return (
        <div style={toggleStyles} className="square"
         onClick={ () => props.toggle(props.id)}>
            {props.id}
        </div>
    )
}