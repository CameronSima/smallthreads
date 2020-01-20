import React, { PureComponent, Fragment } from 'react';
import { Sidebar, MobileSidebar } from '../Sidebar/Sidebar';
import { prefetchCollection } from '../helpers';
import './Page.css';

const CenterImage = ({ image }) => (
    <div style={{ display: "inline-block" }}>
      <img className="img-fluid large-center-image"
           alt={image.alteText ? image.alteText : ''}
           src={image.large_path} 
      />
      <h4 style={{
        textAlign: "center", padding: "15px"
      }}>{image.title}</h4>
    </div>
  )

export default class Page extends PureComponent {

    componentDidMount() {
        prefetchCollection(this.props.collection);
    }

    render() {
        const collection = this.props.collection;
        const image = this.props.image;
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
};