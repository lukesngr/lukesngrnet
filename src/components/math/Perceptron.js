function Perceptron(props) {
    let classes = "rounded-circle border border-dark text-center p-1";
    if(props.margin !== undefined) {
        classes += " mt-"+props.margin;
    }
    return (
        <div className={classes}>
            <h3>{props.input}</h3>
        </div>
    )
    
}

export default Perceptron;