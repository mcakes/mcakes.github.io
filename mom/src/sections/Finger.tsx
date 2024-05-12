import * as Scrollytelling from "@bsmnt/scrollytelling";

export const Finger = () => {
  return (
    <section className="finger-section section">
      <Scrollytelling.Root
        defaults={{ ease: "linear" }}
        // debug={{ label: "Finger" }}
      >
        <Scrollytelling.Pin childHeight={"0"} pinSpacerHeight={"300vh"} top={0}>
          <img className="fullscreen" src="mom-wo-finger.png"></img>
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 70,
              to: { y: '-100vh'},
            }}
          >
            <img className="fullscreen finger" src="mom-finger.png"></img>
          </Scrollytelling.Animation>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>
    </section>
  );
};
