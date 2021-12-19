// A simple redux basic funcationality implementaion using class method
// This program contains the following features
// You can increment counter
// You can decrement counter
// You will get an update with change in state if 
// You can subscribe Notification and also unsubscribe them


const reducer = (state, action) =>{
    // state is : currentState , action is : payload
    switch(action.type){
        case "INCREMENT_COUNTER":{
            return {
                ...state,count: state.count + action.payload
            }
        }
        case "DECREMENT_COUNTER":{
            return{
                ...state,count: state.count - action.payload
            }
        }
        default:{
            return state
        }
    }
}


class Store{
    #state
    #reducer
    #listener
    constructor(reducer,initialState){
        this.#state =initialState;
        this.#reducer = reducer;
        this.#listener = []
    }
    getState(){
        return this.#state;
    }
    dispatch(action){
        this.#state = this.#reducer(this.#state,action);
        this.#notify();
    }
    subscribe(callback){
        this.#listener.push(callback);
        const index = this.#listener.indexOf(callback);
        return ()=>{
            this.#listener = this.#listener.filter(a=>a!==callback);
        }
    }
    #notify(){
        for(let listener of this.#listener){
            listener(this.#state);
        }
    }
}

const store = new Store(reducer, {count : 1})

const incrementCounter = (amount) => ({type: "INCREMENT_COUNTER", payload: amount})
const decrementCounter = (amount) => ({type: "DECREMENT_COUNTER", payload: amount})

const action = incrementCounter(7);
const action2 = decrementCounter(4);

store.subscribe( ()=>{console.log("something has changed");}   )

const unsubscribe_three = store.subscribe(()=>{console.log("user 3 is unsubscribed");})

store.dispatch(action);
console.log(store.getState());

unsubscribe_three();

store.dispatch(action);
console.log(store.getState());

store.dispatch(action2);
console.log(store.getState());
