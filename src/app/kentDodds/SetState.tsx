import React from 'react';
import { Button } from 'app/ui/Button';

type Props = {
};
type State = {
  count: number;
  callbackCalled: number;
};
export class SetState extends React.PureComponent<Props, State> {
  state = {
    count: 0,
    callbackCalled: 0,
  };
  callback = () => {
    this.setState((currentState) => ({
      callbackCalled: currentState.callbackCalled + 1
    }));

    console.log('callback called');
  }
  onClick = () => {
    this.incrementState();
    this.incrementState();
    this.incrementState();
  }
  incrementState = () => {
    this.setState((currentState, currentProps) => {
      return { count: currentState.count + 1 };
    }, this.callback);
  }
  render() {
    return (
      <div>
        <h3>React this.setState callback</h3>
        <Button onClick={this.onClick}>
        Button Clicked {this.state.count}, Callback called {this.state.callbackCalled}
        </Button>
      </div>
    );
  }
}
