import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '양하린',
    content: '샐러드',
    exercise: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '김유정',
    content: '삼겹살',
    exercise: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '하하',
    content: '치킨',
    exercise: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: '유재석',
    content: '삼계탕',
    exercise: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: '박명수',
    content: '피자',
    exercise: 2,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className='App'>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
