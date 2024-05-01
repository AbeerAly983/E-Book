<?php

use App\Http\Controllers\BooksController;

use App\Http\Controllers\StripeController;
use App\Http\Controllers\user\AuthController;
use App\Http\Controllers\user\forgotPasswordController;
use App\Http\Controllers\user\resetPasswordController;
use App\Http\Controllers\user\VerifyEmailController;
use App\Http\Controllers\user\UpdateProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::controller(AuthController::class)->group(function(){
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::get('profile',  'profile');
});
Route::get('test', [\App\Http\Controllers\Admin\StatisticsController::class, 'test']);
Route::post('VerifyEmail', [VerifyEmailController::class, 'verify_email']);
Route::post('forgotPassword', [forgotPasswordController::class, 'forgot_password']);
Route::post('resetPassword', [resetPasswordController::class, 'reset_password']);
Route::controller(StripeController::class)->group(function (){
    Route::get('/checkout', 'checkout')->name('checkout');
    Route::post('/makePayment', 'makePayment')->name('makePayment');
    Route::get('/success}', 'success')->name('success');
});

Route::controller(BooksController::class)->group(function (){
    Route::get('AllBooks','AllBooks');
    Route::get('Departments','Departments');
    Route::get('BooksOfDepartment/{department}','BooksOfDepartment');
    Route::get('FreeBooks','FreeBooks');
    Route::get('PaidBooks','PaidBooks');
    Route::get('BookDetails/{id}','BookDetails');
    Route::get('FreeRead/{id}','Read');
    Route::get('FreeDownload/{id}','Download');
    Route::get('PaidBookRead/{id}','PaidBookRead')->middleware('auth:api');
    Route::get('PaidBookDownload/{id}','PaidBookDownload')->middleware('auth:api');
    Route::get('userBooks','userBooks')->middleware('auth:api');

});

Route::controller(UpdateProfileController::class)->group((function(){
    Route::get('edit_user','edit');
    Route::post('change_user_password','change_password');

}));

require __DIR__.'/admin.php';
