export const todosReducer = (state = [], action) => {
    if (action.type == 'todo-add') {
        return {
            name: action.payload.name
        }
    }
    return state;
}

export const todosData = [
    {
        id: Math.random(),
        text: 'Learn JS',
        isCompleted: false
    },
    {
        id: Math.random(),
        text: 'Learn html',
        isCompleted: false
    },
    {
        id: Math.random(),
        text: 'Learn Css',
        isCompleted: false
    }
];