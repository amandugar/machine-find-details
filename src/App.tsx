import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Camera from "./components/camera";
import CapturedImage from "./components/capturedImage";
import Chat from "./components/Chat";
import Home from "./components/home";
import Microphone from "./components/Microphone";
import Navbar from "./components/Navbar";
import Feedback from "./components/Feedback";
import ContactUs from "./components/ContactUs";
import ImageResult from "./components/ImageResult";
import Login from "./components/Login";
import Signup from "./components/Signup";
import History from "./components/History";
import SingleItem from "./components/SingleItem";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/camera">
            <Camera />
          </Route>
          <Route exact path="/captured-image">
            <CapturedImage />
          </Route>
          <Route exact path="/image-result">
            <ImageResult />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/microphone">
            <Microphone />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/single-item">
            <SingleItem />
          </Route>
          <Route exact path="/feedback">
            <Feedback />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
