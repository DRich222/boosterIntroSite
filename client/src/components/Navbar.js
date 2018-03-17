import React from "react";
import EmailForm from "./EmailForm"

//Sign Up function that makes a POST request to the server
// const signUp = e => {
//     e.preventDefault();
//     let body = { email: e.target.email.value };
//     const options = {
//         method: "POST",
//         credentials: "same-origin",
//         body: JSON.stringify(body),
//         headers: { "content-type": "application/json" }
//     };
//     console.log(options.body);
//     console.log(server);
//     fetch(`${server}/signup`, options);
//     e.target.reset();
// };

// const Navbar = () => {
//
//     return (
//         <div>
//             <div className="navBarSpacer"></div>
//             <div>
//                 <div className="navBack" style={}></div>
//                 <nav className="navbar navbar-expand-lg boosterNav">
//                     <a className="navbar-brand" href="#">
//                         <img src="/resources/images/Logo.png" className="navLogo"/>
//                         <span className="navLogoText">Booster</span>
//                     </a>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-toggle="collapse"
//                         data-target="#navbarSupportedContent"
//                         aria-controls="navbarSupportedContent"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon" />
//                     </button>
//                     <div className="my-2 my-lg-0 ml-auto">
//                         <EmailForm/>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );
// };

class Navbar extends React.Component{


    updateHeight(){
        this.refs.navBack.style.height = this.refs.navContent.clientHeight + "px";
        this.refs.navSpacer.style.height = this.refs.navContent.clientHeight + "px";
    }

    componentDidMount(){
        this.updateHeight();
        window.addEventListener("resize",this.updateHeight.bind(this))
    }

    render(){
        return (
            <div>
                <div className="navBarSpacer" ref="navSpacer"></div>
                <div>
                    <div className="navBack" ref="navBack"></div>
                    <nav className="navbar navbar-expand-lg boosterNav" ref="navContent">
                        <a className="navbar-brand" href="#">
                            <img src="/resources/images/Logo.png" className="navLogo"/>
                            <span className="navLogoText">Booster</span>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="my-2 my-lg-0 ml-auto">
                            <EmailForm/>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
