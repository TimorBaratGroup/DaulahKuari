import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c2d31;

  a {
    color: #ffffff;
    font-size: 15px;
  }

  div {
    width: 40vw;
    margin: 0 8vw 0 3vw;
  }

  @media (max-width: 460px) {
    height: 10vh;

    div {
      width: 90vw;
      margin: 0;
    }
  }
`
