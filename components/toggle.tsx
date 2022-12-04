import { useTheme } from "./theme";

const height = 24;
const width = 46;
const gap = 2;
const circleSize = height - gap * 2;

export const Toggle = ({
  onToggle,
  active,
}: {
  onToggle: () => void;
  active: boolean;
}) => {
  const theme = useTheme();
  return (
    <button className="container" onClick={onToggle}>
      <div className={`circle ${active ? "right" : "left"}`} />
      <span className={`icon-left ${active ? "active" : ""}`}>☀️</span>
      <span className={`icon-right ${active ? "" : "active"}`}>🌙</span>
      <style jsx>
        {`
          .container {
            height: ${height}px;
            width: ${width}px;
            border-radius: 1000px;
            background-color: ${theme.toggleSlider};
            margin: 0 0 0 1rem;
            padding: ${gap}px;
            outline: none;
            border: 0;
            position: relative;
          }
          .circle {
            width: ${circleSize}px;
            height: ${circleSize}px;
            background-color: ${theme.toggleCircle};
            transition: all 200ms ease;
            border-radius: 1000px;
          }
          .left {
            transform: translateX(0px);
          }
          .right {
            transform: translateX(${width - circleSize - gap * 2}px);
          }
          .icon-left,
          .icon-right {
            opacity: 0;
            transition: opacity 200ms ease;
            position: absolute;
            top: 4px;
            font-size: 0.5rem;
          }
          .icon-left {
            left: 6px;
          }
          .icon-right {
            right: 7px;
          }
          .active {
            opacity: 1;
          }
        `}
      </style>
    </button>
  );
};
