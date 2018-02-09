import pomodoro from '../images/pomodoro.jpg';
import realEstate from '../images/real-estate.jpg';
import simonGame from '../images/simon-game.jpg';
import twitchStreams from '../images/twitch-streams.jpg';
import wikipediaSnippet from '../images/wikipedia-snippet.jpg';
import fccLeaderboard from '../images/fcc-leaderboard.jpg'

const projectsData = [
	{
		name: 'Pomodoro Timer',
		imgSrc: pomodoro,
		url: 'https://ptran0089.github.io/Pomodoro-Clock/',
		github: 'https://github.com/ptran0089/Pomodoro-Clock',
		description: 'A pomodoro timer for working or studying, built with HTML, CSS, and vanilla javascript.'
	},
	{
		name: 'Simon Game',
		imgSrc: simonGame,
		url: 'https://ptran0089.github.io/Simon-Game/',
		github: 'https://github.com/ptran0089/Simon-Game',
		description: 'A Simon Says game created with vanilla javascript.'
	},
	{
		name: 'Twitch Viewer',
		imgSrc: twitchStreams,
		url: 'https://ptran0089.github.io/Twitch-Viewer/',
		github: 'https://github.com/ptran0089/Twitch-Viewer',
		description: 'Keep track of your twitch streams. Add your favorites streams to list and see if the stream is online or offline. User can display all of the streams, only online streams, or only offline streams. Built with HTML, CSS, and jQuery.'
	},
	{
		name: 'Real Estate App',
		imgSrc: realEstate,
		url: 'https://glacial-sierra-83550.herokuapp.com/#',
		github: 'https://github.com/ptran0089/real-estate-app',
		description: 'A React app for posting real estate listings. Users need to create an account to create a new posting. Listings can be sorted using a variety of filters. Built with React and Firebase.'
	},
	{
		name: 'Wikipedia Snippet',
		imgSrc: wikipediaSnippet,
		url: 'https://ptran0089.github.io/Wikipedia-Viewer/',
		github: 'https://github.com/ptran0089/Wikipedia-Viewer',
		description: 'A wikipedia search tool that displays a snippet of the article, built with HTML, CSS, and jQuery.'
	},
	{
		name: 'FCC Leaderboard',
		imgSrc: fccLeaderboard,
		url: 'https://ptran0089.github.io/fcc-leaderboard/',
		github: 'https://github.com/ptran0089/fcc-leaderboard',
		description: 'A leaderboard for freecodecamp members, built with React. It can be sorted by all time leaders or most points earned in the last 30 days.'
	}
];

export default projectsData;