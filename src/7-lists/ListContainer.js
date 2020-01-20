import React from 'react'
import ListItem from './ListItem'
import Lista from './Lista'
import ButtonAdd from './ButtonAdd'
import InputTarea from './InputTarea'

class ListContainer extends React.Component {

    state = {
        textInput: '',
        tareas: [
            { id: 1, text: 'tarea 1' }, 
            { id: 2, text: 'tarea 2' }, 
            { id: 3, text: 'tarea 3' }
        ]
    }

    addTask = () => {
        var temp = [...this.state.tareas];
        var nuevatarea = { id: Math.random(), text: this.state.textInput }
        temp.push(nuevatarea);
        this.setState({ tareas: temp });
        this.setState({ textInput: '' });
    }

    removeTask = (id) => {
        var temp = this.state.tareas.filter(n => n.id !== id);
        this.setState({ tareas: temp });
    }

    updateTask = (id) => {
        var temp = this.state.tareas.map(n => {
            if (n.id === id) n.text = this.state.textInput;
            return n;
        });
        this.setState({ tareas: temp });
        this.setState({ textInput: '' });
    }

    inputChange = (e) => {
        this.setState({ textInput: e.target.value });
    }

    render() {
        return (
            <>
            <p>
                <InputTarea inputChange={this.inputChange} valor={this.state.textInput} />
                <ButtonAdd addTask={this.addTask} />
            </p>
            <Lista >
                {this.state.tareas.map((tarea) => <ListItem id={tarea.id} valor={tarea.text} removeTask={this.removeTask} updateTask={this.updateTask} /> )}
            </Lista>
            </>
        );
    }
}

export default ListContainer