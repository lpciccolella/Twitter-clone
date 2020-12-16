import{ combineReducers } from 'redux'; 
import users from './users.reducer'; 
import auth from './auth.reducer'; 
import posts from './posts.reducer'; 

export default combineReducers ({ 
    users,
    posts,
    auth,
});
