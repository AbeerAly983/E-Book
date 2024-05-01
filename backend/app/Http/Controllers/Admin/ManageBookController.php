<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Traits\AddBook;
use App\Http\Traits\BookValidation;
use App\Http\Traits\upload;
use App\Models\Book;
use App\Notifications\resend;
use Illuminate\Http\Request;

class ManageBookController extends Controller
{
    use AddBook;
    use upload;
    use BookValidation;
    public function __construct(){
        $this->middleware('auth:admin');
    }
    public function store(Request $request){
        $validator = $this->AddBookValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);
        $insert=$this->UploadImageFile($request,'imgBooks','pdfs');
        $book_id=$this->addBook($request);

        if(!empty($insert)){
            Book::where('id', $book_id)->update($insert);
        }
        //check if data added to DB or not
        if($book_id){
            return response()->json(['message' => 'Add successfully']);
        }
        return response()->json(['message' => 'Failed to Add']);
    }
    public function edit($id){
        $book=Book::find($id);
        if($book){
            return response($book);
        }
        return response()->json(['message' => 'No Book With This Id']);
    }
    public  function update(Request $request,$id){
        $validator = $this->CheckUpdateCarValidation($request->all());
        if ($validator->fails()) {
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        $keys = array_keys($request->all());
        $photo = [];
        $file=[];
        foreach ($keys as $key) {
            if ($key == 'Photo') {
                    $photo=$this->UploadImage($request,'imgBooks');
            }
            if ($key == 'File') {
                $file=$this->UploadFile($request,'pdfs');
            }
        }

        $book=Book::where('id', $id)->first();
                if(empty($book)){
                    return response()->json(['message' => 'Failed to Update']);
        }
        $book->update($request->except(['Photo','File']));
        if(!empty($photo)){
            $book->update($photo);
        }
        if(!empty($file)){
            $book->update($file);
        }
        return Response()->json(['message' => 'Book Updated Successfully']);

    }
}
