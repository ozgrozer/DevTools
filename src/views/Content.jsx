import { lazy, Suspense } from 'react'

import buttons from 'functions/buttons'
import { AppContext } from 'contexts/AppContext'

const componentMap = {
  JsonFormatter: lazy(() => import('views/tools/JsonFormatter')),
  UnixTimeConverter: lazy(() => import('views/tools/UnixTimeConverter')),
  UrlEncoderDecoder: lazy(() => import('views/tools/UrlEncoderDecoder'))
}

export default () => {
  const { state } = AppContext()
  const { activeButtonId } = state

  const buttonConfig = buttons.find(button => button.id === activeButtonId)
  const componentName = buttonConfig ? buttonConfig.id : null
  const CustomComponent = componentName ? componentMap[componentName] : null

  return (
    <Suspense>
      {
        CustomComponent
          ? <CustomComponent />
          : null
      }
    </Suspense>
  )
}
