import { FCWithChildren } from "../../types/utils_types"
import { cl } from "../utils"

type PageContentProps = {
  className?: string
}

/*
 * Wraps main page content.
 *
 * Is sized to be at least large enough for header + main + footer to fill
 * entire screen height-wise.
 *
 * Must account for notch on phones in landscape mode. We set a max width,
 * centering is taken care of by grid parent.
 */
const PageContent: FCWithChildren<PageContentProps> = ({
  className,
  children
}) => (
  <main
    className={cl(
      `
        mx-4
        lg:mx-[11.25rem]
        min-h-full
      `,
      className
    )}
  >
    {children}
  </main>
)

export default PageContent
