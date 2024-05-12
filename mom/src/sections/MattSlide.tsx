import * as Scrollytelling from "@bsmnt/scrollytelling";
import "../style.css";

export const MattSlide = () => {
  return (
    <section className="matt-slide-section section">
      <Scrollytelling.Root
        defaults={{ ease: "linear" }}
        // debug={{ label: "MattSlide" }}
        end={"bottom top"}
      >
        <Scrollytelling.Pin childHeight={"100vh"} pinSpacerHeight={"300vh"}>
          <Scrollytelling.Waypoint
            at={85}
            tween={{
              target: ".matt-slide-section",
              to: { backgroundColor: "rgb(197, 216, 219)" },
              duration: 2,
            }}
          />
          <div className="float-container center-horiz">
            <img className="fullscreen" src="slide-bg.png" />
            <Scrollytelling.Animation
              tween={[
                {
                  start: 70,
                  end: 95,
                  fromTo: [
                    { translateY: 0, clipPath: "circle(38.5% at 48.5% 50%)" },
                    {
                      translateY: "60%",
                      clipPath: "circle(38.5% at 48.5% -10%)",
                    },
                  ],
                },
                {
                  start: 0,
                  end: 60,
                  fromTo: [
                    {
                      translateY: "60%",
                      clipPath: "circle(38.5% at 48.5% -10%)",
                    },
                    { translateY: 0, clipPath: "circle(38.5% at 48.5% 50%)" },
                  ],
                },
              ]}
            >
              <img className="fullscreen clip-slide" src="slide-matt.png" />
            </Scrollytelling.Animation>
          </div>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>
    </section>
  );
};
