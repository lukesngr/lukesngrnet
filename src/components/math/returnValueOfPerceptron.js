/*function does not perform weighted multiplication because despite only having one neuron in this vizualizer 
I do not want to give off the impression that the bias is applied to every weighted input but rather to the sum of the weighted inputs*/
function returnValueOfPerceptron(sumOfWeightedValues, bias) {
    let sum = parseFloat(sumOfWeightedValues)+parseFloat(bias);
    let denominator = 1+Math.pow(Math.E, -sum);
    return 1/denominator;
}

module.exports = returnValueOfPerceptron;