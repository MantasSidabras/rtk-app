import React from 'react'
import { createDispatchHook } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const commonContext = React.createContext(null as any)
export const useCommonDispatch = createDispatchHook(commonContext)
