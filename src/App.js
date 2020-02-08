import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./1-render/Greeting";
import ShowName from "./1-render/ShowName";
import ShowDate from "./1-render/ShowDate";
import ShowMessage from "./1-render/ShowMessage";
import ConditionalRender from "./1-render/ConditionalRender";
import Title from "./2-componentes/Title";
import Texto from "./3-estado/Texto";
import Lista from "./2-componentes/Lista";
import ListItem from "./2-componentes/ListItem";
import Enlace from "./2-componentes/Enlace";
import Loading from "./2-componentes/Loaging";
import Parent from "./2-componentes/Parent";
import Contador from "./3-estado/Contador";
import ContadorString from "./3-estado/ContadorString";
import ContadorPadre from "./3-estado/ContadorPadre";
import TestUsers from "./4-cicloVida/TestUsers";
import Interruptor from "./4-cicloVida/Interruptor";
import LifecyclePetition from "./4-cicloVida/LifecyclePetition";
import LifecyclePetitionOnDemand from "./5-eventos/LifecyclePetitionOnDemand";
import InputEvent from "./5-eventos/InputEvent";
import SelectEvent from "./5-eventos/SelectEvent";
import SesionTest from "./6-conditionalRender/SesionTest";
import ListContainer from "./7-lists/ListContainer";
import SelectComponentTest from "./8-formularios/SelectComponentTest";
import Father from "./9-subiendoestado/Father";
import Shop from "./10-EjercicioFinal/Shop";
import FormRef from "./11-FormsRef/FormRef";
import MainHoc from "./12-hoc/MainHoc";
import ShowServerConfig from "./13-PropTypes/ShowServerConfig";
import Main from "./14-hooks/Main";
import Lazy from './15-LazySuspense/Lazy';
import LanguajeContext from './16-ReactContext/LanguajeContext';
import Header from "./16-ReactContext/Header";
import Content from './16-ReactContext/Content';
//import RouterContent from "./17-ReactRouter/RouterContent";
import RouterContent from "./18-MaterialUI/RouterContent";
import Styles from "./19-StyledComponents/Styles";

function App() {

    const [languaje, setLanguaje] = useState('es')

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

                {/*
                <SelectComponentTest />
                */}

                {/*
                <Father />
                */}

                {/*}
                <Shop />
                */}

                {/*
                <FormRef />
                */}

                {/*
                <MainHoc />
                */}

                {/*
                <ShowServerConfig 
                    config={{ minConnections: 4, maxConnections: 10, restartAlways: true }}
                    environment='dev'
                    ssl={false}
                />

                <ShowServerConfig 
                    config={{ minConnections: 4, maxConnections: 10, restartAlways: true }}
                    environment='live'
                    ssl={false}
                    ssl2
                />
                */}

                {/*
                <Main />
                */}

                {/*
                <Lazy />
                */}

                {/*
                <LanguajeContext.Provider value={{
                    languaje: languaje,
                    setLanguaje: (languaje => setLanguaje(languaje))
                }}>
                    <Header />
                    <Content />
                </LanguajeContext.Provider>
                */}

                {/*
                <RouterContent />
                */}

                {/*
                <RouterContent />
                */}

                <Styles />

            </header>
        </div>
    );
}

export default App;
