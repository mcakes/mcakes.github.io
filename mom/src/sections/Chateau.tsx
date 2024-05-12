import * as Scrollytelling from "@bsmnt/scrollytelling";

export const Chateau = () => {
  return (
    <section className="chateau-section section">
      <Scrollytelling.Root
        defaults={{ ease: "linear" }}
        debug={{ label: "QC" }}
      >
        <Scrollytelling.Pin childHeight={"100vh"} pinSpacerHeight={"300vh"} top={0}>
          <img className="fullscreen" src="chateau-bg.png"></img>
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 70,
              to: { y: '-100vh'},
            }}
          >
            <img className="fullscreen" src="chateau-matt-mom.png"></img>
          </Scrollytelling.Animation>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>
    </section>
  );
};
