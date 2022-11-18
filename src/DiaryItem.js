const DiaryItem = ({ author, content, created_date, exercise, id }) => {
  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span>
          작성자: {author} | 운동시간: {exercise}{' '}
        </span>
        <br />
        <span className='date'>{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className='content'> {content} </div>
    </div>
  );
};

export default DiaryItem;
