export const addTodos = (todo) => ({
    type: "ADD_TODOS",
    payload: todo,
});

export const deleteTodos = (id) => ({
    type: "DELETE_TODOS",
    payload: id,
});

export const updateTodos = (todo) => ({
    type: "UPDATE_TODOS",
    payload: todo,
});

export const addTodoSaga = (todo) => ({
    type: "ADD_TODO_SAGA",
    payload: todo,
});

export const deleteTodoSaga = (todo) => ({
    type: "DELETE_TODO_SAGA",
    payload: todo,
});

export const updateTodoSaga = (todo) => ({
    type: "UPDATE_TODOS_SAGA",
    payload: todo,
});