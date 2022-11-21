import { memo, useCallback, useState } from "react"

import Header from "./components/Header"
import StarBackground from "./components/StarBackground"
import BackgroundPauseButton from "./components/BackgroundPauseButton"

const App = () => {
  const [bgAnimationPaused, setBgAnimationPaused] = useState(localStorage.getItem("stars-paused") === "true")
  const togglePaused = useCallback(() => {
    setBgAnimationPaused((state) => {
      localStorage.setItem("stars-paused", state ? "false" : "true")
      return !state
    })
  }, [setBgAnimationPaused])

  return (<>
    <StarBackground paused={bgAnimationPaused} />

    <div id="content-container" className="relative min-h-[calc(100vh+1.5rem)] h-[calc(100%+1.5rem)]">
      <Header />

      <div className="absolute top-0 left-0 w-full h-full grid content-center">
        <div className="mx-auto text-center w-10/12 max-w-[60rem] text-2xl">
          Desember er rett rundt hjørnet, og det er Knowits Kodekalender også. Ses snart 🎅!
        </div>
      </div>

      <BackgroundPauseButton paused={bgAnimationPaused} onTogglePaused={togglePaused} />
    </div>
  </>)
}

export default memo(App)
