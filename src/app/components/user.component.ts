import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
	moduleId: module.id,
	selector: 'user',
	templateUrl: 'user.component.html',
	providers: [PostsService]
})
export class UserComponent  { 
	name: string;
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: bool;
	//for API
	posts: Post[];

	constructor(private postsService: PostsService) {
		this.name = 'Krishnaraj KR';
		this.email = 'sample@email.com';
		this.address = {
			street: '7 Main St',
			city: 'TVM',
			state: 'Kerala'
		}
		this.hobbies = ['Music', 'Movies', 'Sports'];
		this.showHobbies = false;

		//service call
		this.postsService.getPosts().subscribe(posts => {
			//console.log(posts);
			this.posts = posts;
		});
	}

	toggleHobbies() {
		this.showHobbies = !this.showHobbies;
	}

	addHobby(hobby) {
		this.hobbies.push(hobby);
	}

	deleteHobby(i) {
		this.hobbies.splice(i, 1);
	}

}

interface address {
	street: string;
	city: string;
	state: string;
}

interface Post {
	id: number;
	title: string;
	body: string;
}