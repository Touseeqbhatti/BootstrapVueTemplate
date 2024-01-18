<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'first_name' => 'User',
            'last_name' => 'Employee',
            'email' => 'useremployee@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => Carbon::now()
        ]);
        \App\Models\User::factory()->create([
            'first_name' => 'Super',
            'last_name' => 'Admin',
            'email' => 'superadmin@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => Carbon::now()
        ]);
        // .....................................................Roles[.................................................
        
        \App\Models\Role::create([
            'name' => 'admin',
            'description' => 'admin role'
        ]);
        
        \App\Models\Role::create([
            'name' => 'user',
            'description' => 'user role'
        ]);
        
        
        // .....................................................Roles].................................................
        // .....................................................Permissions[.................................................
        \App\Models\Permission::create([
            'name' => 'add_user',
            'description' => 'user can add new user'
        ]);
        
        \App\Models\Permission::create([
            'name' => 'view_user',
            'description' => 'user can view the user information'
        ]);

        // .....................................................Permissions].................................................
    
    }
}
