
export default function HotelPost ({name, pays}) {
	return <div style={{
		display:'inline-block'
	}}>
		<img
			width="200"
			src="https://github.com/WassimBenzarti/react-presentation/raw/main/assets/2020-12-24-13-02-59.png" />
		<h3>{name}</h3>
		<p>{pays}</p>
	</div>
}