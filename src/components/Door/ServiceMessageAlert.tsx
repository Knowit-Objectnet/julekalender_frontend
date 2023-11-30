import { Popover } from "@headlessui/react"
import { filter, isEmpty, map, some } from "lodash-es"
import { FC } from "react"
import { FaExclamationTriangle } from "react-icons/fa"

import { useServiceMessages } from "../../api/requests"
import Divider from "../Divider"
import ServiceMessage from "../ServiceMessage"
import { cl } from "../../utils"


type ServiceMessageAlertProps = {
  door: number
  className?: string
}

const ServiceMessageAlert: FC<ServiceMessageAlertProps> = ({ door, className }) => {
  const { data: doorServiceMessages } = useServiceMessages({ select: (serviceMessages) => filter(serviceMessages, { door }) })

  if (isEmpty(doorServiceMessages)) return null

  const hasErrors = some(doorServiceMessages, { resolved: false })

  return (
    <div className={className}>
      <Popover className="relative">
        <Popover.Button
          as={FaExclamationTriangle}
          className={cl(
            "h-full w-full cursor-pointer",
            hasErrors ? "text-pink-900" : "text-yellow-400"
          )}
        />

        <Popover.Panel className="fixed left-[5%] min-w-[90%] md:absolute md:left-0 md:min-w-min">
          <div
            className={cl(
              "grid place-items-center bg-purple-700 border-2 border-opacity-70 rounded-md shadow-lg",
              hasErrors ? "border-pink-900" : "border-yellow-400"
            )}
          >
            {map(doorServiceMessages, (serviceMessage, idx) => (
              <>
                {idx > 0 && (
                  <Divider bgClasses={cl(hasErrors ? "bg-red-700/70" : "bg-yellow-400/70")} />
                )}
                <ServiceMessage
                  key={serviceMessage.uuid}
                  className={cl(
                    "p-8 w-full pt-16 md:p-8 md:w-288",
                    serviceMessage.resolved && "text-opacity-70"
                  )}
                  serviceMessage={serviceMessage}
                />
              </>
            ))}
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  )
}

export default ServiceMessageAlert
