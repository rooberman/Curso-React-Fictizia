import React from 'react'
import ButtonStyled from './ButtonStyled'
import Alert from './Alert'

export default function Styles() {
    return (
        <div>
            <ButtonStyled>Click</ButtonStyled>
            <br />
            <ButtonStyled info>Click Info</ButtonStyled>
            <br />
            <ButtonStyled danger>Click Danger</ButtonStyled>

            <hr />

            <Alert>
                Message
            </Alert>
            <Alert info>
                Info Message
            </Alert>
            <Alert danger>
                Danger Message
            </Alert>
        </div>
    )
}
