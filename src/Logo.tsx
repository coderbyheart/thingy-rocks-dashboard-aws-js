import styled from 'styled-components'

const Container = styled.div`
	width: 150px;
	height: 150px;
	position: absolute;
	z-index: 10000;
	left: 15px;
	background-color: #fff;
	img {
		padding: 29px 19px 0 25px;
	}
`

export const Logo = () => (
	<Container>
		<img src="/static/logo.svg" alt="Nordic Semiconductor" />
	</Container>
)
