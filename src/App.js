
import './App.css';
import { PersonsTable } from  "./PersonsTable";


let persons =[
  {
  "id": "a123",
  "firstName": "Bilc",
  "lastName": "Adina",
  "gitHub": "https://github.com/bilcadina"
},
{
  "id": "b563",
  "firstName": "Carunt",
  "lastName": "Filip",
  "gitHub": "https://github.com/bilcadina"
}
];

function App() {
  return (
    <div>
      <h1>Teams Networking</h1>
      <div>Search</div>
      <PersonsTable persons={persons} border={1} />
    </div>
  );
}

export default App;
