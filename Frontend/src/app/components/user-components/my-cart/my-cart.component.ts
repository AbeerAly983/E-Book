import { Component } from '@angular/core';
import { BooksService } from 'src/app/services/user/books.service';
import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, PaymentInfo } from 'src/app/interfaces/book';

@Component( {
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
} )
export class MyCartComponent {

  bookInfo?: Book;
  id: number;
  stripe: Stripe | any;
  cardElement: StripeCardElement | any;

  showAlertSelectPlan: boolean;
  paymentMsg: string;
  paymentSuccess: boolean;
  paymentAlert: boolean;
  constructor( private service: BooksService, private route: ActivatedRoute, private router: Router ) {
  }

  async ngOnInit() {
    this.stripe = await loadStripe( 'pk_test_51NyMMdFYWw2mffJ4fjNaJj1jtfKZIjuRXrKHTOvq4zkLn0ue3uZbElA9mzsEWnnMfz6z42OKau9DpnVrBigNrKvr002w5a729m' );
    const elements = this.stripe.elements();
    this.cardElement = elements.create( 'card' );
    this.cardElement.mount( '#card-element' );

    this.route.params.subscribe( params => {
      this.id = +params['id'];
      this.getBookDetails();
      this.getUserID();
    } );
  }


  getBookDetails() {
    this.service.getBookDetails( this.id ).subscribe( ( res ) => {
      this.bookInfo = res as Book;
      if ( this.bookInfo?.Price == '0' ) {
        this.router.navigate( ['not-found'] );
      }
    } );
  }

  getUserID() {
    this.service.getUserData().subscribe( {
      next: ( res: any ) => {
        this.id = res.id;
      }
      , error: ( error: any ) => {
        if ( error.status === 401 ) {
          localStorage.removeItem( 'access_token' );
          this.router.navigate( ["/login"] );
        }
      }
    } );
  }

  async onSubmitPayment() {
    const { error, paymentMethod } = await this.stripe.createPaymentMethod( {
      type: 'card',
      card: this.cardElement,
    } );
    if ( error ) {
      console.error( error );
      this.paymentAlert = true;
      this.paymentMsg = error.message;
      setTimeout( () => {
        this.paymentAlert = false;
      }, 2500 );
    } else {
      // Send the paymentMethod.id to your server for further processing
      this.sendPaymentMethodToBackend( paymentMethod.id );
    }
  }

  sendPaymentMethodToBackend( paymentMethod: any ) {
    const info: PaymentInfo = {
      paymentMethod: paymentMethod,
      book_id: this.bookInfo!.id,
      book_name: this.bookInfo!.Name,
      price: Math.ceil( +( this.bookInfo!.Price ) ) * 100,
      user_id: this.id
    }

    this.service.makePayment( info ).subscribe(
      ( response: any ) => {
        console.log( response );
        this.paymentAlert = true;
        this.paymentMsg = response.message;
        setTimeout( () => {
          this.paymentAlert = false;
          if ( response.message == 'Payment completed successfully' ) {
            this.router.navigate( ['/profile/showYourPaidBooks'] );
          }
        }, 2500 );
      },
      ( error: any ) => {
        console.error( 'Error:', error );
      }
    );
  }

}
