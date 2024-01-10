import NewProject from "./Components/NewProject";
import React,{useState} from "react";
import NoprojectSelected from "./Components/NoProjectSelected";
import ProjectSidebar from "./Components/ProjectSidebar";
import SelectedProject from "./Components/SelectedProject";

function App() {


  const [selectAddProject , setSelectAddProject] = useState({
    selectedProjectId :undefined,
    projects:[],
    tasks: []

});

function handleAddTask(text){
  setSelectAddProject(prevState =>{
    const taskId = Math.random();
    const newtask ={
      text:text,
      projectId:prevState.selectedProjectId,
      id:taskId,
    };
    return {
      ...prevState,
      tasks:[newtask , ...prevState.tasks]
    }
  })
}

function handleDeleteTask(id){
  setSelectAddProject(prevState => {
    return {
      ...prevState , 
      tasks: prevState.tasks.filter( (task)=> task.id!==id),

    }
  })
}
function handelSelectedProject (id){
  setSelectAddProject(prvState =>{

    return{
      ...prvState,
     
      selectedProjectId:id,
    }
})
}

function handleAddProject (){
  setSelectAddProject(prvState =>{

      return{
        ...prvState,
       
        selectedProjectId:null,
      }
})
};

function handleAdd(projectData){
  setSelectAddProject(prevState =>{
    const newProject ={
      projectData,
      id:Math.random(),
    }
    return {
      ...prevState,
      selectedProjectId :undefined,
      projects:[...prevState.projects , newProject]
    }
  })
}

function handleCancel (){
  setSelectAddProject(prevState => {
    return {
      ...prevState , 
      selectedProjectId :undefined
    }
  })
}
function handleDelete(){
  setSelectAddProject(prevState => {
    return {
      ...prevState , 
      selectedProjectId :undefined,
      projects: prevState.projects.filter(
        (project)=> project.id!==prevState.selectedProjectId
      )

    }
  })
}

const selectedProject = selectAddProject?.projects?.find(project=> project.id===selectAddProject.selectedProjectId);

  let content=<SelectedProject project={selectedProject}  
  onDelete={handleDelete}
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={selectAddProject.tasks.filter((item)=>item.projectId===selectAddProject.selectedProjectId)}
  />;
if(selectAddProject.selectedProjectId===null)
{
 content= <NewProject onAdd={handleAdd} onClick ={handleCancel}/>
}
else if(selectAddProject.selectedProjectId===undefined)
{
  content=<NoprojectSelected onStartAddProject={handleAddProject}/>
}
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleAddProject} projects={selectAddProject}
      onClick={handelSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
