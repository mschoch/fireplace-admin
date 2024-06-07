import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import './bulma.min.css';

import { Header } from './components/Header'
import { Aside } from './components/Aside'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Database } from './pages/Database'
import { Document } from './pages/Document'
import { Databases } from './pages/Databases'
import { Applications } from './pages/Applications'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="section is-main-section">
            {children}
        </section>
    )
}

function App() {

  const routes = [
    { path: '*', component: NotFound },
    { path: '/database/', component: Databases },
    { path: '/database/:name', component: Database },
    { path: '/database/:name/:docID', component: Document },
    { path: '/app/', component: Applications },
    { path: '/', component: Home }
  ]

  return (
      <>
          <Header />
          <div className="columns">
              <div className="column is-narrow">
                  <Aside />
              </div>
              <div className="column">

                  <Routes>
                      {routes.map(({ path, component }, index) => (
                          <Route
                              key={index}
                              path={path}
                              element={<Layout>{React.createElement(component)}</Layout>}
                          />
                      ))}
                  </Routes>

              </div>
          </div>
      </>
  )
}

export default App;
