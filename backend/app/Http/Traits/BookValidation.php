<?php

namespace App\Http\Traits;
use Validator;

trait BookValidation
{
    public function AddBookValidation($data){
        $validator = Validator::make($data, [
            'Photo' => 'required ',
            'Name'=>'required | string',
            'Author' => 'required | string',
            'Department'=>'required | string',
            'Language'=>'required | string',
            'NumOfPages'=>'required | integer',
            'Price'=>'required | string',
            'File'=>'required',
            'Size'=>'required | string',
            'Description'=>'required | string'

        ]);
        return $validator;
    }
    public function CheckUpdateCarValidation($data){
        $validator = Validator::make($data, [
            'Name'=>'required | string',
            'Author' => 'required | string',
            'Department'=>'required | string',
            'Language'=>'required | string',
            'NumOfPages'=>'required | integer',
            'Price'=>'required | string',
            'Size'=>'required | string',
            'Description'=>'required | string'

        ]);
        return $validator;
    }
}
