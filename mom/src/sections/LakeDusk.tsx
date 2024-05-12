import { useMemo } from "react";
import * as Scrollytelling from "@bsmnt/scrollytelling";

export const LakeAtDusk = () => {
  const loonSound = useMemo(() => new Audio("loon.mp3"), []);

  return (
    <section className="lake-at-dusk-section section">
      <Scrollytelling.Root
        defaults={{ ease: "linear" }}
        // debug={{ label: "LakeAtDusk" }}
        end={"bottom top"}
      >
        <Scrollytelling.Pin
          childHeight={"100vh"}
          pinSpacerHeight={"400vh"}
          top={0}
        >
          <Scrollytelling.Waypoint at={95} onCall={() => loonSound.play()} />
          <div className="float-container center-horiz">
            <Scrollytelling.Animation
              tween={[
                {
                  start: 0,
                  end: 90,
                  to: { y: "-10vh" },
                },
                {
                  start: 0,
                  end: 100,
                  fromTo: [
                    { filter: "brightness(100%)" },
                    { filter: "brightness(0%)" },
                  ],
                },
              ]}
            >
              <img className="fullscreen" src="lake-dusk-sky.png" />
            </Scrollytelling.Animation>
            <Scrollytelling.Animation
              tween={[
                {
                  start: 0,
                  end: 90,
                  to: { y: "-18vh" },
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
            >
              <img className="fullscreen" src="lake-dusk-trees.png" />
            </Scrollytelling.Animation>
            <Scrollytelling.Animation
              tween={[
                {
                  start: 0,
                  end: 90,
                  fromTo: [
                    { clipPath: "inset(0% 0% 0% 0%)" },
                    {
                      y: "-20vh",
                      clipPath: "inset(0% 0% 40% 0%)",
                    },
                  ],
                },
                {
                  start: 0,
                  end: 100,
                  fromTo: [
                    { filter: "brightness(100%)" },
                    { filter: "brightness(0%)" },
                  ],
                },
              ]}
            >
              <img className="fullscreen" src="lake-dusk-lake.png" />
            </Scrollytelling.Animation>
            <Scrollytelling.Animation
              tween={[
                {
                  start: 0,
                  end: 90,
                  to: { y: "-25vh" },
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
            >
              <img className="fullscreen" src="lake-dusk-island.png" />
            </Scrollytelling.Animation>
            <Scrollytelling.Animation
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
            >
              <img className="fullscreen" src="lake-dusk-fg.png" />
            </Scrollytelling.Animation>
          </div>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>
    </section>
  );
};
