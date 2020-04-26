export const ADD_TODO = 'add_todo'

let nextTodoId = 0;

export function addTodo(text) {
	return {
		type: ADD_TODO,
		id: nexTodoId++,
		text
	};
}
