import { lazy, memo, Suspense, useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { map, range } from "lodash"

import Gdpr from "./pages/Gdpr"
import Door from "./pages/Door"
import Header from "./components/Header"
import StarBackground from "./components/StarBackground"
import LeaderBoardAside from "./components/LeaderBoardAside"
import Doors from "./pages/Doors"
import Leaderboard from "./pages/Leaderboard"
import { useIsAdmin } from "./hooks/useIsAdmin"
import ServiceMessages from "./pages/ServiceMessages"


const LazyAdmin = () => {
  const Component = lazy(() => import("./pages/Admin"))

  return (
    <Suspense fallback="Laster admin...">
      <Component />
    </Suspense>
  )
}

const App = () => {
  const isAdmin = useIsAdmin()
  const [leaderboardHidden, setLeaderboardHidden] = useState(true)

  // Match door 1-24 only
  const doorPaths = map(range(1, 25), (door) => `/luke/:door(${door})`)

  return (<>
    <StarBackground />
    <LeaderBoardAside
      hidden={leaderboardHidden}
      closeHandler={() => setLeaderboardHidden(true)}
    />

    <div className="space-y-16">
      <div className="space-y-10">
        <Header setLeaderboardHidden={setLeaderboardHidden} />

        <Switch>
          <Route exact path="/" component={Doors} />
          <Route path={isAdmin ? "/luke/:door" : doorPaths} component={Door} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/gdpr" component={Gdpr} />
          <Route path="/service_messages" component={ServiceMessages} />
          <Route path="/admin" component={LazyAdmin} />

          {/* 404? - Route to main view */}
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  </>)
}

export default memo(App)
