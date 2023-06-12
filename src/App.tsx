import * as C from './app.styles';
import { useState } from 'react';

import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

import { Item } from './types/item';


const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }


  const handleDone = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }


  return (
    <C.Container>
      <C.Area>
        <C.Title>Lista de tarefas</C.Title>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={item.id} item={item} onChange={handleDone}/>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
