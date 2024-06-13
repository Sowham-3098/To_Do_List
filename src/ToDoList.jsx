import React, { useState, useEffect } from 'react';
import './ToDoList.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Import icons from FontAwesome

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [filter, setFilter] = useState('default');
    const [sort, setSort] = useState('default');
    const [error, setError] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!newTask.trim()) {
            setError('Please enter a task.');
            return;
        }

        if (!taskDate.trim()) {
            setError('Please enter a date.');
            return;
        }

        if (newTask.trim().length > 40) {
            setError('Task must be below 40 characters.');
            return;
        }

        setTasks([...tasks, { id: Date.now(), text: newTask.trim(), date: taskDate, completed: false }]);
        setNewTask('');
        setTaskDate('');
        setError('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    const removeTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    };

    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const clearAllTasks = () => {
        setTasks([]);
    };

    const filteredTasks = tasks.filter(task =>
        filter === 'completed' ? task.completed : filter === 'pending' ? !task.completed : true
    );

    const sortedTasks = filteredTasks.sort((a, b) => {
        if (sort === 'ascending') {
            return new Date(a.date) - new Date(b.date);
        } else if (sort === 'descending') {
            return new Date(b.date) - new Date(a.date);
        }
        return 0; // Default or no sorting
    });

    return (
        <div className="todo-container">
            <h1>Manage Your Tasks</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your todo here..."
                />
                <input
                    type="date"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                />
                <button className="add-task-button" onClick={addTask}>+</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="filter-sort-container">
                <div className="filter-container">
                    <label>Filter</label>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="default">All</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="sort-container">
                    <label>Sort</label>
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
                <button className="clear-all-button" onClick={clearAllTasks}>Clear All</button>
            </div>
            <ul className="task-list">
                {sortedTasks.map((task) => (
                    <li key={task.id} className={`task-item ${task.completed ? 'completed' : 'pending'}`}>
                        <span>{task.text}</span>
                        <span>{task.date}</span>
                        <button className="complete-button" onClick={() => toggleTaskCompletion(task.id)}>
                            <FontAwesomeIcon icon={faCheckCircle} /> {/* Complete Icon */}
                        </button>
                        <button className="remove-button" onClick={() => removeTask(task.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} /> {/* Delete Icon */}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
