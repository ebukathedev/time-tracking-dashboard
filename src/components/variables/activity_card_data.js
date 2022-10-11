import colors from "./colors";
import { work, study, social, self_care, play, exercise } from "./images";

const activity_cards = [
	{
		bgColor: colors.light_orange,
		img: work,
	},
	{
		bgColor: colors.soft_blue,
		img: play,
	},
	{
		bgColor: colors.light_red,
		img: study,
	},
	{
		bgColor: colors.lime_green,
		img: exercise,
	},
	{
		bgColor: colors.violet,
		img: social,
	},
	{
		bgColor: colors.soft_orange,
		img: self_care,
	},
];

export default activity_cards;
