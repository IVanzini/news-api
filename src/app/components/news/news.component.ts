import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Article, SearchResponse } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent { //implements OnInit {
  errorMessage = "";
  articles: Article[] = [];
  qParameter = "";

  constructor(private newsService: NewsService) {}
  
  // ngOnInit(): void {
  //   this.searchEverything();
  // }

  searchEverything(): void {
    this.newsService.searchEverything(this.qParameter)
    .pipe(
      catchError((e: HttpErrorResponse) => {
        this.errorMessage = e.error;
        return of(undefined);
      })  
    )
    .subscribe(response => {
      if (response) {
        console.log(response.totalResults);
        this.articles = response.articles;
        
      }
    })
  }
}


