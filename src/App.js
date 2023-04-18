import './App.css';
import { Calculadora } from './components/calculadora/calculadora';
import {useSelector} from 'react-redux'
import { ErrorWindows } from './components/error/error';
import { MainWindow } from './components/GeneralStyles';




function App() {
  const state = useSelector(state => state)
  return(
    <MainWindow>
      {state.error ? <ErrorWindows /> : undefined}
      <Calculadora />
    </MainWindow>
  )
}

export default App;
