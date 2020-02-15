import React from 'react'
import { connect } from 'react-redux'
import * as formActions from './form.actions'

const formRedux = props => 
    <div>
        <input type="text" value={props.name} onChange={e => props.changeName(e.target.value)} />
        <input type="number" value={props.age} onChange={e => props.changeAge(e.target.value)} />
    </div>

const mapStateToProps = state => {
    return {
        name: state.form.name,
        age: state.form.age
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeName: name => dispatch(formActions.changeName(name)),
        changeAge: age => dispatch(formActions.changeAge(age))
    }
}

export default connect(mapStateToProps, null)(formRedux)

// falta en index.js envolver el <App /> en un provider de redux

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux'
// import configureStore from './store/configureStore'
// let store = configureStore()
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();