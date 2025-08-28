import '../../styles/mystory.scss';

export default function MyStory({artData}) {
    
    let pointsArray = [];
    if(artData != '') {
        pointsArray = JSON.parse(artData)
    }
    console.log(pointsArray)
    
    return <>
    <div className="myStory">
        <svg viewBox='0 0 1000 1000' className='artSvg'>
            {pointsArray.map((point, index) => (
                <rect key={index} x={point.x} y={point.y} width="10" height="10" />
            ))}
        </svg>
        <span className='myQuote'>
            "The aim of my life, which I have worked tirelessly for, is to improve myself and my skills in all endevours, 
            not as a means to make a profit, but as a pathway to making real changes to the lives of everyday people in my country Australia.
            The outcome of this pursuit will dictate whether my life was a success or a failure."
        </span>
    </div></>
}