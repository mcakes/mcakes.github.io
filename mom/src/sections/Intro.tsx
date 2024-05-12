import * as Scrollytelling from "@bsmnt/scrollytelling";

export const Intro = () => {
  return (
    <Scrollytelling.Root
      defaults={{ ease: "linear" }}
      debug={{ label: "Intro" }}
    >
        <Scrollytelling.Pin childHeight={"0"} pinSpacerHeight={"100vh"} top={0}>
          <section className="intro-section section">
            <div className="wrapper">
                <h1>Scroll to advance</h1>
            </div>
          </section>
        </Scrollytelling.Pin>
       
    </Scrollytelling.Root>
  );
};
