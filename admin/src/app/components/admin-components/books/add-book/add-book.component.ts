import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  valid = false;
  constructor(private service: BookService, private router: Router) {}
  selectedPhoto: any;
  selectedBook: any;
  size: any;

  onPhotoSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if (file) {
      this.selectedPhoto = file;
    }
    console.log(this.selectedPhoto);
  }
  onBookSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if (file) {
      this.selectedBook = file;
      this.size = (this.selectedBook.size / (1024 * 1024)).toFixed(2);
      console.log(this.selectedBook);
      console.log(this.size);
    }
  }
  onSubmit(data: Book) {
    const formData = new FormData();

    formData.append('Photo', this.selectedPhoto as Blob);
    formData.append('Author', data.Author);
    formData.append('Department', data.Department);
    formData.append('Description', data.Description);
    formData.append('Price', data.Price);
    formData.append('Language', data.Language);
    formData.append('NumOfPages', data.NumOfPages);
    formData.append('File', this.selectedBook as Blob);
    formData.append('Size', this.size);
    formData.append('Name', data.Name);

    this.service.addBook(formData).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.message == 'Add successfully') {
          this.valid = true;
          setTimeout(() => {
            this.valid = false;
          }, 1800);
        }
        this.clearData();
      },
      error: (error: any) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
          localStorage.removeItem('access_token');
        } else {
          console.log(error);
        }
      },
    });
  }
  clearData() {
    let Inputs = document.querySelectorAll<HTMLInputElement>('.form-control');
    for (let index = 0; index < Inputs.length; index++) {
      Inputs[0].focus();
      Inputs[index].value = '';
    }
  }
}
