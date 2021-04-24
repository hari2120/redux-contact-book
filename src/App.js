import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
      <div className="container">
       <div className="py-3">
         <Switch>
           <Route exact path="/" component={Contacts} />
           <Route exact path="/addcontact" component={AddContact} />
           <Route exact path="/editcontact/:id" component={EditContact} />
         </Switch>
        

       </div>
     </div>
      </Router>
     
    
    </div>
  );
}

export default App;
