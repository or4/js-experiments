import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class UnionWith extends React.PureComponent<Props, State> {
  render() {
    let l1 = [{ a: 1 }, { a: 2 }];
    let l2 = [{ a: 1 }, { a: 4 }];
    R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]

    return (
      <div>
        <h3>R.unionWith</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
