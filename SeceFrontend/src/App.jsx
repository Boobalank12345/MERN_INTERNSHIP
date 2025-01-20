import About from './components/about'
import {ClassComponent,Gallery} from './components/classComp'
import viteLogo from '/vite.svg'


function App() {
  
  return (
    <>
      < About />
      < ClassComponent />
      < Gallery image="React LOGO" page="picture"/>
    </>
  )
}

export default App