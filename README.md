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
    \*/
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
because it has virtual DoM.it can it has diff alorithm.which every efficient.it can do efficient Dom manipulation. it can findout that diff and update the UI.this is the core of react

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

# life cycle of class Based Component

when the parent component is loaded first of all the
constructor call -> render()method is called ->on process child component there
then it's trigger life cycle of child
child constructor call -> render() method called -> once the mounting of this component is
finished now the componentdidmount() called
->once component has been mounted then after component did mount will be called
then whole child component mount successfully
than componentDidMount() will be called .

what is use of componentDidMount()?
componentDidMount use to make api calls.

somethings new
life cycle of class Based Component has to phase
1.render phase -> has constructor and render method
2.commit phase -> react actually updates DOM and componentDidMount is called

react will batch the render phase for the two child

/\*

- parent constructor
- parent render

  - first constructor
  - first render

  - second constructor
  - second render
    diff is calculated and reconciliation has triggered now after that Batched

Dom updates in Single batch

- first componentDidMount
- second componentDidMount

- parent componentDidMount
  \*/

# es-9 optimizing our app

what does means of single responsibility principle?

# hook

hook is whether it is our custom hook or whether that hook is given by library.
end of the day, a hook is just utility function ,normal function.

we will just take out some responsibility from a component and extract it inside a hook so that our hook and our component become more modules and more readable.

how are code more optimized ?

# custom hook

why i need to create custom hook ?

->first create custom hook think this steps

- what is hook is doing .
- what is it getting there as the input .
- what it is getting as a output.
- what is contract of hook.

# parcel

what is parcel ?
parcel is basically a bundles.basic and important work of bundler is to bundle to our application.
what is meaning of bundle our application?
it means that it actually takes all your files and make it into one it bundles all. your files into one file.
everything that is happening on your web page is happening through one js file all that code is present in one js file. and your parcel is made one js file

# lazy loading

let's take example of Grocery mini application
so we don't import directly Grocey component in app.js file.

when our app will loads initially , our home page will load it will not load the code of Grocery.
when i goto grocery page then it will load the code of Grocery
this is knows as lazy loading and on-demand loading 

setup lazy then get error a component suspended while responding to synchronous input.
let understand what happened actually.
when we load this home page ,we only got one file. and that page doesn't not have grocery cod on demand.
when i click on grocery then will be loaded grocery code .if i click on grocery then get  though error something went wrong??
because this grocery code takes 12 millisecond to come to the browser .
react tried to load the grocery component but the code was not there so that is why react suspended the rendering . grocery code was not there.
take few second to fetch the data of grocery .so at that particular time that middle state.
causes that error.
how to hanlde that state we will use suspense.  

=>suspense is component that come's from the react library.
wrap your component around it and give it a placeholder (fallback) 
what should react render when code is not available kind of loading screen.

https://tailwindcss.com/
sass vs scss
https://styled-components.com/
https://mui.com/
https://getbootstrap.com/
https://chakra-ui.com/
https://ant.design/