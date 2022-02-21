import React from 'react'
import ReactDOM from 'react-dom';

function Portals() {
  return ReactDOM.createPortal(
    <div>
        <h1>Portals</h1>
    </div>,
    document.getElementById("portals-root")
  )
}

export default Portals