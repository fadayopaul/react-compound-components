import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
        positionCOunt="top"
      /> */}

      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <div>
          <Counter.Decrease icon="◀" />
          <Counter.Count />
          <Counter.Increase icon="▶" />
        </div>
      </Counter>

      <div>
        <Counter>
          <div>
            <Counter.Decrease icon="-" />
            <Counter.Count />
            <Counter.Increase icon="+" />
          </div>
        </Counter>
      </div>
    </div>
  );
}
