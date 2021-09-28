import { Container, Graphics, Sprite, Stage, useTick } from "@inlet/react-pixi";
import React from "react";
import "./App.css";

function App() {
  const [size, setSize] = React.useState(() => 10);
  const rect = React.useCallback(
    (g) => {
      g.clear();
      g.beginFill(0xeeeeee);
      g.drawRect(-size / 2, -size / 2, size, size);
      g.endFill();
    },
    [size]
  );

  const cb = useTick(() => {
    setSize(20 + Math.random() * 10);
  });

  return (
    <div className="app">
      <Stage>
        <Container
          position={[100, 100]}
          anchor={[0.5, 0.5]}
          interactive
          pointerdown={(e) => setSize(size + 10)}
        >
          <Graphics draw={rect} />
        </Container>
      </Stage>
    </div>
  );
}

export default App;
