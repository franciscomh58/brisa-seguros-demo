import { computed, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { blogPosts } from '../../data/blog-posts';
import { Icon } from '../../shared/icon';

@Component({
  imports: [RouterLink, Icon],
  templateUrl: './blog-reader.html',
  styleUrl: './blog-reader.css',
})
export class BlogReader {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = toSignal(this.route.data.pipe(map((data) => data['slug'] as string)), {
    initialValue: this.route.snapshot.data['slug'] as string,
  });
  readonly post = computed(() => blogPosts.find((post) => post.slug === this.slug())!);
}
