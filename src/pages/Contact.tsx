import { LinkButton } from "../components/LinkButton"

import BasicPage from "./BasicPage"

const Contact = () => (
  <BasicPage title="Kontakt oss">
    <p className="-mb-4 text-center">
      Følg utviklingen og kom med innspill eller Pull Requests på GitHub!
    </p>
    <div className="flex flex-wrap justify-center gap-8">
      <LinkButton
        icon="link"
        external
        content="Knowit GitHub - Kodekalender"
        to="https://github.com/Knowit-Objectnet/kodekalender_frontend"
      />
      <LinkButton
        icon="link"
        external
        content="Knowit GitHub"
        to="https://github.com/Knowit-Objectnet"
      />
    </div>

    <p className="-mb-4 mt-8 text-center">Funnet en feil? Ris eller ros? Send oss en e-post!</p>
    <LinkButton
      className="inline-flex w-fit justify-self-center"
      icon="mail"
      to="mailto:julekalender@knowit.no"
      content="julekalender@knowit.no"
    />
  </BasicPage>
)

export default Contact
