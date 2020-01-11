import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import ShowName from './ShowName';
import ShowDate from './ShowDate';
import ShowMessage from './ShowMessage';
import ConditionalRender from './ConditionalRender';
import Title from './Title';
import Texto from './Texto';
import Lista from './Lista';
import ListItem from './ListItem';
import Enlace from './Enlace';
import Loading from './Loaging';
import Parent from './Parent';
import Contador from './Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*
        <Greeting />
        <ShowName />
        <ShowDate />
        <ShowMessage />
        <ConditionalRender />
        */}

        {/*
        <Title titulo="Necesito partir en componentes todo esto" />
        <Texto contenido="Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:" />
        <Lista>
          <ListItem valor="Observar el HTML" />
          <ListItem valor="Pensar en como puedo extraer cada trozo en componentes" />
          <ListItem valor="Usarlos en React" />
        </Lista>
        <Enlace texto="React Docs" link="https://reactjs.org/" openInNewTab />
        */}

        <Loading show>
          <Title titulo="Necesito partir en componentes todo esto" />
          <Texto contenido="Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:" />
          <Lista>
            <ListItem valor="Observar el HTML" />
            <ListItem valor="Pensar en como puedo extraer cada trozo en componentes" />
            <ListItem valor="Usarlos en React" />
          </Lista>
          <Enlace texto="React Docs" link="https://reactjs.org/" openInNewTab />
        </Loading>

        <Parent />

        <Contador />

      </header>
    </div>
  );
}

export default App;
