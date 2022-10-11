import styled from "styled-components";
import colors from "./variables/colors";
import hamburgerMenu from "../images/icon-ellipsis.svg";

const Card = styled.div`
	position: relative;
	padding-top: 2.5rem;
	border-radius: 0.8rem;
	background-color: ${(props) => props.bgColor};
	overflow: hidden;
	display: flex;
	align-items: end;

	.activity-icon {
		position: absolute;
		top: -0.5rem;
		right: 1rem;
	}
`;

const Details = styled.div`
	position: relative;
	z-index: 1;
	padding: 1.5rem;
	border-radius: 0.8rem;
	color: ${colors.white};
	background-color: ${colors.dark_blue};
	flex: 1;
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.8rem;

	h4 {
		font-size: 1.125rem;
	}
`;

const TimeFrame = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (min-width: 480px) {
		flex-direction: column;
		align-items: start;
	}

	h2 {
		font-weight: 500;
		font-size: 2rem;

		@media screen and (min-width: 800px) {
			font-size: 2.5rem;
		}
	}

	span {
		font-weight: 400;
		font-size: 0.875rem;
		color: ${colors.pale_blue};
	}
`;

const ActivityCard = (props) => {
	return (
		<Card bgColor={props.bgColor}>
			<img className="activity-icon" src={props.img} alt={props.title} />
			<Details>
				<Menu>
					<h4>{props.title}</h4>
					<span>
						<img src={hamburgerMenu} alt="hamburger menu" />
					</span>
				</Menu>
				<TimeFrame>
					<h2>{props.current}hrs</h2>
					<span>Last Week - {props.previous}hrs</span>
				</TimeFrame>
			</Details>
		</Card>
	);
};

export default ActivityCard;
