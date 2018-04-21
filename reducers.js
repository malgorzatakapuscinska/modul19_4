import actions from './actions';

/*import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';*/

const initialState = {
	comments: [],
	users: []
};

function reducer(state = initialState, action){
	switch(action.type){
		case ADD_COMMENT:
			return Object.assign({}, state, {
				comments: [
					{
						id: action.id,
						text: action.text,
						votes: 0
					}
				, ...state]
			});
		
		case REMOVE_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id)
			});
			
		case EDIT_COMMENT:
			return Object.assign({}, state, {
				comments: [() => {
						// znaleźć edytowany komentarz
						
						const Comment = state.comments.filter(comment => comment.id === aciion.id);
						
						//nadpisać tekst komentarza
						
						Comment.text = action.text;
						
			
						// zwrócić wynik w postaci tablicy
						
						return comment;
						
					}, ...state]
				});
			
		default: 
			return state;
	}
	return state;
}

console.log(reducer(state, addComment('test',1)));