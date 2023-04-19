import view from "../../public/viewfinder.png"

export const Instructions = ({onDismiss:dismiss}) => {
    return (
        <div 
            className="position-fixed w-100 h-100 d-flex flex-column justify-content-center" 
            style={{zIndex: 2000, backgroundColor: "rgba(0,0,0,0.6)"}}>
            <div className="card align-self-center" style={{width: "80%", maxWidth: "500px"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>Instructions</span>
                    <button type="button" className="btn-close" aria-label="Close" onClick={()=>dismiss()}></button>
                </div>
                <div className="card-body">
                    <ul>
                        <li>Use the map's pan/zoom functions to frame your guess location within the viewfinder circle.</li>
                        <li className="d-flex flex-column">
                            <img className="align-self-center" alt="" src={view}/>
                        </li>
                        <li>Circle color indicates whether you're getting hotter or colder!</li>
                        <li>Feel free to ask for a hint -- it won't cost you a thing.</li>
                        <li>You can also opt to "Reveal", but beware it counts against your score.</li>
                    </ul>
                </div>
            </div>
        </div>    
    )
}