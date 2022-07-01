import './App.css';
import Button from './components/Button';
import kingdiamond from './images/kingdiamond.png'
import  './styles/button.css';

function App() {

const handleClick=()=>{
  console.log('click');
}

const restartCounter=()=>{
  console.log('Restart');
}

  return (
    <div className="App">
      <div className='image-logo-container'>
      <img
         className='image-logo'
         src={kingdiamond}
         alt='logo'/>
      </div>

      <div className='main-container'>
        <Button
        text='Click'
        buttonClick={true}
        handleClick={handleClick}/>

        <Button
         text='Restart'
         buttonClick={false}
         handleClick={restartCounter}/>
      </div>
    </div>
  );
}

export default App;
