import React from 'react';

function Header(props) {


return (
    <ul className="nav nav-pills ">
        {
            props.pages.map((item, index) => {
                return (
                    <li className="nav-item" key = {index} style={{fontWeight: "bold", fontStyle: "italic",}}>
                        <a
                        href={"#"}
                        onClick={() => props.setPage(index)}
                            className={"nav-link text-light" + (props.currentPage === index ? "actove" : "")}
                            style={{fontFamily: "faune", color: "#CBCB41"}}>
                            
                            {item.readableName}
                        </a>
                    </li>
                )
            })
        }
        {props.children}
    </ul>
)
        }

export default Header; 
