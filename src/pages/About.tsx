import { Link } from "react-router-dom"
import { isNil } from "lodash-es"

import Button from "../components/Button"
import useAuthenticatedWhoami from "../hooks/useAuthenticatedWhoami"

import BasicPage from "./BasicPage"


const About = () => {
  const whoami = useAuthenticatedWhoami()
  return (
    <BasicPage title="Om kodekalenderen">
      <p>
        Kodekalenderen er høytidskalenderen for deg som er glad i
        programmering. Bak hver luke skjuler det seg en oppgave du må svare
        på i form av en enkel tekststreng eller et tall. Lukene varierer i
        vanskelighetsgrad og utforming, men felles for alle er at de er
        best egnet for å løses med kode.
      </p>
      <p>
        En ny luke åpnes hver dag klokken 04:00 helt fram til jul. For hver
        luke du løser får du et lodd i trekningen av en valgfri telefon eller
        nettbrett.
      </p>
      <p>
        Konkurransen stenges natt til andre juledag, så du får en dag ekstra i
        julefreden til å prøve på de lukene du mangler. Løs så mange luker som
        mulig for å øke vinnersjansene dine!
      </p>
      <p className="text-center">
        🎄 <em>Lykke til og god jul!</em> 🎄
      </p>

      {isNil(whoami) && (
        <Link className="inline-block place-self-center" to="/users/sign_in">
          <Button icon="edit">Registrer deg</Button>
        </Link>
      )}
    </BasicPage>
  )
}

export default About
