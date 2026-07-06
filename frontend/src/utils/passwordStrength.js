export function getStrength(pw) {
  if (!pw) return 0;
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s; // 0-4
}
export function strengthLabel(s) {
  if (s === 0) return "";
  if (s <= 1) return "Weak";
  if (s <= 2) return "Fair";
  if (s <= 3) return "Good";
  return "Strong";
}
export function strengthClass(s) {
  if (s <= 1) return "s-weak";
  if (s <= 2) return "s-medium";
  return "s-strong";
}