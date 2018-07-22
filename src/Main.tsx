import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Algorithms } from 'algorithms';
import { AnimateSimple } from 'animate/AnimateSimple';
import { PasswordRegExp } from 'regexp/PasswordRegExp';
import LoadingScreenExample from 'hoc/LoadingScreenExample';
import KentDodds from 'kentDodds';
import HolyJs from 'holyjs';
import { RefsWithChild } from 'refs';

type Props = {
};
type State = {
};
const routes = {
  home: '/',
  algorithms: '/algorithms',
  animate: '/animate',
  hoc: '/hoc',
  holyjs: '/holyjs',
  kentDodds: '/kent-dodds',
  refs: '/refs',
  regexp: '/regexp',
};

class Main extends React.PureComponent<Props, State> {
  getStyle = () => {
    const link = {
      display: 'inline-block',
      padding: '10px',
    };
    return {
      link,
    };
  }
  render() {
    const style = this.getStyle();
    return (
      <div>
        <div>
          <Link style={style.link} to={routes.home}>Home</Link>
          <Link style={style.link} to={routes.algorithms}>algorithms</Link>
          <Link style={style.link} to={routes.animate}>animate</Link>
          <Link style={style.link} to={routes.hoc}>hoc</Link>
          <Link style={style.link} to={routes.holyjs}>holyjs</Link>
          <Link style={style.link} to={routes.kentDodds}>kent-dodds</Link>
          <Link style={style.link} to={routes.regexp}>regexp</Link>
          <Link style={style.link} to={routes.refs}>refs</Link>
        </div>
        <div style={{ padding: '10px 0 0 20px' }}>
          <Switch>
            <Route path={routes.algorithms} component={Algorithms} />
            <Route path={routes.animate} component={AnimateSimple} />
            <Route path={routes.hoc} component={LoadingScreenExample} />
            <Route path={routes.holyjs} component={HolyJs} />
            <Route path={routes.kentDodds} component={KentDodds} />
            <Route path={routes.regexp} component={RefsWithChild} />
            <Route path={routes.refs} component={PasswordRegExp} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Main;


// import Ex2 from './excerices/Ex2';
// import Test1 from './test/Test1';
// import LoadingScreenExample from './hoc/LoadingScreenExample';
// import Test1Format from './fp/Test1Format';
// import { result } from './fp/Transducer';
// import { result } from './fp/ramda/CurryN';
// import { result } from './fp/ramda/Compose';
// import { result } from './animate/Test1';
// import { result } from './js/scope/this1';
// import { result } from './js/scope/scope';

// const App = () => (
//   <div>
//     {result}
//   </div>
// );