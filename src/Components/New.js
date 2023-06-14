import React from "react";
import PropTypes from 'prop-types'

const New=()=>{
    return(
        <div className="row">
    <h1 className="text-center">New Campground</h1>
    <div className="col-md-6 offset-md-3">
        <form action="/campgrounds" method="POST" novalidate classNameName="validated-form" enctype="multipart/form-data">
            <div className="mb-3">
                <label className="form-label" for="title">Title</label>
                <input className="form-control" type="text" id="title" name="campground[title]" required>
                 </input>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label" for="location">Location</label>
                <input className="form-control" type="text" id="location" name="campground[location]" required>
                </input>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label" for="image">Image Url</label>
                <input className="form-control" type="text" id="image" name="campground[image]" required>
                 </input>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div> 
            <div className="mb-3">
                <label className="form-label" for="price">Campground Price</label>
                <div className="input-group">
                    <span className="input-group-text" id="price-label">$</span>
                    <input type="text" className="form-control" id="price" placeholder="0.00" aria-label="price"
                        aria-describedby="price-label" name="campground[price]" required>
                    </input>
                </div>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label" for="description">Description</label>
                <textarea className="form-control" type="text" id="description" name="campground[description]"
                    required></textarea>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="mb-3">
                <div className="form-file custom-file">
                    <input type="file" className="form-file-input" id="image" name="image" multiple>
                     </input>
                    <label className="form-file-label" for="image">
                        <span className="form-file-text custom-file-label">Choose image(s)...</span>
                        <span className="form-file-button">Browse</span>
                    </label>
                </div>
            </div>
            <div className="mb-3">
                <button className="btn btn-success">Add Campground</button>
            </div>
        </form>
        <a href="/campgrounds">All Campgrounds</a>
    </div>
</div>
    )
}

export default New;