import returnValueOfPerceptron from "../math/returnValueOfPerceptron";
import Perceptron from "../math/Perceptron"

function NNGraph(props) {

    var hiddenParameter = props.x*props.w1+"+"+props.b1;
    var hiddenResult = returnValueOfPerceptron(props.x*props.w1, props.b1);
    var outputParameter = (props.w2*hiddenResult).toFixed(2)+"+"+props.b2;
    var outputResult = returnValueOfPerceptron(hiddenResult*props.w2, props.b2).toFixed(2);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2" style={{paddingRight: 0}}>
                    <h1>Input Layer</h1>
                    <Perceptron margin={5} input={props.x}></Perceptron>
                </div>
                <div className="col-md-2" style={{paddingLeft: 0, paddingRight: 0}}>
                    <div style={{marginTop: "40%"}} className="text-left">
                        <p>w1*x = {props.w1}*{props.x}</p>
                        <hr></hr>
                    </div> 
                </div>
                <div className="col-md-2" style={{paddingLeft: 0, paddingRight: 0}}>
                    <h1>Hidden Layer</h1>
                    <Perceptron input={"S("+hiddenParameter+") ="+hiddenResult.toFixed(2)} />
                </div>
                <div className="col-md-2"  style={{paddingLeft: 0, paddingRight: 0}}>
                    <div style={{marginTop: "40%"}} className="text-left">
                        <p>w2*input = {props.w2}*{hiddenResult.toFixed(2)}</p>
                        <hr></hr>
                    </div> 
                </div>
                <div className="col-md-2"  style={{paddingLeft: 0, paddingRight: 0}}>
                    <h1>Output Layer</h1>
                    <Perceptron input={"S("+outputParameter+") ="+outputResult} />
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default NNGraph;