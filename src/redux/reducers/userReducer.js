import { actionConstants } from '../actionConstants';

const initailState = {
	allUsers: [],
};

const userReducer = (state = initailState, action) => {
	console.log(action);
	switch (action.type) {
		case actionConstants.FETCH_USERS:
			return {
				...state,
				allUsers: [...action.allUsers],
			};
		default:
			return {
				...state,
			};
	}
};

export default userReducer;
