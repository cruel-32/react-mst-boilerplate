import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@/components/atoms/CssBaseline';
import logo from '@/logo.svg';
import '@/App.css';
import theme from '@/theme';
import { rootStore, Provider } from '@/stores';
import TestComponent from '@/components/test.component';

const App = () => (
  <Provider value={rootStore}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Link to="/">root</Link>
            <Link to="/about">about</Link>
            <Link to="/cart">cart</Link>
          </header>
          <Switch>
            <Route path="/about">
              <Route path="/">
                <div>root page</div>
              </Route>
              <div>about page</div>
            </Route>
            <Route path="/cart">
              <TestComponent />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
