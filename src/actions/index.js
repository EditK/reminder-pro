import { ADD_REMINDER, DELETE_REMINDER } from '../constants';
import { bake_cookie, read_cookie} from 'sfcookies';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    console.log('action in addReminder', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log("Deleting in actions", action);
    return action;
}