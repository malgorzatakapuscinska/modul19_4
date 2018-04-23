import uuid from 'uuid';

export const 
 	ADD_COMMENT = 'ADD_COMMENT',
	EDIT_COMMENT = 'EDIT_COMMENT',
	REMOVE_COMMENT = 'DELETE_COMMENT',
	THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
	THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
	
	

export const addComment = function addComment(text){
	return {
	type: ADD_COMMENT,
	text,
	id: uuid.v4() 
	}
}

export const editComment = function editComment(text, id){
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}

export const removeComment = function removeComment(id){
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id
    }
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id
	}
}