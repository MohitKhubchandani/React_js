function Todoitem2(){

   let TodoName = "Go To College";
   let TodoDate = "4/10/2023";

  return <div className="container ">
  <div className="row My-row">
<div className="col-6">{TodoName}</div>
<div className="col-4">{TodoDate}</div>
<div className="col-2">
  <button type="button" className="btn btn-danger My-button">Delete</button>
  </div>
  
  </div>
  </div>
  }
  
  export default Todoitem2;