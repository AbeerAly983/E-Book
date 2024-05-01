<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('Photo');
            $table->string('Author');
            $table->string('Department');
            $table->string('Language');
            $table->integer('NumOfPages');
            $table->integer('NumOfDownloads')->default(0);
            $table->integer('NumOfReads')->default(0);
            $table->string('Price')->default(0);
            $table->string('File');
            $table->string('Size');
            $table->text('Description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
};
