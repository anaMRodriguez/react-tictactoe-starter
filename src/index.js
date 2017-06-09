import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

    // const newBoard = (column) = this.state.board.map((stateRow, i) => {
    //   if (i === row) {
    //     stateRow = stateRow.map((stateColumn, j) => {
    //       if (j === column) {
    //         stateColumn = "x";
    //       }
    //       return stateColumn;
    //     })
    //   }
    //   return stateRow;
    // }
    // )
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
