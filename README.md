# Namaste React

# parcel

- dev build
- Create local server
- HMR (Hot module Replacement) automatically refresh
- Parcel using File Watching Algorithm -- written in c++
- Caching - Faster Builds
<!-- what is parcel does ? -->
- Parcel do image optimization
<!-- when we create a production build  -->
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential bundling -support older browsers
- Diagnostic
- Error handing
- HTTps
- Tree Shaking - parcel will remove unused code for you
- Different dev and prod bundles
  Caching is a technique used in computing to store copies of frequently accessed data in a temporary storage area called a cache

#food ordering app
 

- Header
- - <Logo> </Logo>
- - nav Items
- Body
- - SearchI
- - RestaurantContainer
- - RestaurantCard
-       - image,
- Footer
- - Copyright
- - Links
- - Address
- - Contact
   */ 
#There are Two Type of Export/Imports

1.Default import and export
ex = export default components;
ex = import components from "path";

2.Named Import and Exports

export const Components;
import {component} from "path";

# React Hooks

(Normal Js utility functions)
-useState()
-useEffect()

why react is fast ?
because it has virtual DoM.it can it has diff alorithm.which every efficient.it can do efficient Dom manipulation. it can find out that diff and update the UI.this is the core of react

const [listOfRestaurant, setListOfRestaurant] = useState(resList);
why can't we just modify it directly because there need to be.
a trigger to start the default algorithm and update the UI.that
is why they created the second function to whenever you call the second function.it will automatically be render your component.
this is react algorithm.

const [listOfRestaurant, setListOfRestaurant] = useState(resList);
why we can write it in a different way.
[listOfRestaurant, setListOfRestaurant] this is array destructuring

the use state return an array a lot of people will be confused.
if we have arr;
const arr = useState();
const [listOfRestaurant, setListOfRestaurant]= arr;
listOfRestaurant = arr[0];
setListOfRestaurant = arr[1];



// if no dependency array => useEffect is called on every render
// if dependency array is empty = []=> useEffect is called on initial render(just once)
// if dependency array is [btnNameReact]=> called everyTime btnNameReact is updated
useEffect(() => {
console.log("useEffect called");
}, [btnNameReact]);


# 2 types of routing in web apps
  - Client Side Routing
  - Server Side Routing
