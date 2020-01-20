import React, { Fragment } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Thumbnail = ({ image, mobile = false }) => (
    <Fragment key={image.path + mobile ? "_mobile" : ""}>
        <Link to={image.url}>
            <img className="sidebar-image" src={image.thumbnail_path} />
        </Link>
    </Fragment>
)

export const MobileSidebar = ({ images }) => (
    <div className="sidebar-mobile">

        {images.map(image =>
            <div key={image.title + "_mobile"}
            style={{
                width: "80px", margin: "0px 5px 0px 5px"
            }}>
                <Thumbnail image={image} mobile={true} />
            </div>
        )}
    </div>

)


export const Sidebar = ({ images }) => (

    <div className="sidebar">
        <div>
            {images.map(image => <Thumbnail key={`image_thumb_${image.path}`} image={image} />)}
        </div>
    </div>
)

