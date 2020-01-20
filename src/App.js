import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./render/Greeting";
import ShowName from "./render/ShowName";
import ShowDate from "./render/ShowDate";
import ShowMessage from "./render/ShowMessage";
import ConditionalRender from "./render/ConditionalRender";
import Title from "./componentes/Title";
import Texto from "./estado/Texto";
import Lista from "./componentes/Lista";
import ListItem from "./componentes/ListItem";
import Enlace from "./componentes/Enlace";
import Loading from "./componentes/Loaging";
import Parent from "./componentes/Parent";
import Contador from "./estado/Contador";
import ContadorString from "./estado/ContadorString";
import ContadorPadre from "./estado/ContadorPadre";
import TestUsers from "./cicloVida/TestUsers";
import Interruptor from "./cicloVida/Interruptor";
import LifecyclePetition from "./cicloVida/LifecyclePetition";
import LifecyclePetitionOnDemand from "./eventos/LifecyclePetitionOnDemand";
import InputEvent from "./eventos/InputEvent";
import SelectEvent from "./eventos/SelectEvent";
import SesionTest from "./conditionalRender/SesionTest";
import ListContainer from "./lists/ListContainer";
import SelectComponentTest from "./formularios/SelectComponentTest";

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
                <Enlace
                    texto="React Docs"
                    link="https://reactjs.org/"
                    openInNewTab
                />
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
                    <Enlace
                        texto="React Docs"
                        link="https://reactjs.org/"
                        openInNewTab
                    />
                </Loading>

                <Parent />
                */}

                {/*
                <Contador />

                <ContadorString />

                <ContadorPadre />
                */}

                {/*
                <Interruptor />

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
