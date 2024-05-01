<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $fillable=['Photo','Name','Author','Department','Language','NumOfPages','NumOfDownloads','NumOfReads','Price','File','Size','Description'];
    protected $hidden = [
        'File'
    ];
    public function users()
    {
        return $this->belongsToMany(User::class, 'book_user');
    }
}
