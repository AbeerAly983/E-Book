<?php

namespace App\Http\Traits;

use App\Models\Book;
use Illuminate\Http\Request;

trait AddBook
{
    public function addBook(Request $request){
        $book=new Book();
        $book->Name=$request->Name;
        $book->Author=$request->Author;
        $book->Department=$request->Department;
        $book->Language=$request->Language;
        $book->NumOfPages=$request->NumOfPages;
        $book->Price=$request->Price;
        $book->Size=$request->Size;
        $book->Description=$request->Description;
        $book->save();
        return $book->id;


    }

}
