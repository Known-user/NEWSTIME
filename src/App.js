import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Last from './components/Last';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class App extends Component {
  constructor() {
    super();
    this.state= {
      search:"",
      mode:"light"
    }
  }
  
  setSearch=(value)=>{
    this.setState({ search: value })
  }

  toggleMode = ()=>{
    if(this.state.mode === 'light'){
      this.setState({ mode:"dark" })
      document.body.style.backgroundColor = "#4f4f4f";
    }
    else{
      this.setState({ mode:"light" })
      document.body.style.backgroundColor = "white";
    }
  }
  
  render() {
  return (
   
      <Router>
      <Navbar setSearch={this.setSearch} mode={this.state.mode}/>
        <Routes>   
            <Route exact path="/" element={<News key="general" country="in" category="general" search="" type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
            <Route exact path="/sports" element={<News key="sports" country="in" category="sports" search="" type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
            <Route exact path="/business" element={<News key="buisness" country="in" category="business" search="" type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
            <Route exact path="/entertainment" element={<News key="entertaintment" country="in" category="entertainment" search="" type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
            <Route exact path="/science" element={<News key="science" country="in" category="science" search="" type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
            <Route exact path="/health" element={<News key="health" country="in" category="health" search="" type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
            <Route exact path="/technology" element={<News key="technology" country="in" category="technology" search="" type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
            <Route exact path="/us" element={<News key="us" country="us" category="general" search="" type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
            <Route exact path="/be" element={<News key="be" country="be" category="general" search="" type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
            <Route exact path="/cn" element={<News key="cn" country="cn" category="general" search="" type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
            <Route exact path="/fr" element={<News key="fr" country="fr" category="general" search="" type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
            <Route exact path="/search" element={<News key={this.state.search} country="" category="" search={this.state.search} type="top-headlines" setSearch={this.setSearch} mode={this.state.mode} toggleMode={this.toggleMode} />}/>
        </Routes>
      <Last mode={this.state.mode} />
      </Router>
    
  );
 }
}
