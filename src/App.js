import React, { Fragment, Component } from 'react';
import NavBar from './Nav/Navbar';
import { Sidebar, MobileSidebar } from './Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import imageConfig from './image_config';
import { buildImageConfig, getRandomImage, getRandomCollection } from './helpers';
import './App.css';

const ImageConfig = buildImageConfig(imageConfig);

const CenterImage = ({ image }) => (
  <div style={{ display: "inline-block" }}>
    <img className="img-fluid" src={image.large_path} />
    <h4 style={{
      textAlign: "center", padding: "15px"
    }}>{image.title}</h4>
  </div>
)

const Contact = () => (
  <a href="mailto:dmmcelroy@gmail.com">
    <h1 className="email">dmmcelroy@gmail.com</h1>
  </a>

)

const Page = ({ collection, image }) => {

  console.log("COLLECTION", collection)

  // prefetch collection images
  collection.images.forEach(image => {
    const i = new Image();
    i.src = image.large_path;
  });

  return (
    <Fragment>
      <div className="row text-center d-md-none"
        style={{ overflowX: "auto", marginTop: "20px" }}>
        <MobileSidebar images={collection.images} />
      </div>

      <div className="row text-center" style={{ marginTop: "16px" }}>
        <div className="col-2 d-none d-md-block col-fluid">
          <Sidebar images={collection.images} />
        </div>
        <div className="col-12 col-md-10">
          <CenterImage image={image} />
        </div>
      </div>
    </Fragment>
  )
}

const HomePage = () => {
  const defaultCollection = ImageConfig.find(config => config.collection === "Landscapes");
  const defaultImage = getRandomImage(defaultCollection);

  return (
    <Page
      collection={defaultCollection}
      image={defaultImage}
    />)
}

const Collection = ({ match, page }) => {
  let collection = ImageConfig.find(collection =>
    collection.path === match.params.collection_path
  );

  if (!collection) {
    collection = getRandomCollection(ImageConfig);
    return <Redirect to={collection.url} />
  }

  return (
    <Fragment>
      <Route
        exact
        path={match.path}
        render={() => {
          const image = getRandomImage(collection);
          return <Page collection={collection} image={image} />
        }}
      />
      <Route
        path={`${match.url}/:image_path`}
        render={({ match }) => {
          let image = collection.images.find(image =>
            image.path === match.params.image_path
          );

          if (!image) {
            image = getRandomImage(collection);
            return <Redirect to={image.url} />
          }
          return <Page collection={collection} image={image} />

        }}
      />
    </Fragment>
  )

}

class App extends React.PureComponent {

  state = {
    page: 'Home'
  }

  navigate = (page) => {
    this.setState({
      page: page
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">

            <header className="App-header">
              <NavBar
                navigate={this.navigate}
                page={this.state.page}
              />
            </header>

            <Route
              path='/' exact
              component={HomePage}
            />

            <Route
              path='/contact/'
              component={Contact}
            />

            <Route
              path='/images/:collection_path'
              render={({ match }) =>
                <Collection match={match} page={this.state.page} />
              }
            />

          </div>
        </div>
      </Router>
    )
  }
}

const Footer = () => (
  <footer className="navbar fixed-bottom">
    <div class="d-none d-md-block footer-copyright text-center py-3">{`© ${new Date().getFullYear()} Small Threads`}
    </div>
  </footer>
)

export default App;
