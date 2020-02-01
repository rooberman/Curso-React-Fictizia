import React from "react";
import ListComponent from './ListComponent';
import DetailComponent from './DetailComponent';
import GetApi from './GetApi';

function MainHoc() {
    const Detail = GetApi(DetailComponent, 'https://jsonplaceholder.typicode.com/posts/1')
    const List = GetApi(ListComponent, 'https://jsonplaceholder.typicode.com/posts')

    return (
        <>
        <p>Detalle:</p>
        <Detail />
        <p>Lista:</p>
        <List />
        </>
    );
}

export default MainHoc;