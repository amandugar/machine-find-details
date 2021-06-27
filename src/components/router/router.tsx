import Feedback from "../Feedback";
import ContactUs from "../ContactUs";
import ImageResult from "../ImageResult";
import Login from "../Login";
import Signup from "../Signup";
import History from "../History";
import SingleItem from "../SingleItem";
import CapturedImage from "../capturedImage";
import Chat from "../Chat";
import Home from "../home";
import { Route, Switch } from "react-router";
import Microphone from "../Microphone";
import AboutUs from "../AboutUs";
import Camera from "../Camera/camera";

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
