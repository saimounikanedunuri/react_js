import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" heroName="Batsman"/>
        <p>This is children props</p>
        <Greet name="Clark" heroName="Superman"/>
        <button>Action</button>
        <Greet name="Diana" heroName="Wonderman"/><hr/>
        <Welcome name="Bruce" heroName="Batsman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonderman"/><hr/>
        <Hello /><hr/>
        <Message /><br/><hr/>
        <Counter /><br/><hr/>
        <FunctionClick /><br/><hr/>
        <ClassClick /><br/><hr/>
        <EventBind /><br/><hr/>
        <ParentComponent /><hr/>
        <UserGreeting /><hr/>
        <NameList /><hr/>
        <Stylesheet primary={true} /><hr/>
        <Inline /><hr/>
        <h1 className='error'>Error</h1><hr/>
        <h1 class={styles.success}>Success</h1>
        <Form /><hr/>
        <FragmentDemo /><hr/>
        <ParentComp /><hr/>
        <RefsDemo /><hr/>
        <FocusInput /><hr/>
        <FRParentInput /><hr/>
        <ClickCounter /><hr/>
        <HoverCounter /><hr/>
        <ClickCounterTwo/><hr/>
        <HoverCounterTwo /><hr/>
      </div>
    );
  }
}

export default App;
