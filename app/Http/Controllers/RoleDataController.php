<?php

namespace App\Http\Controllers;
use App\Models\Role;
// use Illuminate\Support\Str;
use Illuminate\Http\Request;

class RoleDataController extends Controller
{
     function index()
    {
        return Role::with("permissions")->get();
    }
    function show($id)
    {
        return Role::find($id);
    }
    function store(Request $request )
    {
        $request->validate([
            'name' => 'required|max:255|string',
            'description' => 'nullable|max:255',
            'permission_ids' => 'required'
        ]);

        $Role = new Role;
        $Role->name = $request->name;
        $Role->description = $request->description;
        // $Role->email_verified_at = now();
        // $Role->remember_token = Str::random(10);
        $result = $Role->save();
        $Role->permissions()->attach($request->permission_ids);

        if ($result) {
            return response()->json([
                'message' => 'User created successfully'
            ]);
        } 
        else
            return response()->json([
                'message' => 'Something went wrong!'
            ]);
    }
    function update(Request $request, int $id)
    {
        $request->validate([
            'name' => 'required|max:255|string',
            'description' => 'nullable|max:255'
        ]);

        $Role = Role::find($id);
        $Role->name = $request->name;
        $Role->description = $request->description;
        // $Role->email_verified_at = now();
        $result = $Role->save();
        if ($result) {
            return response()->json([
                'message' => 'User updated successfully'
            ]);
        } 
        else
            return response()->json([
                'message' => 'Something went wrong!'
            ]);
    }
    function destroy($id){
        $Role = Role::find($id);
        $result = $Role->delete();
        if ($result) {
            return response()->json([
                'message' => 'User deleted successfully'
            ]);
        } 
        else
            return response()->json([
                'message' => 'Something went wrong!'
            ]);
    }
}
