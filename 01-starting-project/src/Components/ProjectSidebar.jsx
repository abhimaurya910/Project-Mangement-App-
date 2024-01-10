import Button from '../Components/Button.jsx'

export default function ProjectSidebar  ({
    onStartAddProject ,
     projects ,
      onClick
    }){
       const selectedProjectId=projects.selectedProjectId;
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:72 rounded-r-xl">
            <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Project</h1>
            <div>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul>
            
            {projects?.projects?.map((project) => {
                let cssClasess ="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

                if(project.id=== selectedProjectId){
                    console.log("project.id if" ,selectedProjectId, project.id)
                    cssClasess += " bg-stone-800 text-stone-400";
                }
                else{
                    console.log("project.id else" ,selectedProjectId, project.id)
                    cssClasess += " text-stone-400";
                }

                return( <li key={project.id}>
                    <button  className={cssClasess} onClick={() =>onClick(project.id)}>
                        {project?.projectData?.title}</button>
                </li>);
                
               
                })}
        
            </ul>
        </aside>
    )
}