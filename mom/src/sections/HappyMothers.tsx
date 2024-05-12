
import confetti from "canvas-confetti"
import * as Scrollytelling from "@bsmnt/scrollytelling";

export const HappyMothers = () => {
  // Calculate animation configuration for horizontal scroll
  return (
    <Scrollytelling.Root
      defaults={{ ease: "linear" }}
      debug={{ label: "Happy Mothers" }}
      start="top bottom"
    >
      <div>
        <Scrollytelling.Waypoint at={100} onCall={() => confetti()} />
        <Scrollytelling.Pin childHeight={"0"} pinSpacerHeight={"100vh"} top={0}>
          <section className="happy-section section">
            <div className="wrapper">
              <Scrollytelling.Animation tween={{start: 0, end: 33, to: {scale: 3}}}>
                <h1>Happy</h1>
              </Scrollytelling.Animation>
            </div>
          </section>
        </Scrollytelling.Pin>
        <Scrollytelling.Pin childHeight={"0"} pinSpacerHeight={"100vh"} top={0}>
          <section className="mothers-section section">
            <div className="wrapper">
              <Scrollytelling.Animation tween={{start: 33, end: 66, to: {scale: 3}}}>
              <h1>Mother's</h1>
              </Scrollytelling.Animation>
            </div>
          </section>
        </Scrollytelling.Pin>
        <Scrollytelling.Pin childHeight={"0"} pinSpacerHeight={"100vh"} top={0}>
          <section className="day-section section">
            <div className="wrapper">
              <Scrollytelling.Animation tween={{start: 66, end: 100, to: {scale: 3}}}>
              <h1>Day!</h1>
              </Scrollytelling.Animation>
            </div>
          </section>
        </Scrollytelling.Pin>
      </div>
    </Scrollytelling.Root>
  );
};
