//web
<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
// Route::get('/home', 'HomeController@index')->name('home');
Route::resource('post', 'PostsController');
Route::get('/post','PostsController@index')->name('post.index');

Route::post('user/auth-token', 'IndexController@angularPostLogin');

Route::group(['middleware' => ['auth']], function () {
    Route::get('login-check', 'IndexController@angularLogin');
    Route::post('user/auth-token', 'IndexController@angularPostLogin');
    Route::get('/home', 'HomeController@index')->name('home');
    Route::get('/add-post', 'HomeController@addPost')->name('add-post');
    Route::get('/get-posts', 'PostsController@addPost')->name('add-post');
});