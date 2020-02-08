import styled from 'styled-components'
import { css } from 'styled-components'

export default styled.button`
    width: 150px;
    height: 30px;
    ${props => props.info && css`
        background-color: blue;
        color: white;
    `};
    ${props => props.danger && css`
        background-color: red;
        color: white;
    `};
`