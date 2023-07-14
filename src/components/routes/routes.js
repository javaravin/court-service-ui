import Dashboard from '../dashboard/Dashboard';
import { Layout } from '../layout/layout';
import SignInSide from '../login/SignInSide';
import SignUp from '../login/SignUp';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
function RoutesPage() {
  return (
    <Router>
        <Routes>
            <Route path="/" element ={<SignInSide/>}/>
            <Route exact path="/login" element={<SignInSide/>} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route exact path ="/dashboard" element ={<Layout><Dashboard/></Layout>} />
        </Routes>
    </Router>
  );
}

export default RoutesPage;
