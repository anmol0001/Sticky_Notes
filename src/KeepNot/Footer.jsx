import React from 'react';

const Footer = () => {
    const year=new Date().getFullYear(); 

    return(
<>

    <div className="footers">
    <p>CopyRight © {year}</p>
    </div>
 


</>
    );
}

export default Footer;