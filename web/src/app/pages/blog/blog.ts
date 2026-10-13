import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogPosts } from '../../data/blog-posts';
import { Icon } from '../../shared/icon';

@Component({
  imports: [RouterLink, Icon],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  readonly blogPosts = blogPosts;
}
