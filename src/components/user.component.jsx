import React from 'react';
import { useSelector } from 'react-redux';

const User = ({}) => {
	const allUsers = useSelector((state) => state.userReducer.allUsers);
	return (
		<div className="user">
			{allUsers.map((item, index) => (
				<img key={index} src={item.picture} alt={item.name} />
			))}
		</div>
	);
};

export default User;
