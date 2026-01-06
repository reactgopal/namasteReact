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
when i click on grocery then will be loaded grocery code .if i click on grocery then get though error something went wrong??
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

# Higher order components

- higher order components is a function that takes a component and returns a components.
- higher order components they just take a components and they just returns another components outside.that component is an enhanced version of the input components that's all is our higher order components.

# All the react app they have two important layers

1.UI layers
2.Data layers
UI layers is powered by data layers
when i say ui layers it is mostly consisting of what jsx the code you write inside jsx that is ui layer.
data layer is your state , props, local variables ,your curly braces inside your jsx.
that javascript code that you write is all modifying the data layer.

#

Restaurant Category are maintaining their own states.
if i click on another restaurant category . i want all the other restaurant category to know
that newly added has been expanded. if i click on category.i want my recommended to collapse
itself.
create this type of feature. because each of these restaurant category have their onw state.
they are managing their own state and own show items. they are controlling.

i want this state to be lifted up.
i don't give the power of show and collapse item list.
i will give the power of show and expand and collapse to the parent of this child.

i want to give power to restaurant menu to parent of show and expand to restaurant menu.

controlled and uncontrolled components.
RestaurantCategory is controlled components
RestaurantMenu menu is controlling the RestaurantCategory components basically.
when its had own state it was an uncontrolled components because restaurant menu does not have i s control .

# props drilling

props drilling is data passing to parent to child ,child to under of this child.

# react context

create context
react gives us access to a important utility function that is known as create context.
this create context comes from react library.

while we creating context we give it central information to global object.

while we use context,we can just avoid the props drilling.
context = which is kind of like a global place where your data is kept and anybody can access it.that is know as react concept context.

context is global space i can provide to whole app and just small portion of app

# let's build Our store

why do we use redux?
when you're building a large-scal application redux offers you a great solution for it right handling data,managing your store .

- redux is primarily used for handling state of our application.
- easier to debug our application.
- redux offers state managements.

react-redux library is kind of like a bridge between react and redux.
redux-toolkit

creating cart information store for that using redux toolkit.

# Episode-12 | Let's Build Our Store

# redux toolkit

- INSTALL @reduxjs/toolkit and react-redux
- build our Store
- connect our store to our app
- create a slice (cartSlice)
- dispatch (action)
- reducers
- selector

->store-
we will use a function which is known as configurestore for create on store.

provide the store to our application
how to provide?
something know as provider from react-redux.

there is diff between two libraries this reduxjstoolkit and rtk library has thing to do with redux
so creating a store a redux thing.

provide this store to application so it's kind a bridge of between our react and redux.

->slice
createSlice is function and this function take a configuration to create slice.
configuration is name of slice,intialstate
createSlice take a configuration .
1.name of the slice.
2.initial state is object.
2.initialState :{
items:[]||{}
}
reducers functions is corresponding to those action for each action(For every action, there is a reducer function that decides how the state should change.)

3.reducers :{
additemaction:(state,action)=>{
->action means we will get this payload when we will call this addItemAction
}
}

{
actions:{

},
reducer
}

4.two think to import action and reducers.

reducer is responsiable to modify the app store.
reducer in store is a combination of different small stores. for each slice we have a different reducers.

//mutating the state means directly modifying the state

//subscribing to the store using a selector
useselector() hook is give us a access of a store.

---

appStore in reducer is combination of different small stores.
const cartItems = useSelector((store) => store.cart.items);
in this store will give full access fo stores.

dispatch is function

const handleItem = ()=>{
dispatch(addItem("pizza")); <- ("") ma je pass karu te maru payload che
{
payload:pizza
}
}
why the name is selector because you are selecting a portion of the store.

interviewer asking question
when you are using useSelector make usre you are subscribing to the right portion of the store.

if you don't subscribe to the right portion of the store so then it will be a {{big performance loss}}
let me tell you why ?

const itemList = useSelector((store) => store.cart.items);

const store = useSelector((store) => store);
const Cartitems = store.cart.items;

both code are same

now i am subscribing to the whole store,
1.const store = useSelector((store) => store);
and i am extracting my items .
2.const Cartitems = store.cart.items;

but this is very less efficient store.cart.items.

when we writing this store variable subscribing whole store. whenever anything change inside the store.your cart component will get to know .basically
the store variable wil be updated whenever anything change in the store and whole to store you don't want to update and subscribe whole store.
suppose if something is happening inside another slice userlogged in it has nothing to do with cart .
so why we subscribe to store variable.
better performane way is to only subscribe to a specific portion of the store.

reducer can be a combination of small reducers.

export default cartSlice.reducer;

above line reducer is a combination of small reducer function. that i write under action.

if we are mutating the state over here.
state.items.push(action.palyoad);

then what is redux doing behind the scenes?
redux is mutating , redux is creating an immutable state.

but it is not asking develoers to do it .
i have to just mutate the state. and it works perfetcly
fine.
redux uses something known as Immer library.
immer library is kind of like finding the difference between
the original state. the mutated state and then give you back the new state.
which is an immutable state. a new copy of the state.
