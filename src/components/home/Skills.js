import '../../styles/skills.scss';

function Skills() {
    return (
        <div className="skillsSplit container">
            <div className="row skillsHeader">
                <div className="col-md">
                    <h1>Skills and education</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md workSkills">
                    Skills Acquired During Employment at HOYTS
                    <ul>
                        <li>Teamwork</li>
                        <li>Powershell</li>
                        <li>Office 365</li>
                        <li>POS and Kiosks</li>
                        <li>Gathering technical requirements from non-technical colleagues</li>
                        <li>How a company works in an office setting</li>
                    </ul>
                </div>
                <div className="col-md uniSkills">
                    Skills Developed During My 3-Year Computer Science Degree:
                    <ul>
                        <li>Java</li>
                        <li>C++</li>
                        <li>NextJs</li>
                        <li>HTML, CSS and Javascript</li>
                        <li>React</li>
                        <li>Machine learning</li>
                        <li>Neural Networks</li>
                        <li>Microservices</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;