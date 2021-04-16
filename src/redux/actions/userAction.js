import axios from 'axios';
import { actionConstants } from '../actionConstants';

var config = {
	method: 'get',
	url: 'https://devza.com/tests/tasks/listusers',
	headers: {
		AuthToken: 'M5xwaKuTReAR8L2GduzHw55yvXw6UdOQ',
	},
};

export const fetchAllUser = () => async (dispatch) => {
	try {
		const response = await axios(config);
		const data = await response.data;
		dispatch({
			type: actionConstants.FETCH_USERS,
			allUsers: data.users,
		});
	} catch {}
};
