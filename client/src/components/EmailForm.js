import React from "react";
import server from "../server";

class EmailForm extends React.Component{

    state = {
        email:''
    };

    change = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    submitEmail = (e)=>{
        e.preventDefault();
        const body = {email: this.state.email}
            , options = {
            method: 'post'
            , credentials: "same-origin"
            , body: JSON.stringify(body)
            , headers: { "content-type": "application/json" }
        };

        if(body.email.trim() === ""){
            alert('Please enter an email');
            return;
        }

        fetch(`${server}/signup`,options)
            .then(()=>{alert('Email submitted.  Thank you!')});

    };

    render() {
        return (
            <div className="my-2 my-lg-0 ml-auto">
                <form className="form-inline" onSubmit={e => this.submitEmail(e)}>
                    <input
                        name="email"
                        className="form-control mr-sm-2"
                        placeholder="Email"
                        aria-label="Email"
                        value={this.state.email}
                        onChange={e => this.change(e)}
                    />
                    <button
                        className="btn btn-outline-primary my-2 my-sm-0"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                <div style={{textAlign: "right"}}><span
                    className="smallText ">Yes! We deal with these challenges!</span></div>
            </div>
        )
    }
};

export default EmailForm;