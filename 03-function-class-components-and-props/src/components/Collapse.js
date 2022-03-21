import React from 'react';

const Collapse = (props) => {
    return (
        <div>
            <p>
                <a className="btn btn-primary w-100" data-bs-toggle="collapse" href={"#" + props.href} role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a>
            </p>
            <div className="collapse show" id={props.href}>
                {props.children} {/* Parent element Collapse olduğu için içerisine eklenen Card verisi children olarak bu şekilde yazılır */}
            </div> 
        </div>
    );
};  

export default Collapse; /* Başka yerde kullanabilmek için componenti export etmen gerekir. */