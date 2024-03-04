import AppName from './Componants/AppName'
import AppTodo from './Componants/AppTodo'
import Todoitem1 from './Componants/Todoitem1'
import Todoitem2 from './Componants/Todoitem2'
import "./App.css"

function App() {
return <center className='todo-container'>
  <AppName/>
  <AppTodo/>
  
  <div className='items-container'>
  <Todoitem1/>
  <Todoitem2/>
  </div>  
</center>

}
export default App
