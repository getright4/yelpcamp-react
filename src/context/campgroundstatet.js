import campgroundContext from "./campgroundcontext";
import {useState} from React;
import { places, descriptors } from "../seeds/seedHelpers";
import cities from "../seeds/cities";
import Campground from  ".../Backend/models/Campground.js"




const campgroundstate = async (props)=>{
 
  const sample = array => array[Math.floor(Math.random() * array.length)];
       // const seedDB = async () => {
       // await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        var camp = new  Campground({
            //YOUR USER ID
            author: '5f5c330c2cd79d538f2c66d9',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'ddu up u0hjadjd es vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/douqbebwk/image/upload/v1600060601/YelpCamp/ahfnenvca4tha00h2ubt.png',
                    filename: 'YelpCamp/ahfnenvca4tha00h2ubt'
                },
                {
                    url: 'https://res.cloudinary.com/douqbebwk/image/upload/v1600060601/YelpCamp/ruyoaxgf72nzpi4y6cdi.png',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                }
            ]
        })
        await camp.save();
    }
    




  // for showing a campground

   const showCampground = async()=>{
    const campground = await Campground.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author');
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }
    res.grender('campgrounds/show', { campround });


   }
   










    const [camp , setcamp]= useState(camp)
    
    return (
        <NoteContext.provider value={{camp, setcamp}}>
          {props.children}
        </NoteContext.provider>
    )
}