import {Container} from 'react-bootstrap'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import JobListScreen from './screens/JobListScreen';
import JobsScreen from './screens/JobsScreen';
import ApproveJobScreen from './screens/ApproveJobScreen';
import RejectedJobScreen from './screens/RejectedJobScreen';



const App=()=> {
  return (

    <Router>
    <Header/>
    <main className='py-3'>
      <Container>
        <Route path='/login' component={LoginScreen}/>
        <Route path='/joblist' component={JobListScreen}/>
        <Route path='/jobs' component={JobsScreen}/>
        <Route path='/approve' component={ApproveJobScreen}/>
        <Route path='/rejected' component={RejectedJobScreen}/>
        <Route path='/' component={HomeScreen} exact/>
       
      </Container>
    
    </main>
     <Footer/>
    </Router>
   
  );
}

export default App;
