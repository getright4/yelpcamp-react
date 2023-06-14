import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import{usestate, Link} from 'react-router-dom'
import { useContext } from 'react'

const Show = () => {

   const campground =  


  return (
    <link rel="stylesheet" href="/stylesheets/stars.css">
    <div classNameName="row">
        <div classNameName="col-6">
            <div id="campgroundCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                     campground.images.forEach((img, i) => {  
                    <div className="carousel-item <%= i === 0 ? 'active' : ''%>">
                        <img src="<%= img.url%>" className="d-block w-100" alt=""/>
                    </div>
                    }) 
    
                </div>
                 if(campground.images.length > 1) {
                <a className="carousel-control-prev" href="#campgroundCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#campgroundCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                 } 
            </div>
    
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{campground.title} </h5>
                    <p className="card-text"> {campground.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-muted">{campground.location}</li>
                    <li className="list-group-item">Submitted by {campground.author.username} </li>
                    <li className="list-group-item">$ {campground.price/night}</li>
                </ul>
                 if( currentUser && campground.author.equals(currentUser._id))  {
                <div className="card-body">
                    <a className="card-link btn btn-info" href="/campgrounds/<%=campground._id%>/edit">Edit</a>
                    <form className="d-inline" action="/campgrounds/<%=campground._id%>?_method=DELETE" method="POST">
                        <button className="btn btn-danger">Delete</button>
                    </form>
                </div>
                 } 
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
    
        </div>
        <div className="col-6">
            <div id='map' ></div>
    
             if(currentUser){ 
            <h2>Leave a Review</h2>
            <form action="/campgrounds/<%=campground._id%>/reviews" method="POST" className="mb-3 validated-form" novalidate>
                 <div className="mb-3">
                    <label className="form-label" for="rating">Rating</label>
                    <input className="form-range" type="range" min="1" max="5" name="review[rating]" id="rating">
                </div> -->
                <fieldset className="starability-basic">
                    <input type="radio" id="no-rate" className="input-no-rate" name="review[rating]" value="1" checked
                        aria-label="No rating." />
                    <input type="radio" id="first-rate1" name="review[rating]" value="1" />
                    <label for="first-rate1" title="Terrible">1 star</label>
                    <input type="radio" id="first-rate2" name="review[rating]" value="2" />
                    <label for="first-rate2" title="Not good">2 stars</label>
                    <input type="radio" id="first-rate3" name="review[rating]" value="3" />
                    <label for="first-rate3" title="Average">3 stars</label>
                    <input type="radio" id="first-rate4" name="review[rating]" value="4" />
                    <label for="first-rate4" title="Very good">4 stars</label>
                    <input type="radio" id="first-rate5" name="review[rating]" value="5" />
                    <label for="first-rate5" title="Amazing">5 stars</label>
                </fieldset>
                <div className="mb-3">
                    <label className="form-label" for="body">Review Text</label>
                    <textarea className="form-control" name="review[body]" id="body" cols="30" rows="3" required></textarea>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
             } 
             for(let review of campground.reviews) { 
            <div className="card mb-3 ">
                <div className="card-body">
                    <h5 className="card-title"> {review.author.username} </h5>
                    <p className="starability-result" data-rating="{review.rating}">
                        Rated: {review.rating }  stars
                    </p>
                     <h6 className="card-subtitle mb-2 text-muted">By {review.author.username}</h6> -->
                    <p className="card-text">Review: {review.body }</p>
                     if( currentUser && review.author.equals(currentUser._id))  {
                    <form action="/campgrounds/<%=campground._id%>/reviews/<%=review._id%>?_method=DELETE" method="POST">
                        <button className="btn btn-sm btn-danger">Delete</button>
                    </form>
                    <} 
                </div>
            </div>
             } 
        </div>
    </div>
    
    <script>
        const mapToken = '{-process.env.MAPBOX_TOKEN}';
        const campground = {- JSON.stringify(campground) }
    </script>
    
    <script src="/javascripts/showPageMap.js"></script>
  )
}

export default Show

const styles = StyleSheet.create({})