<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BooksController extends Controller
{

    //return all books on the system
    public function AllBooks(){
        $books=Book::get();
        return response($books);
    }
    //return name of all department
    public function Departments(){
        $departments=Book::select('Department')->distinct()->get();
        return response($departments);
    }
    //return books which match with the department
    public function BooksOfDepartment($department){
        $books=Book::where('Department',$department)->get();
        return response($books);
    }
    //return books which price is free
    public function FreeBooks(){
        $books=Book::where('Price',0)->get();
        return response($books);
    }
    //return paid books
    public function PaidBooks(){
        $books=Book::where('Price', '>', 0)->get();
        return response($books);
    }
    //return details of special book
    public function BookDetails($id){
        $book=Book::find($id);
        return response($book);
    }
    //return the path of book to  read
    public function Read($id){
        $book=Book::find($id);
        if($book->Price!=0){
            return response(['error' => 'THIS BOOK IS NOT FREE TO READ']);
        }
        $book->increment('NumOfReads');
        $book->save();
        return response(['File'=>$book->File]);
    }
    //return the path of book to download
    public function Download($id){
        $book=Book::find($id);
        if($book->Price!=0){
            return response(['error' => 'THIS BOOK IS NOT FREE TO DOWNLOAD']);
        }
        $book->increment('NumOfDownloads');
        $book->save();
        return response(['File'=>$book->File]);
    }

    public function PaidBookRead($id){
        $user_id = Auth::user()->id;
        $user=DB::table('book_user')->where('user_id',$user_id)->where('book_id',$id)->first();
        $book=Book::find($id);
        if($user){
            $book->increment('NumOfReads');
            $book->save();
            return response()->json($book->File);
        }
        return response()->json(['message' => 'no access']);

     }

     public function PaidBookDownload($id){
        $user_id = Auth::user()->id;
        $user=DB::table('book_user')->where('user_id',$user_id)->where('book_id',$id)->first();
        $book=Book::find($id);
        if($user){
            $book->increment('NumOfDownloads');
            $book->save();
            return response()->json($book->File);
        }
        return response()->json(['message' => 'no access']);

     }

     public function userBooks(){
        $user_id=Auth::user()->id;
        $books=DB::table('book_user')->where('user_id',$user_id)->join('books','books.id','=','book_user.book_id')->select('books.*')->get()->toArray();
        return $books;}
}
