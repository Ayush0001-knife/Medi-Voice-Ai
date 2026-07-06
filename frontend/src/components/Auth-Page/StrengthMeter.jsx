import {
  getStrength,
  strengthClass,
  strengthLabel,
} from "../../utils/passwordStrength";

function StrengthMeter({ password }) {
  const s = getStrength(password);
  const bars = [1, 2, 3, 4];
  const sc = strengthClass(s);
  const sl = strengthLabel(s);
  if (!password) return null;
  return (
    <>
      <div className="strength-row">
        {bars.map((b) => (
          <div key={b} className={`strength-bar${b <= s ? " " + sc : ""}`} />
        ))}
      </div>
      <div className={`strength-label ${sc}`}>{sl} password</div>
    </>
  );
}

export default StrengthMeter;
