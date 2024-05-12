import * as Scrollytelling from "@bsmnt/scrollytelling";

export const Zoe = () => {
  return (
    <section className="zoe-section section">
      <Scrollytelling.Root
        defaults={{ ease: "linear" }}
        debug={{ label: "Zoe" }}
      >
        <Scrollytelling.Pin
          childHeight={"100vh"}
          pinSpacerHeight={"400vh"}
          top={0}
        ><Scrollytelling.Waypoint
            at={90}
            tween={{
              target: ".zoe-section",
              to: { backgroundColor: "black" },
              duration: 2,
            }}
          />
          <div className="float-container right-horiz">
            <Scrollytelling.Animation
              tween={{
                start: 70,
                end: 100,
                to: { x: "100vw" },
              }}
            >
              <img className="fullscreen" src="zoe.png"></img>
            </Scrollytelling.Animation>
            <Scrollytelling.Animation
              tween={[
                {
                  start: 70,
                  end: 100,
                  fromTo: [
                    { x: "-7vw" },
                    { x: "100vw"},
                  ],
                },
                {
                  start: 30,
                  end: 60,
                  fromTo: [
                    { x: "-100vw" },
                    { x: "-7vw", y: "15vh", rotate: 30 },
                  ],
                },
              ]}
            >
              <img className="fullscreen" src="glasses.png"></img>
            </Scrollytelling.Animation>
          </div>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>
    </section>
  );
};
