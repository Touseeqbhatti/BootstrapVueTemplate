<?php

use Illuminate\Support\Facades\Route;
use App\Models\{
        User,
        Role,
        Permission
    };
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

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
// Route::get('/abc', function () {
    
// .............................Admin[......................
    // $admin = User::whereName('Admin')->with('roles')->first();
    // $admin_role = Role::whereName('admin')->first();
    
    // $admin->roles()->attach($admin_role);
    // if($admin->hasRole('admin')){
    //     dd("yes has admin role");
    // }

    // dd($admin->toArray());
// .............................Admin]......................

// .............................User[...................
    // $user = User::whereName('user')->with('roles')->first();
    // $user_role = Role::whereName('user')->first();
        
        // $user->roles()->attach($user_role);
        // if($user->hasRole('user')){
        //     dd("yes has user role");
        // }

        // dd($user->toArray());
// .............................User]...................

// .............................Permission[...................


    // .............................add_user{...................
    
    // $add_user_permission = Permission::where('name', 'add_user')->first();
    // $admin_role = Role::whereName('admin')->with('permissions')->first();
    // $admin_role->permissions()->attach($add_user_permission);
    
    // dd($admin_role->toArray());
    // .............................add_user}...................


    // .............................view_user{...................
    
    // $view_user_permission = Permission::where('name', 'view_user')->first();
    // $admin_role = Role::whereName('admin')->with('permissions')->first();
    // $admin_role->permissions()->attach($view_user_permission);
    
    // dd($admin_role->toArray());
    // .............................view_user}...................
        // $view_user_permission = Permission::where('name', 'view_user')->first();
    // $user_role = Role::whereName('user')->with('permissions')->first();
    // $user_role->permissions()->attach($view_user_permission);
    
    // dd($user_role->toArray());
// .............................Permission]...................
        // $users = User::select('id','name','email')
        // ->with('roles:id,name','roles.permissions:id,name')->get();

        // dd($users->toArray());

    // return view('welcome');

// });
