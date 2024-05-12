import * as Scrollytelling from "@bsmnt/scrollytelling";

export const BigChair = () => {
  return (
    <section className="big-chair-section section">
      <Scrollytelling.Root
        defaults={{ ease: "linear" }}
        debug={{ label: "Big Chair" }}
      >
        <Scrollytelling.Pin
          childHeight={"100vh"}
          pinSpacerHeight={"300vh"}
          top={0}
        >
          <img className="fullscreen" src="big-chair.png"></img>
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 70,
              fromTo: [
                { y: "-200vh", x: "100vw", scale: 3, clipPath: "" },
                { y: "-100vh", x: "0px", rotate: 720, scale: 1, clipPath: "" },
              ],
            }}
          >
            <img className="fullscreen" src="tiny-nancy.png"></img>
          </Scrollytelling.Animation>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>
    </section>
  );
};
