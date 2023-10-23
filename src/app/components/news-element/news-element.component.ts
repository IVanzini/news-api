import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/news';

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css']
})
export class NewsElementComponent {
  @Input()
  article?: Article;
}
