<?php

use App\Http\Controllers\admin\AuthAdminController;
use App\Http\Controllers\admin\DataOfCarsController;
use App\Http\Controllers\admin\forgotPasswordController;
use App\Http\Controllers\Admin\ManageBookController;
use App\Http\Controllers\admin\OtpController;
use App\Http\Controllers\admin\resetPasswordController;
use App\Http\Controllers\Admin\StatisticsController;
use App\Http\Controllers\admin\update_profileController;

Route::prefix('admin')->group(function(){
    Route::middleware('guest:admin')->group(function(){
        Route::controller(AuthAdminController::class)->group(function(){
            Route::post('login', 'login');

        });


        Route::post('/forgotPassword', [ForgotPasswordController::class, 'forgot_password']);
        Route::post('/resetPassword', [resetPasswordController::class, 'reset_password']);
    });
    Route::controller(AuthAdminController::class)->group(function (){
        Route::get('profile',  'profile');
    });
    Route::controller(update_profileController::class)->group((function(){
        Route::get('edit_admin','edit');
        Route::post('update_admin','update_email');
        Route::post('change_admin_password','change_password');

    }));
    Route::controller(ManageBookController::class)->group(function (){
        Route::post('addBook','store');
        Route::get('editBook/{id}','edit');
        Route::post('updateBook/{id}','update');
    });
    Route::controller(StatisticsController::class)->group(function (){
        Route::get('filter','filter');
        Route::get('ProfitsPerYear','ProfitsPerYear');
        Route::get('Profits_per_month_this_year','Profits_per_month_this_year');
        Route::get('Profits','Profits');
        Route::get('bookSales','bookSales');
        Route::get('Sales','Sales');
        Route::get('num_users','num_users');
        Route::get('users_added_today','users_added_today');
        Route::get('users_added_this_month','users_added_this_month');
        Route::get('users_added_this_year','users_added_this_year');
        Route::get('users_added_by_year','users_added_by_year');
        Route::get('users_added_per_month_this_year','users_added_per_month_this_year');
        Route::get('all_users','all_users');
        Route::get('num_not_verify_users','num_not_verify_users');
        Route::get('not_verify_users_added_today','not_verify_users_added_today');
        Route::get('not_verify_users_added_this_month','not_verify_users_added_this_month');
        Route::get('not_verify_users_added_this_year','not_verify_users_added_this_year');
        Route::get('all_not_verify_users','all_not_verify_users');
        Route::get('delete_not_verify_user/{id}','delete_not_verify_user');
        Route::get('num_free_books','num_free_books');
        Route::get('num_paid_books','num_paid_books');
        Route::get('allBooks','allBooks');
        Route::get('free_books','free_books');
        Route::get('paid_books','paid_books');
        Route::get('free_books_added_today','free_books_added_today');
        Route::get('free_books_added_this_month','free_books_added_this_month');
        Route::get('free_books_added_this_year','free_books_added_this_year');
        Route::get('paid_books_added_today','paid_books_added_today');
        Route::get('paid_books_added_this_month','paid_books_added_this_month');
        Route::get('paid_books_added_this_year','paid_books_added_this_year');


    });



});
