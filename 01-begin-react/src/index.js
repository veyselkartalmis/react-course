import React from 'react';
import ReactDOM from 'react-dom';

//JSX

const names = ["Arin", "Elis", "Gamze"];
const buttonValue = "JSX BUTTON";

function App() {
    return (
        <div>
            {/* Dizilerde yazan veriler map fonksiyonu ile istenilen nesneye dönüştürülebiir */}
            {names.map(name => (<h1>{name}</h1>))}
        
            {/* JSX formatında yazarken CSS özellikleri camelCase olarak verilir (backgroundColor), bazıları ise JS ile çakıştığı için farklı adlandırılır. (class => className gibi)  */}
            <button className='btn' type='button' style={{ padding: "10px", color: "white", backgroundColor: "red", border: "2px solid yellow" }}>{buttonValue}</button>
        </div>
    );
}

ReactDOM.render(
    <App />, document.getElementById('root')
);