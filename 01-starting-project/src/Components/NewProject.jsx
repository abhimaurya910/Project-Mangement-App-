import Input from '../Components/Input.jsx';
import React ,{useRef} from 'react';
import Modal from '../Components/Modal.jsx';


export default function NewProject ({onAdd , onClick}){
    const modal = useRef();
    const title = useRef();
    const description= useRef();
    const dueDate = useRef();

    const handleSave=()=>{
        const enterdtitle = title.current.value;
        const enterddescription = description.current.value;
        const enterdueDate = dueDate.current.value;

        if(enterdtitle.trim()==='' || 
        enterddescription.trim()===''||
         enterdueDate.trim()==='' )
         {
            modal.current.open();
            return;
         }


        onAdd({
        title:enterdtitle,
        description:enterddescription,
        dueDate:enterdueDate
        });

        

    }


    
        return (
            <>
            <Modal ref={modal} buttonCaption="Close" > 
                <h2  className="text-xl font text-stone-500 my-4">Some thing</h2>
                <p className="text-stone-400 mb-4">jbxjajxiasxasgs yfsgs higu uhkhgibkUcg </p>
                <p className="text-stone-400 mb-4">Plese be carefull</p>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex itmes-center justify-end gap-4 my-4'>
                    <li><button  className='text-stomne-800 hover:text-stone-950'  onClick={onClick}>Cancel</button></li>
                    <li> <button  
                    className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' 
                    onClick={handleSave}
                    >Save</button></li>
                </menu>
                <div>
                    <Input tupe="text" ref={title} label="Title"/>
                    <Input ref={description} label="Description" textarea/>
                    <Input type="date" ref={dueDate} label="Due Date"/>
                </div>
            </div>
            </>
        )
}