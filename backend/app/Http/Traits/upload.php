<?php

namespace App\Http\Traits;
use Illuminate\Http\Request;
trait upload
{
    public function UploadImageFile(Request $request,$foldername1,$foldername2)
    {
        $insert=[];
        $photo = $request->file('Photo')->getClientOriginalName();
        $file=$request->file('File')->getClientOriginalName();
        $path1 = $request->file('Photo')->storeAs($foldername1, $photo, 'path');
        $path2 = $request->file('File')->storeAs($foldername2, $file, 'path');
        $path3 = $request->file('Photo')->storeAs($foldername1, $photo, 'path1');
        $path4 = $request->file('File')->storeAs($foldername2, $file, 'path1');
        $insert['Photo']=$foldername1.'/'.$photo;
        $insert['File']=$foldername2.'/'.$file;
        return $insert;

    }
    public function UploadImage(Request $request,$foldername)
    {
        $insert=[];
        $photo = $request->file('Photo')->getClientOriginalName();
        $path1 = $request->file('Photo')->storeAs($foldername, $photo, 'path');
        $path2 = $request->file('Photo')->storeAs($foldername, $photo, 'path1');
        $insert['Photo']=$foldername.'/'.$photo;
        return $insert;

    }
    public function UploadFile(Request $request,$foldername)
    {
        $insert=[];
        $file=$request->file('File')->getClientOriginalName();
        $path2 = $request->file('File')->storeAs($foldername, $file, 'path');
        $path3 = $request->file('File')->storeAs($foldername, $file, 'path1');
        $insert['File']=$foldername.'/'.$file;
        return $insert;

    }
}
