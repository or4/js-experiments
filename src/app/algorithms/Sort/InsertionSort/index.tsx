import React from 'react';
import { insertionSort } from './insertionSort';

import { data } from './data';
const arr = data.filter((item, index) => index <= 10);
// const arr = data;
// const arr = ['3', '8', '2', '5', '1', '4', '7', '6'];
// const arr = ['5', '4', '1', '6', '3', '2', '9'];
// const arr = ['2', '4', '3', '5'];
// const arr = ['2', '4', '3'];

type Props = {
};
type State = {
};

export class InsertionSort extends React.PureComponent<Props, State> {
  getStyle() {
    const base = {
      display: 'inline-block',
      padding: '0 5px',
    };
    const cellInit = {
      ...base
    };
    const cellTrue = {
      ...base,
      color: 'green'
    };
    const cellFalse = {
      ...base,
      fontWeight: 'bold' as 'bold',
      color: 'red'
    };
    return {
      cellInit,
      cellTrue,
      cellFalse,
    };
  }

  render() {
    const style = this.getStyle();
    const sortedArray = insertionSort([...arr]);
    const valid = this.isValid(sortedArray);

    return (
      <div>
        <h3>Array</h3>
        {arr.map(item => <span key={item} style={style.cellInit}>{item}</span>)}

        <h3>Sorted</h3>
        <div>
          {sortedArray.map((item, index, array) => <span key={index} style={this.getSortedItemStyle(array, index, style)}>{item}</span>)}
        </div>
        <div>
          <h5 style={valid ? style.cellTrue : style.cellFalse}>Check is {String(valid)}</h5>
        </div>
      </div>
    );
  }

  getSortedItemStyle(array: string[], index: number, style: any) {
    if (index === 0) {
      return style.cellTrue;
    }
    return this.cmpWithPrev(array, index) ? style.cellTrue : style.cellFalse;
  }

  isValid(sortedArray: string[]) {
    let check = true;
    for (let i = 1; i < sortedArray.length; i++) { if (Number(sortedArray[i - 1]) > Number(sortedArray[i])) { check = false } }
    return check;
  }
  cmpWithPrev(arr: string[], index: number) {
    return Number(arr[index - 1]) <= Number(arr[index]);
  }
}
