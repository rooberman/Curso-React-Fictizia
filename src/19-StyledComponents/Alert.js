import styled from 'styled-components'
import { css } from 'styled-components'

export default styled.div`
    padding: 10px;
    border: 1px solid white;
    ${props => props.info && css`
        background-color: blue;
        color: white;
    `};
    ${props => props.danger && css`
        background-color: red;
        color: white;
    `};
`