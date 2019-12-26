import React, { Component } from 'react';
import { View, Text } from 'react-native';

import '../service/db.json';

class Reddit extends Component{
	constructor(props){
		super(props);
		this.state = {
			posts: []
		}

	}

	componentDidMount(){
		fetch('https://www.reddit.com/.json', {
			Accept: 'application/json'
		}).then((response) => response.json())
			.then((data) => this.setState({ posts: data.data.children }));
	}

	render() {
		return (<View>
					<Text>Reddit</Text>
					<View>
						{this.state.posts.map((post, i) => {
							return (<Text key={i}>{post.data.author}</Text>)
						})}
					</View>
				</View>)
	}
}

export default Reddit;
