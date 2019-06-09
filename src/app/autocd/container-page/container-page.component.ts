import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { PostModel } from 'src/app/model/post.model';

@Component({
  selector: 'app-container-page',
  templateUrl: './container-page.component.html',
  styleUrls: ['./container-page.component.css']
})
export class ContainerPageComponent implements OnInit {
  currentNumber: number = 0;
  posts: Array<PostModel> = [];
  loading: boolean = false;
  traceCards: boolean = false;

  constructor(private ps: PostService) { }

  ngOnInit() {
    this.loadPosts();
  }

  updateState(event: number) {
    this.currentNumber = this.currentNumber + event;
  }

  loadPosts() {
    this.loading = true;

    this.ps.findPosts().subscribe((res: Array<PostModel>) => {
      this.posts = [...res];
      this.loading = false;
    });
  }

  removePost(deleteId: number) {
    if (!deleteId) {
      return;
    }

    this.posts = this.posts.filter(({id}) => id !== deleteId).slice();
  }

  updateTraceCards(trace: boolean) {
    this.traceCards = trace;
  }

  get printTrace() {
    console.count('TRACE: container-page.component');
    return '';
  }
}
