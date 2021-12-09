import React from "react"

function Show(props){

	const [hashState, setHashState] = React.useState(window.location.hash)
  
	React.useEffect(() => {
	  window.addEventListener("hashchange", () => {setHashState(window.location.hash)})
	}, [window.location.hash])
    
    return(<div className={props.hash === hashState ? "" : "hidden"}>{props.children}</div>)
  }
  
export default Show;