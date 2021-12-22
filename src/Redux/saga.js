import { takeLatest, put, all , call} from "redux-saga/effects";
import { deleteTodoSaga, addTodoSaga, updateTodoSaga} from "./Action";

export function* onAddTodoSaga({payload}) {
    yield put(addTodoSaga(payload));
}

export function* onDeleteTodoSaga({payload :{id}}) {
    yield put(deleteTodoSaga(id));
}

export function* onUpdateTodoSaga({payload}) {
    yield put(updateTodoSaga(payload));
}

export function* onDelete() {
    yield takeLatest("DELETE_TODOS", onDeleteTodoSaga);
}

export function* onAdd() {
    yield takeLatest("ADD_TODOS", onAddTodoSaga);
}

export function* onUpdate() {
    yield takeLatest("UPDATE_TODOS", onUpdateTodoSaga);
}

export function* todos() {
    yield all([call(onDelete), call(onAdd), call(onUpdate)]);
}