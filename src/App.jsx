import { useState } from 'react';

export const App = () => {
  const [records, setRecords] = useState([]);

  const [studyText, setStudyText] = useState('');
  const [studyTime, setStudyTime] = useState(0);
  const [error, setError] = useState('');

  const onStudyTextChange = (e) => {
    setStudyText(e.target.value);
  };

  const onStudyTimeChange = (e) => {
    setStudyTime(e.target.value);
  };

  const onClickAdd = () => {
    setError('');
    if (studyText === '' || studyTime === '') {
      setError('入力されていない項目があります。');
      return;
    }
    const newRecords = [...records, { title: studyText, time: studyTime }];
    setRecords(newRecords);
    setStudyText('');
    setStudyTime(0);
  };

  return (
    <>
      <h1>学習記録一覧</h1>
      <div>
        <label htmlFor="study-text-input">学習内容</label>
        <input type="text" id="study-text-input" value={studyText} onChange={onStudyTextChange} />
      </div>
      <div>
        <label htmlFor="study-time-input">学習時間</label>
        <input type="number" id="study-time-input" value={studyTime} onChange={onStudyTimeChange} />
      </div>
      <p>入力されている学習内容: {studyText}</p>
      <p>入力されている学習時間: {studyTime}時間</p>
      {records.map((rec) => (
        <p key={rec.title}>
          {rec.title} {rec.time}時間
        </p>
      ))}
      <button onClick={onClickAdd}>登録</button>
      <p>
        合計時間：
        {records.reduce((sumTime, rec) => {
          return sumTime + parseInt(rec.time);
        }, 0)}
        / 1000(h)
      </p>
      {error === '' || <p>{error}</p>}
    </>
  );
};
