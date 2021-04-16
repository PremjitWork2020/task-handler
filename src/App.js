import './App.css';
import { Switch, Route } from 'react-router-dom';
import User from './components/user/user.component';
import Task from './components/task/task.component';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllUser } from './redux/actions/userAction';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllUser());
	}, []);
	return (
		<div>
			<Switch>
				<Route exact path="/users" component={User} />
				<Route exact path="/tasks" component={Task} />
			</Switch>
		</div>
	);
}

export default App;
