<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\BookUser;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class StatisticsController extends Controller
{
    public function __construct(){
        $this->middleware('auth:admin');
    }
    //return name of book and number of download for each book and number of reads for each book
    public function filter(){
        $books=Book::select('Name','NumOfDownloads','NumOfReads')->get();
        return $books ;
    }
    //return all years in system and the profit of each year
    public function ProfitsPerYear(){
        $year=BookUser::select(
            DB::raw('year(created_at) as year'),
            DB::raw('sum(price) as value'),
        )
            ->whereNotNull('created_at')
            ->groupBy('year')
            ->get()
            ->toArray();
        return ($year);
    }
    //return all months of this year and the profit of each month
    public function Profits_per_month_this_year(){
        $month=BookUser::select(
            DB::raw('month(created_at) as month'),
            DB::raw('sum(price) as value'),
        )
            ->whereNotNull('created_at')
            ->whereYear('created_at',Carbon::now()->format('Y'))
            ->groupBy('month')
            ->get()
            ->toArray();
        return ($month);
    }
    public function Profits(){
        $today_profit=BookUser::select(DB::raw('sum(price) as value'))->whereDay('created_at',Carbon::now()->format('d'))
            ->whereMonth('created_at',Carbon::now()->format('m'))->whereYear('created_at',Carbon::now()->format('Y'))->get();
        $this_month_profit=BookUser::select(DB::raw('sum(price) as value'))->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        $this_year_profit=BookUser::select(DB::raw('sum(price) as value'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        $all_profit=BookUser::select(DB::raw('sum(price) as value'))->get();

        return['todayProfit'=>$today_profit[0]->value,
            'thisMonthProfit'=>$this_month_profit[0]->value,
            'thisYearProfit'=>$this_year_profit[0]->value,
            'allProfit'=>$all_profit[0]->value];
    }
    //return name of book and number of sales for each book
    public  function  bookSales(){
        $book=DB::table('book_user')
            ->join('books','books.id','=','book_user.book_id')
            ->select('books.Name',DB::raw('count(book_user.book_id) as value'),)
            ->groupBy('books.Name')
            ->get()->toArray();

        return $book;
    }
    //The number of sales that happend today, this month, and this year
    public function Sales(){
        $num_sale_today=BookUser::whereDay('created_at',Carbon::now()->format('d'))
            ->whereMonth('created_at',Carbon::now()->format('m'))->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $num_sale_this_month=BookUser::whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $num_sale_this_year=BookUser::whereYear('created_at',Carbon::now()->format('Y'))->count();
        $num_all_sales=BookUser::count();
        return response([
            'numSalePaidToday'=>$num_sale_today,
            'numSaleThisMonth'=>$num_sale_this_month,
            'numSaleThisYear'=>$num_sale_this_year,
            'numAllSales'=>$num_all_sales
        ]);
    }
public  function num_users(){
    $num_users_added_today=User::where('email_verified_at','!=',null)->whereDay('created_at',Carbon::now()->format('d'))
        ->whereMonth('created_at',Carbon::now()->format('m'))->whereYear('created_at',Carbon::now()->format('Y'))->count();
    $num_users_added_this_month=User::where('email_verified_at','!=',null)->whereMonth('created_at',Carbon::now()->format('m'))->whereYear('created_at',Carbon::now()->format('Y'))->count();
    $num_users_added_this_year=User::where('email_verified_at','!=',null)->whereYear('created_at',Carbon::now()->format('Y'))->count();
    $num_all_users=User::where('email_verified_at','!=',null)->count();
    return(['numUsersAddedToday'=>$num_users_added_today,
        'numUsersAddedThisMonth'=>$num_users_added_this_month,
        'numUsersAddedThisYear'=>$num_users_added_this_year,
        'numAllUsers'=>$num_all_users]);
}
    public function users_added_today(){
        $user=User::where('email_verified_at','!=',null)->whereDay('created_at',Carbon::now()->format('d'))
            ->whereMonth('created_at',Carbon::now()->format('m'))->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return($user);
    }
    public function users_added_this_month(){
        $users=User::where('email_verified_at','!=',null)->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($users);
    }
    //return users added this year
    public function users_added_this_year(){
        $user=User::where('email_verified_at','!=',null)->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return($user);
    }
    //return number of user per year
    public function users_added_by_year(){
        $data=User::select(
            DB::raw('year(created_at) as year'),
            DB::raw('count(id) as value'),
        )
            ->whereNotNull('created_at')
            ->where('email_verified_at','!=',null)
            ->groupBy('year')
            ->get()
            ->toArray();
        return ($data);
    }
//return all months of this year and the number of users of each month
    public function users_added_per_month_this_year(){
        $month=User::select(
            DB::raw('month(created_at) as month'),
            DB::raw('count(id) as value'),
        )
            ->whereNotNull('created_at')
            ->where('email_verified_at','!=',null)
            ->whereYear('created_at',Carbon::now()->format('Y'))
            ->groupBy('month')
            ->get()
            ->toArray();
        return ($month);
    }

    public function all_users(){
        $users=User::where('email_verified_at','!=',null)->get();
        return response($users);
    }
    public function num_not_verify_users(){

        $num_not_verify_users_add_today=User::where('email_verified_at',null)->whereDay('created_at',Carbon::now()->format('d'))->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $num_not_verify_users_add_this_month=User::where('email_verified_at',null)->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $num_not_verify_user_add_this_year=User::where('email_verified_at',null)->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $num_all_not_verify_users=User::where('email_verified_at',null)->count();
        return response([
           'numNotVerifyUsersAddedToday'=>$num_not_verify_users_add_today,
           'numNotVerifyUsersAddedThisMonth'=>$num_not_verify_users_add_this_month,
           'numNotVerifyUserAddThisYear'=>$num_not_verify_user_add_this_year,
            'numAllNotVerifyUsers'=>$num_all_not_verify_users
       ]);
    }
    public function not_verify_users_added_today(){
        $data=User::where('email_verified_at',null)->whereDay('created_at',Carbon::now()->format('d'))->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($data);
    }
    public function not_verify_users_added_this_month(){
        $data=User::where('email_verified_at',null)->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($data);
    }
    public function not_verify_users_added_this_year(){
        $data=User::where('email_verified_at',null)
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($data);
    }
    public function all_not_verify_users(){
        $data=User::where('email_verified_at',null)->get();
        return response($data);
    }

    public function delete_not_verify_user($id){
        $delete=User::where('id',$id)->delete();
        if($delete){
            return response()->json(['message' => 'Deleted Successfully']);
        }
        return response()->json(['message' => 'Failed To Delete']);
    }
    public function num_free_books(){
        $books_added_today=Book::where('price',0)->whereDay('created_at',Carbon::now()->format('d'))
            ->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $books_added_this_month=Book::where('price',0)->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $books_added_this_year=Book::where('price',0)->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $free_books=Book::where('price',0)->count();
        $books=Book::count();
        return response([
            'numFreeBooksAddToday'=>$books_added_today,
            'numFreeBooksAddThisMonth'=>$books_added_this_month,
            'numFreeBooksAddThisYear'=>$books_added_this_year,
            'numAllFreeBooks'=>$free_books,
            'numAllBooks'=>$books
        ]);
    }
    public function num_paid_books(){
        $books_added_today=Book::where('price','!=',0)->whereDay('created_at',Carbon::now()->format('d'))
            ->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $books_added_this_month=Book::where('price','!=',0)->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $books_added_this_year=Book::where('price','!=',0)->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $free_books=Book::where('price','!=',0)->count();
        $books=Book::count();
        return response([
            'numPaidBooksAddToday'=>$books_added_today,
            'numPaidBooksAddThisMonth'=>$books_added_this_month,
            'numPaidBooksaAddThisYear'=>$books_added_this_year,
            'numAllPaidBooks'=>$free_books,
            'numAllBooks'=>$books
        ]);
    }
    public function allBooks(){
        $books=Book::get();
        return response($books);
    }
    public function free_books(){
        $books=Book::where('price',0)->get();
        return response($books);
    }
    public function paid_books(){
        $books=Book::where('price','!=',0)->get();
        return response($books);
    }
    public function free_books_added_today(){
        $books=Book::where('price',0)->whereDay('created_at',Carbon::now()->format('d'))
            ->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($books);
    }
    public function free_books_added_this_month(){
        $books=Book::where('price',0)
            ->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($books);
    }
    public function free_books_added_this_year(){
        $books=Book::where('price',0)
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($books);
    }
    public function paid_books_added_today(){
        $books=Book::where('price','!=',0)->whereDay('created_at',Carbon::now()->format('d'))
            ->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($books);
    }
    public function paid_books_added_this_month(){
        $books=Book::where('price','!=',0)
            ->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($books);
    }
    public function paid_books_added_this_year(){
        $books=Book::where('price','!=',0)
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($books);
    }

}
