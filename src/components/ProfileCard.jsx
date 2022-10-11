import styled from "styled-components";
import colors from "./variables/colors";
import profilePic from "../images/image-jeremy.png";

const Container = styled.div`
	background-color: ${colors.dark_blue};
	border-radius: 0.8rem;

	@media screen and (min-width: 480px) {
		grid-column: 1 / -1;
	}
	@media screen and (min-width: 800px) {
		grid-column: 1 / 2;
		grid-row: 1 / -1;
	}
`;

const TopDiv = styled.div`
	background-color: ${colors.blue};
	border-radius: 0.8rem;
`;

const FlexBox = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	padding: 1.5rem;

	@media screen and (min-width: 800px) {
		flex-direction: column;
		align-items: start;
		gap: 1.5rem;
		padding: 1.5rem 1.5rem 3rem;
	}

	.text {
		color: ${colors.white};
		h1 {
			@media screen and (min-width: 800px) {
				font-size: 2rem;
			}

			font-size: 1.5rem;
			font-weight: 400;
		}

		h4 {
			font-size: 0.875rem;
			font-weight: 300;
		}
	}
`;

const ImgWrapper = styled.div`
	width: 20%;

	@media screen and (min-width: 800px) {
		width: 50%;
	}

	img {
		width: 100%;
		border: 2px solid ${colors.white};
		border-radius: 50%;
	}
`;

const List = styled.ul`
	display: flex;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	max-width: 380px;
	margin: auto;

	@media screen and (min-width: 800px) {
		flex-direction: column;
		gap: 1rem;
	}

	li {
		color: ${colors.desaturated_blue};
		transition: all 0.3s ease-in-out;

		&:hover {
			color: ${colors.white};
		}
	}
`;

const ProfileCard = ({ onClick, time_frame }) => {
	return (
		<Container>
			<TopDiv>
				<FlexBox>
					<ImgWrapper>
						<img src={profilePic} alt="Jeremy Robson" />
					</ImgWrapper>
					<div className="text">
						<h4>Report for</h4>
						<h1>Jeremy Robson</h1>
					</div>
				</FlexBox>
			</TopDiv>
			<List>
				<li
					onClick={() => onClick("daily")}
					style={{
						color:
							time_frame === "daily"
								? "white"
								: colors.desaturated_blue,
					}}
				>
					Daily
				</li>
				<li
					onClick={() => onClick("weekly")}
					style={{
						color:
							time_frame === "weekly"
								? "white"
								: colors.desaturated_blue,
					}}
				>
					Weekly
				</li>
				<li
					onClick={() => onClick("monthly")}
					style={{
						color:
							time_frame === "monthly"
								? "white"
								: colors.desaturated_blue,
					}}
				>
					Monthly
				</li>
			</List>
		</Container>
	);
};

export default ProfileCard;
