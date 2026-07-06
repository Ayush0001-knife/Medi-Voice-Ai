export default function Toggle({ on, onToggle }) {
  return (
    <div className={`t-track${on ? " on" : " off"}`} onClick={onToggle}>
      <div className="t-thumb" />
    </div>
  );
}
