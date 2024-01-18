<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;


class AuthController extends Controller
{

    public function login(LoginRequest $request)
    {
        try {

            if (Auth::attempt($request->only('email', 'password'))) {
                /** @var User $user */
                $user = Auth::user();

                $roles = $user->roles;
                $permissions = $roles->pluck('permissions')->flatten()->unique('id'); 
                $role_name = $roles->pluck('name')->first();
                $permission_names = $permissions->pluck('name');
                $token = $user->createToken('API Token')->accessToken;
                if (config('auth.must_verify_email') && !$user->hasVerifiedEmail()) {
                    return response([
                        'message' => 'Email must be verified.'
                    ], 401);
                }

                return response([
                    'message' => 'success',
                    'token' => $token,
                    'user' => $user,
                    'role_name'=>$role_name,
                    'permission_names'=>$permission_names
                ]);
            }
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' . $e->getMessage()
            ], 400);
        }

        return response([
            'message' => 'Invalid Email or password.'
        ], 401);
    }

    public function user()
    {
        return response()->json(Auth::user());
    }

    public function updateUser(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = Auth::user();
        $user->first_name = $request->first_name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        $response = [
            'status' => true,
            'message' =>  'User Updated Successfully'
        ];
        return response()->json($response, 200);
    }
}
