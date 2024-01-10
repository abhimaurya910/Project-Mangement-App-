import NewTask from "./NewTask";

export default function Task({ tasks,onAdd, onDelete}){

    return(
        <section>
            <h1 className="text-2xl font-bold text-stone-700 mb-4">TASK</h1>
            <NewTask onAdd={onAdd}/>
            {tasks.length===0&&<p className="text-stone-800 mb-4">This Projec didnot add task yet.</p>}
           {tasks.length>0&& (
           <ul className="p-4 mt-8 rounded-md bg-ston-100">
            {tasks.map((task)=>
             <li key={task.id} className="flex justify-between my-4"><span>{task.text}</span>
            <button className="text-stone-700 hover:text-red-500"
            onClick={()=>onDelete(task.id)}>
                Delete
                 </button>
            </li>)}
            </ul>)}
        </section>
    )
}