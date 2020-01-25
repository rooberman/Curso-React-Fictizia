import React from "react";

class FormRef extends React.Component {
    render() {
        return (
            <>
            <form onSubmit={this.onSubmit}>
                <p>Name <input type='text' ref={element => this.nameRef = element} name="name" /></p>
                <p>Surname <input type='text' ref={element => this.surnameRef = element} name="subname" /></p>
                <input type='submit' value='Enviar' />
            </form>
            </>
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.nameRef);
    }
    
}

export default FormRef;