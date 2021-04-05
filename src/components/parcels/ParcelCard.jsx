export default function TaskItem({ item }) {
  // Constants
  const { sender, parcel_id, status} = item;

  return (
    <li className="task-item">
      <span>{sender}</span>
    </li>
  );
}
