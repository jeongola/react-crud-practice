import React, { useContext, useRef, useState } from 'react';
import { DiaryDispatchContext } from './App';

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const [state, setState] = useState({
    author: '',
    content: '',
    exercise: 1,
  });

  const authorInput = useRef();
  const contentInput = useRef();

  const handleChangeDiary = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.exercise);
    alert('저장 성공');
    setState({
      author: '',
      content: '',
      exercise: '',
    });
  };

  return (
    <div className='DiaryEditor'>
      <h2>오늘의 식단</h2>
      <div>
        <input ref={authorInput} name='author' value={state.author} onChange={handleChangeDiary} />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name='content'
          value={state.content}
          onChange={handleChangeDiary}
        />
      </div>
      <div>
        <span>오늘의 운동 시간: </span>
        <select name='exercise' value={state.emotion} onChange={handleChangeDiary}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
