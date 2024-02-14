import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

const TaskForm = () => {
  const [title, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTittle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
        <input
          type="text"
          placeholder="Write your task"
          onChange={(e) => {
            setTittle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-4 w-full mb-2"
        />
        <textarea
          placeholder="Write the description in the task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-4 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
      </form>
    </div>
  );
};

export { TaskForm };
