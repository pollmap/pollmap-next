// CSS-only 3-layer starfield. 클라이언트 hydration 불필요 — 정적 렌더.
// box-shadow 별 좌표는 styles/starfield.css 에서 관리.

export function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      <div className="stars-1" />
      <div className="stars-2" />
      <div className="stars-3" />
    </div>
  );
}

export default Starfield;
