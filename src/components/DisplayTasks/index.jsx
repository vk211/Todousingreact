

export default function DisplayTasks({ tasks }) {
  return (
    <ol>
      {tasks.map((eachTask) => (
        <li> {eachTask} </li>
      ))}
    </ol>
  );
}
