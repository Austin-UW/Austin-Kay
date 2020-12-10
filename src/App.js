import { Header } from './Header' 
import {About} from './About'
import {Skills} from './Skills'
// import {Work} from './Work'
import {Hire} from './Hire'

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Header />
        <About />
        <Skills />
        {/*<Work />*/}
        <Hire />
    </div>
  );
}

export default App;
