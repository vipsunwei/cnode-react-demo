import React from 'react'
import RouterIndex from './router/index'
import MainHeader from './view/main.header'
import MainFooter from './view/main.footer'
import './App.css'

function App () {
  return (
    <div className="pageWrap">
      <MainHeader />
      <div className="main"><RouterIndex /></div>
      <MainFooter />
    </div>
  )
}

export default App;
