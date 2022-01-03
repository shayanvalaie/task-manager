import { FaTimes } from 'react-icons/fa'


const Task = ({ task, onDelete, onToggle }) => {

    return (
        <div>
            <div
                className={`task ${task.reminder ? "reminder" : ""}`}
                onDoubleClick={() => onToggle(task.id)} className="task">
                <h3>{task.text} <FaTimes
                    onClick={() => onDelete(task.id)}
                    style={{
                        color: "grey", cursor: "pointer"
                    }} />
                </h3>

                <p>{task.day}</p>
            </div>
        </div >
    )
}

export default Task
