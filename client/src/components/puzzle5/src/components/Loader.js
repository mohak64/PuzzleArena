

export const Loader = ({
    className,
    style,
    title
    }) => {
    className = className+" d-flex justify-content-center align-items-center"
    return(
        <div id="intro" className={className} style={style}>
            <div id="inner" 
                className="d-flex flex-column align-items-center position-relative overflow-hidden bg-white p-4 border-solid">
                    <h1>{title}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100" viewBox="0 0 960 560">
                        <polyline className="zigzag" fill="none" stroke="#000000" strokeWidth="16" strokeMiterlimit="10" points="902 245.5 762.5 141.5 623.01 245.5 483.51 141.5 344.01 245.5 204.5 141.5 65 245.5 "/>
                    </svg>
                    <h4>Treasure Hunt</h4>
            </div>
        </div> /*intro*/
    );
}