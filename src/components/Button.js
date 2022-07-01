import React from "react";

function Button({text,buttonClick,handleClick}) {
    return(
<button

className={buttonClick ? 'button-click': 'button-restart'} onClick={handleClick}>{text}

</button>
    );
    
}
export default Button;