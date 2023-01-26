import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/main.css"



function Collapse(){
    const [fix, setFix] = useState(false);
    function setFixed(){
        if (window.scrollY > 135 & window.innerWidth > 800 ){
            setFix(true)
        }else if (window.scrollY > 100 & window.innerWidth < 800 ){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    const [open, setOpen] = useState(false);
    const content = () => {
        setOpen(!open);
    }
    
    window.addEventListener("scroll", setFixed)
        return(
            <div className="MenuBoxToFix">
                <div className="toFixMenu"></div>
            <div className={fix ? "menuBoxFixed" : "menuBox"}>
                {open && <div className="box">
                    <div className='bisMenuOpen'>
                        <span>
                            <NavLink to="/Parcours" className={({isActive}) => (isActive ? 'linkActive' : 'link')}><p>Parcours</p></NavLink>
                        </span>
                        <span className="btnMenu" aria-label="toggle curtain navigation" onClick={content}>
                            <i className={(open) ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                        </span>
                        <span>
                            <NavLink to="/Projets" className={({isActive}) => (isActive ? 'linkActive' : 'link')}>Projets</NavLink>
                        </span>
                    </div>
                </div>}
                {!open && <div className="box">
                    <button className="btn">
                    <div className="menuneonlogoBox">
                        <div className="menuneonlogo">
                            <span className="menulogo"><NavLink to="/" className={({isActive}) => (isActive ? 'linkActive' : 'link')}><i className="fa-solid fa-house"></i></NavLink></span>
                                <span className="btnMenu" aria-label="toggle curtain navigation" onClick={content}><i className={(open) ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i></span>
                            <span className="menulogo"><NavLink to="/Contact" className={({isActive}) => (isActive ? 'linkActive' : 'link')}><i className="fa-regular fa-envelope"></i></NavLink></span>
                        </div>
                    </div>
                </button>
                </div>}
            </div>
            </div>
        )
}



export default Collapse