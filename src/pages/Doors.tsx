import { get } from "lodash"
import { useCallback, useMemo } from "react"
import { useHistory } from "react-router"

import { useChallenges, usePrefetchLikes, usePrefetchPosts, useSolvedStatus } from "../api/requests"
import Footer from "../components/Footer"
import DoorsDesktop from "../components/Doors/DoorsDesktop"
import DoorsMobile from "../components/Doors/DoorsMobile"
import RaffleNotification from "../components/RaffleNotification"


const Doors = () => {
  const history = useHistory()

  const { data: challenges } = useChallenges()
  const { data: solvedStatus } = useSolvedStatus()
  const prefetchPosts = usePrefetchPosts()
  const prefetchLikes = usePrefetchLikes()


  const prefetch = useCallback((door: number) => {
    prefetchLikes()

    if (get(solvedStatus, door))
      prefetchPosts(door)
  }, [prefetchLikes, prefetchPosts, solvedStatus])

  const navigateToDoor = useCallback((door: number) => {
    history.push(`/luke/${door}`)
  }, [history])

  const lightProps = useMemo(() => ({
    challenges,
    solvedStatus,
    prefetch,
    navigateToDoor
  }), [challenges, solvedStatus, prefetch, navigateToDoor])

  return (
    <main>
      <RaffleNotification />

      {/* Visibility toggle done with media queries in CSS */}
      <DoorsDesktop {...lightProps} />
      <DoorsMobile {...lightProps} />

      <Footer />
    </main>
  )
}

export default Doors
