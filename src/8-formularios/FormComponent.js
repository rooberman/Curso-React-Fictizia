import React from 'react'

class FormComponent extends React.Component {

    state = {
        name: '',
        firstname: '',
        description: '',
        country: 'Spain',
        province: '',
        gender: 'male',
        age: '',
        games: false,
        football: false,
        basketball: false, // Mejorable, cambiando los hobbies por un array
        art: false
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault()
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <p>Name: <input type='text' value={this.state.name} onChange={this.handleChange} name='name' /></p>
            <p>Firstname: <input type='text' value={this.state.firstname} onChange={this.handleChange} name='firstname' /></p>
            <p>Age: <input type='number' value={this.state.age} onChange={this.handleChange} name='age' /></p>
            <p>Description: <textarea value={this.state.description} onChange={this.handleChange} name='description' /></p>
            <p>Gender: <br />
                <input type='radio' checked={'male' === this.state.gender} value='male' onChange={this.handleChange} name='gender' />male
                <input type='radio' checked={'female' === this.state.gender} value='female' onChange={this.handleChange} name='gender' />female
                <input type='radio' checked={'other' === this.state.gender} value='other' onChange={this.handleChange} name='gender'/>other
            </p>
            <p>Country:
                <select value={this.state.country} onChange={this.handleChange} name='country'>
                    <option selected value="Spain">Spain</option>
                    <option value="USA">USA</option>
                </select>
            </p>
            {this.state.country === 'Spain' &&
                <p>Province:
                    <select value={this.state.province} onChange={this.handleChange} name='province'>
                        <option value="madrid">Madrid</option>
                        <option value="guadalajara">Guadalajara</option>
                    </select>
                </p>
            }
            <p>Hobbies: 
                <p>games <input type='checkbox' checked={this.state.games} onChange={this.handleChange} name='games' /></p>
                <p>football <input type='checkbox' checked={this.state.football} onChange={this.handleChange} name='football' /></p>
                <p>basketball <input type='checkbox' checked={this.state.basketball} onChange={this.handleChange} name='basketball' /></p>
                <p>art <input type='checkbox' checked={this.state.art} onChange={this.handleChange} name='art' /></p>
            </p>
            
            <input type='submit' value='Submit' />
        </form>;
    }
}

export default FormComponent