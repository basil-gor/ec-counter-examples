{-
This component uses the Elm architecture to manage its state and update its view based on that state.
The state of the component is stored in a Model record, which has a single field count.
The component listens for Increment or Decrement messages, which are sent when the corresponding buttons are clicked,
and updates its state accordingly using the update function.
The component's view is generated by the view function, which takes the Model as an input and returns an HTML structure to be displayed.
-}
module Counter exposing (Model, Msg(..), init, update, view)

type alias Model =
    { count : Int }

init : (Model, Cmd Msg)
init =
    ( { count = 0 }, Cmd.none )

type Msg
    = Increment
    | Decrement

update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model | count = model.count + 1 }

        Decrement ->
            { model | count = model.count - 1 }

view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (String.fromInt model.count) ]
        , button [ onClick Increment ] [ text "+" ]
        ]
