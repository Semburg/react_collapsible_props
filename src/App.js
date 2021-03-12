import './App.css';
import Collapsible from 'react-collapsible';
import FaqList from './components/FaqList';


function App() {
  return (
    <div className="App">
      <Collapsible trigger="Für wen ist dieses Bootcamp?">
        <p>
        Für alle Menschen die motiviert sind Neues zu lernen! Du solltest außerdem über 18 Jahre alt sein und bestenfalls eine Leidenschaft für den Bereich IT mitbringen.
      </p>

      </Collapsible>
      <Collapsible trigger="Part two">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
      </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
      </p>
      </Collapsible>

//!    HERE are THE props!!  
      <FaqList/>
    </div>
    
  );
}

export default App;
