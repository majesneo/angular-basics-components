import {Component, Input, OnInit} from '@angular/core';


export interface Post {
    title: string;
    text: string;
    id?: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    posts: Post[] = [
        {title: 'ANGULAR1', text: 'asdasd1', id: 1},
        {title: 'ANGULAR2', text: 'asdasd2', id: 2}
    ];

    ngOnInit() {
        setTimeout(() => {
            console.log('Timeout')
            this.posts[0] = {
                title: 'changeDetection: ChangeDetectionStrategy.OnPush',
                text: 'changeDetection: ChangeDetectionStrategy.OnPush',
                id: 22
            }
        }, 5000)
    }

    removePost(id) {
        console.log(id)
        this.posts = this.posts.filter(post => post.id !== id)
    }

    updatePosts(post) {
        this.posts.unshift(post)
    }
}
