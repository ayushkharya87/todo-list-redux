import React, { useState } from 'react';
import { AddToDo, DeleteToDo } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {

    const [data, setData] = useState("");
    const dispatch = useDispatch()
    const list = useSelector((state) => state.todoReducer.list)

  return (
    <div>
            <div className="main-div">
      <div className="child-div">
        <figcaption>Add your list here</figcaption>

        <div className="addItems">
          <input type="text"  placeholder='Add yoy Listing...' 
          value={data} onChange={(e) => setData(e.target.value)}/>

          <i className="fa-duotone fa-plus" onClick={() => dispatch(AddToDo(data), setData(""))}></i>
        </div>

         
         <div>
            {
                list.map((e) => {
                    return (
                    <div key={e.id}>
                      <h3>{e.data}</h3>
                      <i className="fa-solid fa-trash" onClick={() => dispatch(DeleteToDo(e.id), setData(""))}></i>
                    </div>
                    )
                })
            }
            
            
         </div>
      </div>
    </div>
    </div>
  )
}

export default Todo