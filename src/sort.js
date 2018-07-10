export const sortType = {
	SORT_BY_DATE: 'Sort by date',
	SORT_BY_PRIORITY: 'Sort by priority'
};

export const sortByDate = (tasks, isAscOrder) => {
	if (isAscOrder) {
		return tasks.sort((task1, task2) => {
			let date1 = new Date(task1.endDate);
			let date2 = new Date(task2.endDate);
			var timeDiff = date1.getTime() - date2.getTime();
			return timeDiff;
		});
	}
	return tasks.sort((task1, task2) => {
		let date1 = new Date(task1.endDate);
		let date2 = new Date(task2.endDate);
		var timeDiff = date2.getTime() - date1.getTime();
		return timeDiff;
	});
};
export const sortByPriority = (tasks, isAscOrder) => {
	if (isAscOrder) {
		return [ ...tasks ].sort((task1, task2) => {
			return task1.priority - task2.priority;
		});
	}
	return [ ...tasks ].sort((task1, task2) => {
		return task2.priority - task1.priority;
	});
};
