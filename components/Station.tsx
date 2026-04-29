// 회전하는 우주 정거장 디스크 — 360s linear infinite.
// conic-gradient 스포크 + 이중 mask radial-gradient.
// prefers-reduced-motion 시 정지 (CSS 에서 처리).

export function Station() {
  return (
    <div className="station-wrap" aria-hidden="true">
      <div className="station-disk">
        <div className="station-spokes" />
      </div>
    </div>
  );
}

export default Station;
