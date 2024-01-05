import "../App.css";

function ScreenSize({ windowSize }) {
  return (
    <div>
      <h2>Screen Size</h2>
      <h4>
        {windowSize.width}/{windowSize.height}
      </h4>
    </div>
  );
}

export default ScreenSize;
