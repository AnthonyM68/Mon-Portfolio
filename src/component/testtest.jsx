 {/*


export default class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			id: null,
			url: 'url(images/Bomberman.PNG)'
		}
		this.projects = {
			/*project: []
			likes: [],
			backgroundImage: []
		}
		this.test();


	}
    
    test(element){

        return element;
    }

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
	}
	handleLoad = (e) => {
		this.handleClick(e);
	}
	createProjectSection(tabBdd, element) {
		
		for (let i = 0; i < tabBdd.length; i++) {

			console.log(tabBdd[i]['img']);

			this.setState({
				/*[i]: this.projects.project[i] = tabBdd[i],

				[i]: this.projects.likes[i] = tabBdd[i]['likes'],
				[i]: this.projects.backgroundImage[i] = tabBdd[i]['img']
			});
			console.log(this.projects.backgroundImage[i]);
		}
		element = <div className="project" style={this.projects.backgroundImage}>test</div>;
	console.log(this.projects.backgroundImage); 
	}
	

	handleClick = (e) => {
		e.preventDefault();

		this.setState({ count: this.state.count = 1 });

		if (e.target.id === undefined) {
			this.setState({ id: this.state.id = 'search' });
			//this.setState({ id: this.state.id = 'search_likes' });
		} else {
			this.setState({ id: this.state.id = e.target.id });

		}

		axios({
			method: "POST",
			//url: "https://anthonym.promo-36.codeur.online/MonPortfolio/like.php",
			url: "http://localhost/MonPortfolio/like.php",


			data: this.state,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {

			if (response.data.status === 'success') {

				let tabBdd = response.data.tabInfos;
				this.createProjectSection(tabBdd);


			} else if (response.data.status === 'fail') {
				console.log(response);
			}
		}).catch(error => {

		})
	}

	render() {

		const element = '';


		return element
	}

}
*/}