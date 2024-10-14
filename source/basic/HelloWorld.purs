module HelloWorld where

import Effect (Effect)
import Effect.Console (log)

main :: Effect Unit
main = log "Hello world"