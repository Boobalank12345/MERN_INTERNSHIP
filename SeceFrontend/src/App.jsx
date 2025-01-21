import About from './components/about'
import {ClassComponent,Gallery} from './components/classComp'
import Contact from './components/Contact'
import viteLogo from '/vite.svg'


function App() {
  
  return (
    <div>
      < About />
      < ClassComponent />
      < Gallery image="React LOGO" page="picture"/>
      <Contact />
    </div>
  )
}

export default App