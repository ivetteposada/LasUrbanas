import React,{Children} from 'react';

const Button = (props) => {
    return(
        <button className="send" onClick={props.onClickHandler}>{props.children}</button> 
    )
}

export { Button }