import DiaryItem from './DiaryItem';
const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    <div className='DiaryList'>
      <h2>식단 일기 리스트</h2>
      <h4>{diaryList.length} 개의 식단 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
