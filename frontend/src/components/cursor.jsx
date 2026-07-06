import { useEffect, useState } from "react";
import "../styles/cursor.css";

const Cursor = () => {
  const [cursor, setCursor] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const move = (e) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        className="cur-dot"
        style={{
          transform: `translate(${cursor.x - 5}px, ${cursor.y - 5}px)`,
        }}
      />

      <div
        className="cur-ring"
        style={{
          transform: `translate(${cursor.x - 15}px, ${cursor.y - 15}px)`,
        }}
      />
    </>
  );
};

export default Cursor;
