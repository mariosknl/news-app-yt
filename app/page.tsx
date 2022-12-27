import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function Homepage() {
	// fetch news data
	const news: NewsResponse = await fetchNews(categories.join(","));

	console.log(news);

	return <div>{/* NewList news */}</div>;
}

export default Homepage;
