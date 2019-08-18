import * as Actions from '../Actions/ActionTypes';

const CounterReducers = (state = {count: 0}, action) => {
    switch(action.type){
        case Actions.COUNTER_INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 2
            });
        case Actions.COUNTER_DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 2
            });
        default:
            return state;
    }
}

export default CounterReducers;