import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
  onEnter: (taskName: string) => void;
}

export const AddArea = ({onEnter} : Props) => {
  const [inputText, setInputText] = useState('');
  
  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== ''){
      onEnter(inputText);
      setInputText('');
    }
    console.log(e.code);
  }

  return (
    <C.Container >
      <div className='img'>+</div>
      <input 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
        type='text' 
        placeholder='Adicione uma tarefa.'
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};