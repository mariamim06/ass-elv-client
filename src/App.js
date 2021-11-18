import logo from './logo.png';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import About from './Pages/About/About';
import AddPackage from './Pages/AddPackage/AddPackage';
import ManagePackages from './Pages/ManagePackages/ManagePackages';
import BookingReview from './Pages/BookingReview/BookingReview';
import Footer from './Pages/Shared/Footer/Footer';
import ManageBookings from './Pages/ManageBookings/ManageBookings';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
      <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
         

          <PrivateRoute path="/booking/:packageId">
            <Booking></Booking>
          </PrivateRoute>
          
          <Route path="/addPackage">
            <AddPackage></AddPackage>
          </Route>
          <Route path="/managePackages">
            <ManagePackages></ManagePackages>
          </Route>
          <Route path="/bookingReview">
            <BookingReview></BookingReview>
          </Route>
          <Route path="/manageBookings">
            <ManageBookings></ManageBookings>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route> 
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
