<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::group(['prefix'=>'Api/','namespace'=>'Api'],function () {
	// Route::get('/get-posts','Api/PostsController@getPosts');
	// Route::get('/get-post/{id}','Api/PostsController@getPost');
	// Route::post('/post/{id}/{post}','Api/PostsController@updatePost');
// });
Route::get('/get-posts','PostsController@getPosts');
Route::get('/get-post/{id}','PostsController@getPost');
Route::post('/post/{id}/{post}','Api\PostsController@updatePost');

Route::resource('post','Api\PostsController');
// Route::put('post/{post}',function($id){
// 	return $id;
// });

Route::put('post/{post}', 'Api\PostsController@update');
Route::post('post', 'Api\PostsController@store');

Route::post('user/register', 'Api\ApiRegisterController@register');
Route::post('user/login', 'Api\ApiLoginController@login');

Route::middleware('jwt.auth')->get('users', function(Request $request) {
    return auth()->user();
});
// Route::group(['prefix' => 'api', 'namespace'=>'Api'],function () {
// 	Route::put('post/{post}','Api\PostsController@update');
// });
// Route::prefix('audit-file')->group(function () {
        // Route::resource('post','Api\PostsController');
        // Route::post('datatable','Api\AuditController@dataTable');
    // });