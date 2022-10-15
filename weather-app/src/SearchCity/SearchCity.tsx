import SearchBar from '../Components/SearchBar/SearchBar';
import SocialConnect from '../Components/SocialConnect/SocialConnect';
import './SearchCity.scss'

function SearchCity(props: any) {
	return (
		<div className="search-city">
			<SearchBar setIsLoaded={props.setIsLoaded} dataa={props.dataa} setdata={props.setdata} />
			<SocialConnect />
		</div>
	)
}

export default SearchCity;