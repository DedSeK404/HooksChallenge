import { useState } from "react";
import ToDoCard from "./Todocard";

const TodoList = ({ list, handleDone, handleEdit }) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        type="date"
        onChange={(e) => setSearch(e.target.value)}
      />
      {list.filter((el)=>{
         return search === ""
         ? el
         : el.date.includes(search)
             
     }).map((el) => 
        
        <ToDoCard
          todo={el}
          key={el.id}
          handleDone={handleDone}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
};
export default TodoList;
