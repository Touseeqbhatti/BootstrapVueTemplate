<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Str;
use App\Models\User;

class UserDataController extends Controller
{
    function index()
    {
        return User::with('roles')->get();

    }
    function show($id)
    {
        return User::find($id);
    }
    function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|max:255|string',
            'last_name' => 'required|max:255|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'role_id' => 'required'
        ]);

        $user = new User;
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->email_verified_at = now();
        // $user->remember_token = Str::random(10);
        $result = $user->save();

        $user->roles()->attach( $request->role_id);
        if ($result) {
            return response()->json([
                'message' => 'User created successfully'
            ]);
        } else
            return response()->json([
                'message' => 'Something went wrong!'
            ]);
    }
    function update(Request $request, int $id)
    {
        $request->validate([
            'first_name' => 'required|max:255|string',
            'last_name' => 'required|max:255|string',
        ]);
        $user = User::find($id);
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $updated = $user->save();

        if ($updated) {
            return response()->json([
                'message' => 'User updated successfully'
            ]);
        } else
            return response()->json([
                'message' => 'Something went wrong!'
            ]);
    }
    function destroy($id)
    {
        $user = User::find($id);
        $result = $user->delete();
        if ($result) {
            return response()->json([
                'message' => 'User deleted successfully'
            ]);
        } else
            return response()->json([
                'message' => 'Something went wrong!'
            ]);
    }
}
