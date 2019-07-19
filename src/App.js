import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Sessions from './components/Sessions';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <div className="columns">
              <div className="column">
                <h1 class="title">
                  MiniJobs
                </h1>
                <h2 class="subtitle">
                  Pequeños trabajos con grandes ganancias
                </h2>
              </div>
              <div className="column">
                <Sessions />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
