import "../../styles/links.scss";

function Links() {
    return (
        <div className="container linksContainer">
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
            <div className="row linksHeader">
                <div className="col-md">
                    <h1>You can find me on</h1>
                </div>
            </div>
            <div className="row links">
                <div className="col-md">
                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="luke-sanger-43b33420b" data-version="v1">
                    <a className="badge-base__link LI-simple-link" href="https://au.linkedin.com/in/luke-sanger-43b33420b?trk=profile-badge">Luke Sanger</a>
                    </div>
                </div>
            </div>
            
        </div>      
    )
}

export default Links;