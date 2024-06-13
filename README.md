# Todo List Application

A simple and responsive Todo List application built using React.

## Features

- Add and remove tasks dynamically
- Integrate with LocalStorage for persistent data
- Mark tasks as completed or pending
- Filter tasks by status (All, Completed, Pending)
- Sort tasks by date (Default, Ascending, Descending)
- Clear all tasks with a single action
- Responsive design optimized for both mobile and desktop devices

## Technologies Used

- React.js

## Testing Guidance

To ensure the Todo List Application functions correctly, follow these testing steps:

### Prerequisites

- Clone the repository to your local machine.
- Install all dependencies with `npm install`.
- Verify the application runs locally by executing `npm run dev`.

### Testing Steps

- **Adding a Task**
  - Enter a task in the input field and click the "Add" button.
  - Verify that the task appears in the list with the correct text.

- **Deleting a Task**
  - Click the delete icon/button associated with a task.
  - Confirm that the task is successfully removed from the list.

- **Toggling Task Status**
  - Click the checkbox next to a task to toggle its completion status.
  - Ensure that the task's status updates and displays correctly.

- **Filtering Tasks**
  - Use the filter dropdown to switch between views: "All", "Completed", and "Pending".
  - Confirm that the task list updates to display tasks according to the selected filter.

- **Sorting Tasks**
  - Utilize the sort dropdown to arrange tasks by "Default", "Ascending", or "Descending" order based on date.
  - Ensure that tasks are correctly sorted according to the chosen order.

- **Clearing All Tasks**
  - Click the "Clear All" button to remove all tasks from the list.
  - Verify that all tasks are promptly cleared from the display.

By following these steps, you can verify that the Todo List Application operates as intended, delivering a seamless user experience.
