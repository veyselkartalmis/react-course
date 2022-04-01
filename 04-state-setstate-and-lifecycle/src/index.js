import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/Card'; /* Yazdığım componentleri burada import ediyorum */
import Collapse from './components/Collapse';

const App = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="card-group w-100">
                    <div className='col'>
                        <Collapse href="collapseExample1">
                            <Card
                                cardTitle="Card Title 1"
                                cardText="Lorem Ipsım Text I"
                                updatedTime="Last Updated 1 min ago"
                                image="https://picsum.photos/id/1/400/400"
                            />
                        </Collapse>
                    </div>
                    <div className='col'>
                        <Collapse href="collapseExample2">
                            <Card
                                cardTitle="Card Title 2"
                                cardText="Lorem Ipsım Text II"
                                updatedTime="Last Updated 2 min ago"
                                image="https://picsum.photos/id/2/400/400"
                            />
                        </Collapse>
                    </div>
                    <div className='col'>
                        <Collapse href="collapseExample3">
                            <Card
                                cardTitle="Card Title 3"
                                cardText="Lorem Ipsım Text III"
                                updatedTime="Last Updated 3 min ago"
                                image="https://picsum.photos/id/3/400/400"
                            />
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />, document.getElementById('root')
);