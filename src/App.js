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
import ContadorString from './ContadorString';
import ContadorPadre from './ContadorPadre';
import TestUsers from './TestUsers';
import Interruptor from './Interruptor';
import LifecyclePetition from './LifecyclePetition';
import LifecyclePetitionOnDemand from './LifecyclePetitionOnDemand';
import InputEvent from './eventos/InputEvent';
import SelectEvent from './eventos/SelectEvent';
import SesionTest from './conditionalRender/SesionTest';
import ListContainer from './lists/ListContainer';
import SelectComponentTest from './formularios/SelectComponentTest';

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

        {/*
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

        <ContadorString />

        <ContadorPadre />
        */}

        {/*
        <Interruptor />
        */}

        {/*
        <LifecyclePetition />
        */}

        {/*
        <LifecyclePetitionOnDemand />
        */}

        {/*
        <InputEvent />

        <SelectEvent />
        */}

        {/*
        <SesionTest />
        */}

        {/*
        <ListContainer />
        */}

        <SelectComponentTest />

      </header>
    </div>
  );
}

export default App;
