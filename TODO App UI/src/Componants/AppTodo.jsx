function AppTodo(){
return <div className="container text-center">
<div className="row My-row">

  <div className="col-6">

    <input type="text" placeholder='ENTER TODO HERE' />
  </div>
  
  <div className="col-4">
    <input type="date" />
  </div>
  
  <div className="col-1">
  <button type="button" className="btn btn-success My-button">Add</button>
  </div>

 </div>
 </div>

  
}

export default AppTodo;