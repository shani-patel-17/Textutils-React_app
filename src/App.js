import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#343a40"
    }else{
      setMode('light')
      document.body.style.backgroundColor="white"
    }
  }
  const changeText = ()=>{
    if(mode === 'light'){
      return 'Dark Mode'
    }else{
      return 'Light Mode'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeText={changeText}/>
      {/* <Navbar /> */}
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze" mode={mode}  />
      </div>
    </>
  );
}

export default App;
