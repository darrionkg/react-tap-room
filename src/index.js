import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
