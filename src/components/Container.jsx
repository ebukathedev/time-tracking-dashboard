import { useState } from "react";
import styled from "styled-components";
import data from "../data.json";
import colors from "./variables/colors";
import activity_cards from "./variables/activity_card_data";
import ProfileCard from "./ProfileCard";
import ActivityCard from "./ActivityCard";

const MainWrapper = styled.main`
	padding: 1.5rem;
	display: flex;
	align-items: center;
	min-height: 100vh;
	background-color: ${colors.very_dark_blue};
`;

const GridContainer = styled.div`
	margin: auto;
	max-width: 600px;
	flex: 1;
	display: grid;
	gap: 1.5rem;

@media screen and (min-width: 480px) {
	grid-template-columns: repeat(2, 1fr);
		grid-template-rows repeat(4, auto);
}

	@media screen and (min-width: 800px) {
	max-width: 1000px;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows repeat(2, auto);
	}
`;
const Container = () => {
	const [time_frame, setTime_frame] = useState("weekly");

	const handleClick = (value) => setTime_frame(value);

	return (
		<MainWrapper>
			<GridContainer>
				<ProfileCard onClick={handleClick} time_frame={time_frame} />
				{data.map(
					(
						{ title, time_frames: { daily, weekly, monthly } },
						index
					) => {
						if (time_frame === "daily") {
							return (
								<ActivityCard
									key={title}
									bgColor={activity_cards[index].bgColor}
									img={activity_cards[index].img}
									title={title}
									current={daily.current}
									previous={daily.previous}
								/>
							);
						} else if (time_frame === "weekly") {
							return (
								<ActivityCard
									key={title}
									bgColor={activity_cards[index].bgColor}
									img={activity_cards[index].img}
									title={title}
									current={weekly.current}
									previous={weekly.previous}
								/>
							);
						} else {
							return (
								<ActivityCard
									key={title}
									bgColor={activity_cards[index].bgColor}
									img={activity_cards[index].img}
									title={title}
									current={monthly.current}
									previous={monthly.previous}
								/>
							);
						}
					}
				)}
			</GridContainer>
		</MainWrapper>
	);
};

export default Container;
