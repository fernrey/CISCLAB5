import './App.css';
import TableContainer from "./TableContainer"
function App(props) {

  return (

    <div className="App">
    <TableContainer/>
    <h1>The site for cars!</h1>
      <table>
        <thead>
          <tr>
            <th>practice info</th>
            <th>car </th>
            <th>car info</th>
            <th>Email </th>
          </tr>
        </thead>
        <tbody>
       
        
        </tbody>
      </table>

      <h2> Add a car </h2>
      <form>
      <input type="text" name="car" required="required" placeholder="Enter a name..."/>
      <input type="text" name="phone" required="required" placeholder="enter full..."/>
      <input type="text" name="id" required="required" placeholder="enter id..."/>
      <button type="submit">Add </button>
      </form>
    </div>
  );
}

export default App;
