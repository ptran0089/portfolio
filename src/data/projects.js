import pomodoro from '../images/pomodoro.jpg';
import realEstate from '../images/real-estate.jpg';
import simonGame from '../images/simon-game.jpg';
import twitchStreams from '../images/twitch-streams.jpg';
import wikipediaSnippet from '../images/wikipedia-snippet.jpg';
import fccLeaderboard from '../images/fcc-leaderboard.jpg';
import downtownMap from '../images/downtown-map.jpg';

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
		description: 'A Simon Says game created with vanilla javascript. Strict mode resets the game to level one if the player makes a mistake.'
	},
	{
		name: 'Twitch Viewer',
		imgSrc: twitchStreams,
		url: 'https://ptran0089.github.io/Twitch-Viewer/',
		github: 'https://github.com/ptran0089/Twitch-Viewer',
		description: 'Keep track of your favorite twitch streams. Add your twitch stream to the list to keep track of the stream\'s status. User can choose to display all of the streams, online streams, or offline streams. Built with HTML, CSS, and jQuery.'
	},
	{
		name: 'Real Estate App',
		imgSrc: realEstate,
		url: 'https://glacial-sierra-83550.herokuapp.com/#',
		github: 'https://github.com/ptran0089/real-estate-app',
		description: 'A React app for posting real estate listings. Users need to create an account before creating a new listing. Listings can be sorted using a variety of filters. Built with React and Firebase.'
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
		description: 'A leaderboard for freecodecamp members, built with React. It can be sorted by all-time leaders or most points earned in the last 30 days.'
	},
	{
		name: 'Downtown Map',
		imgSrc: downtownMap,
		url: 'https://ptran0089.github.io/downtown-map/',
		github: 'https://github.com/ptran0089/downtown-map',
		description: 'A map of Sacramento with a couple of recommended hangout spots. The map shows a couple of exhibits including bars, food joints, and other places of interest. Users can search for places by name or activity and find basic information such as address and hours in the info window. Built with React, react-google-maps, recompose, axios, Google Maps API, and Foursquare API.'
	}
];

export default projectsData;