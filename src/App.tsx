import React from 'react';
import {Table} from './table/Table';
import {CellComponent} from './table/types';


const DummyComponent: CellComponent = function({row, id}) {

    return (<p>{row[id]}</p>)
}

function App() {
    let columns = [{
        id: "name",
        component: DummyComponent,
    },
        {
            id: "age",
            component: DummyComponent,
        }];
    let rows = [{
        name: "Alice",
        age: 20
    },
        {
            name: "Bob",
            age: 21
        }];
    return (
        <div className="App">
            <Table columns={columns} rows={rows}/>
        </div>
    );
}

export default App;
