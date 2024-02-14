import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

const App = () => {
  return (
    <main className="bg-gray-900 absolute h-screen w-screen p-10">
      <div>
        <TaskForm />
      </div>
      <div>
        <TaskList />
      </div>
    </main>
  );
};

export default App;
