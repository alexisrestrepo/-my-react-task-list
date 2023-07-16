import React from 'react';
import useTaskManager from './useTaskManager';

const TaskManagerApp = () => {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();

  // Ejemplo de creación de una nueva tarea
  const handleCreateTask = () => {
    const newTaskData = {
      title: 'Nueva tarea',
      description: 'Descripción de la nueva tarea',
      // Otras propiedades de la tarea si las hay
    };
    createTask(newTaskData);
  };

  // Ejemplo de eliminación de una tarea
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  // Ejemplo de actualización de una tarea
  const handleUpdateTask = (taskId) => {
    const updatedTaskData = {
      title: 'Tarea actualizada',
      
    };
    updateTask(taskId, updatedTaskData);
  };

  return (
    <div>
      {/* Renderizar la lista de tareas */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            <button onClick={() => handleUpdateTask(task.id)}>Actualizar</button>
          </li>
        ))}
      </ul>

      {/* Botón para crear una nueva tarea */}
      <button onClick={handleCreateTask}>Crear nueva tarea</button>
    </div>
  );
};

export default TaskManagerApp;
