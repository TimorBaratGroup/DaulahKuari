import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 5;
  top: 2.3rem;
  right: 1.8rem;
  display: none;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  @media (max-width: 960px) {
    display: block;
  }

  ${({ sidebar }) =>
    sidebar &&
    `
			right: 18%;
			top: 2.3rem;
		
			@media (max-width: 960px) {
				right: 3%;
			}
		
			@media (max-width: 600px) {
				right: 3%;
			}
	`}
`

export const Bar = styled.div`
	width: 1.6rem;
	height: .15rem;
	margin-bottom: .3rem;
	background-color: #ffffff;
	transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
	opacity 500ms,
	box-shadow 250ms,
	background-color 500ms;

	@media (max-width: 600px){
		width: 1.6rem;
	}

	${({ top, sidebar }) =>
    top &&
    sidebar &&
    `
		transform: translateY(8px) rotate(-135deg);
		background-color: #212121;
	`}

	${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
			transform: scale(0);
			background-color: #212121;
	`}

	${({ bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
			transform: translateY(-6px) rotate(-45deg);
			background-color: #212121;
	`}
`
