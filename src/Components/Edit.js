import React from "react";

const Edit= ()=>{
    return(
        <div class="row">
    <h1 class="text-center">Edit Campground</h1>
    <div class="col-md-6 offset-md-3">
        <form action="/campgrounds/<%=campground._id%>?_method=PUT" method="POST" novalidate class="validated-form"
            enctype="multipart/form-data">
            <div class="mb-3">
                <label class="form-label" for="title">Title</label>
                <input class="form-control" type="text" id="title" name="campground[title]" 
                    value="<%=campground.title %>" required>
                </input>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label" for="location">Location</label>
                <input class="form-control" type="text" id="location" name="campground[location]"
                    value="<%=campground.location %>" required>
                </input>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label" for="price">Campground Price</label>
                <div class="input-group">
                    <span class="input-group-text" id="price-label">$</span>
                    <input type="text" class="form-control" id="price" placeholder="0.00" aria-label="price"
                        aria-describedby="price-label" name="campground[price]" value="<%=campground.price %>"
                        required>
                    </input>
                     <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label" for="description">Description</label>
                <textarea class="form-control" type="text" id="description" name="campground[description]"
                    required><%= campground.description%></textarea>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="mb-3">
                <div class="form-file custom-file">
                    <input type="file" class="form-file-input" id="image" name="image" multiple>
                     <label class="form-file-label" for="image">
                        <span class="form-file-text custom-file-label">Add more image(s)...</span>
                        <span class="form-file-button">Browse</span>
                    </label>
                </div>
            </div>
            <div class="mb-3">
                 campground.images.forEach(function(img, i) {  

                <img src="<%=img.thumbnail %>" class="img-thumbnail" alt="">
                <div class="form-check-inline">
                    <input type="checkbox" id="image-<%=i%>" name="deleteImages[]" value="<%=img.filename%>">
                </div>
                <label for="image-<%=i%>">Delete?</label>
                 })
            </div>
            <div class="mb-3">
                <button class="btn btn-info">Update Campground</button>
            </div>
        </form>
        <a href="/campgrounds/<%= campground._id%>">Back To Campground</a>

    </div>
</div>
    )
}

export default Edit;