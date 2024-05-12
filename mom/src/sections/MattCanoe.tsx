import * as Scrollytelling from "@bsmnt/scrollytelling";

export const MattCanoe = () => {
  return (
    <section id="matt-canoe" className="matt-canoe-section section">
      <Scrollytelling.Root
        defaults={{ ease: "linear" }}
        debug={{ label: "MattCanoe" }}
      >
        <Scrollytelling.Pin
          childHeight={"100vh"}
          pinSpacerHeight={"400vh"}
          top={0}
        >
          <Scrollytelling.Waypoint
            at={70}
            tween={{
              target: "#matt-canoe",
              to: { background: "rgb(43, 116, 34)" },
              duration: 2,
            }}
          />
          <div className="float-container center-horiz">
            <Scrollytelling.Animation
              tween={[
                {
                  start: 0,
                  end: 100,
                  fromTo: [
                    { x: "100vw", clipPath: "inset(0px 0vw 0px 7vw)" },
                    { x: "-100vw", clipPath: "inset(0px 7vw 0px 0vw)" },
                  ],
                },
              ]}
            >
              <img className="fullscreen" src="matt-canoe-trees.png" />
            </Scrollytelling.Animation>
            <Scrollytelling.Animation
              tween={[
                {
                  start: 0,
                  end: 100,
                  fromTo: [
                    { x: "107vw", clipPath: "inset(0px 7vw 0px 0vw)" },
                    { x: "-107vw", clipPath: "inset(0px 0vw 0px 7vw)" },
                  ],
                },
              ]}
            >
              <img className="fullscreen" src="matt-canoe-water.png" />
            </Scrollytelling.Animation>
            <Scrollytelling.Animation
              tween={[
                {
                  start: 0,
                  end: 100,
                  fromTo: [
                    { x: "104vw", clipPath: "inset(0px 5vw 0px 5vw)" },
                    { x: "-107vw", clipPath: "inset(0px 2vw 0px 5vw)" },
                  ],
                },
              ]}
            >
              <img className="fullscreen" src="matt-canoe-trees-fg.png" />
            </Scrollytelling.Animation>
            <Scrollytelling.Animation
              tween={[
                {
                  start: 0,
                  end: 100,
                  fromTo: [{ x: "150vw" }, { x: "-150vw" }],
                },
              ]}
            >
              <img className="fullscreen" src="matt-canoe.png" />
            </Scrollytelling.Animation>
            {/* <Scrollytelling.Animation
              tween={[
                {
                  start: 0,
                  end: 90,
                  to: { y: "-50vh" },
                },
                {
                  start: 90,
                  end: 100,
                  fromTo: [
                    { filter: "brightness(100%)" },
                    { filter: "brightness(0%" },
                  ],
                },
              ]}
            > */}
            {/* <img className="fullscreen" src="lake-dusk-fg.png" /> */}
            {/* </Scrollytelling.Animation> */}
          </div>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>
    </section>
  );
};
