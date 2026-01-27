export const App = () => {
  const records = [
    { title: '勉強の記録1', time: 1 },
    { title: '勉強の記録2', time: 3 },
    { title: '勉強の記録3', time: 5 },
  ];
  const test = 'a';

  return (
    <>
      <h1>学習記録一覧</h1>
      {records.map((rec) => (
        <p key={rec.title}>
          {rec.title} {rec.time}時間
        </p>
      ))}
    </>
  );
};
