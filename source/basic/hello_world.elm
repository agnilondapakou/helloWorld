module Main exposing (..)

import Browser
import Html exposing (Html, text)

main : Program () ()
main =
    Browser.sandbox { init = (), update = update, view = view }

type Msg = NoOp

update : Msg -> () -> ()
update _ model = ()

view : () -> Html Msg
view _ =
    text "Hello, World!"
