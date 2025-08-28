import { useState } from 'react';
import NNGraph from './NNGraph';

function NNVisualizer() {
    const [x, setX] = useState(1);
    const [weightOne, setWeightOne] = useState(1);
    const [biasOne, setBiasOne] = useState(1);
    const [weightTwo, setWeightTwo] = useState(1);
    const [biasTwo, setBiasTwo] = useState(1);
    return (<>
        <NNGraph x={x} w1={weightOne} b1={biasOne} w2={weightTwo} b2={biasTwo}></NNGraph>
        <div class="container">
            <div class="row">
                <div className='col-md-12 mt-5'>
                    x: <input type="text" value={x} onChange={(event) => setX(event.target.value)}></input>,
                    w1: <input type="text" value={weightOne} onChange={(event) => setWeightOne(event.target.value)}></input>,
                    b1: <input type="text" value={biasOne} onChange={(event) => setBiasOne(event.target.value)}></input>,
                    w2: <input type="text" value={weightTwo} onChange={(event) => setWeightTwo(event.target.value)}></input>,
                    b2: <input type="text" value={biasTwo} onChange={(event) => setBiasTwo(event.target.value)}></input>
                </div>
            </div>
        </div>
        </>
    )
}

export default NNVisualizer;