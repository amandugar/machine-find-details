import Feedback from "../views/Feedback";
import ContactUs from "../views/ContactUs";
import ImageResult from "../views/ImageResult";
import Login from "../views/Login";
import Signup from "../views/Signup";
import History from "../views/History";
import SingleItem from "../views/SingleItem";
import CapturedImage from "../views/capturedImage";
import Chat from "../views/Chat";
import Home from "../views/home";
import { Route, Switch } from "react-router";
import Microphone from "../views/Microphone";
import AboutUs from "../views/AboutUs";
import Camera from "../containers/camera";

const Router = () => {
  return (
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
  );
};

export default Router;
