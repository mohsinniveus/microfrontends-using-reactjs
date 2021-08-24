import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderRepos = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountRepos = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Repos-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}