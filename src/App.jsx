import './App.css'
import { store } from './component/redux/store'
import RouteConfig from './component/routes/RouteConfig'
import {Provider} from 'react-redux'
function App() { 

  return (
    <>
     <Provider store={store}>
        <RouteConfig/>
     </Provider>
    </>
  )
}

export default App
