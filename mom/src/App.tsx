import { Chateau, Intro, Finger, MattCanoe, MattSlide, LakeAtDusk, Zoe, HappyMothers } from './sections'
import './style.css'
import './reset.css'

export default function App() {
  return (
    <main>
      <Intro />
      <Zoe />
      <LakeAtDusk />
      <MattCanoe />
      <MattSlide />
      <Chateau />
      {/* <BigChair/> */}
      <Finger />
      <HappyMothers />
    </main>
  );
}
