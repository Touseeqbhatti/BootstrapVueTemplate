<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permission;

class PermissionDataController extends Controller
{
    function index()
    {
        return Permission::all();
    }
    function show($id)
    {
        return Permission::find($id);
    }
    function store(Request $request )
    {
        $request->validate([
            'name' => 'required|max:255|string',
            'description' => 'nullable|max:255'
        ]);

        $Permission = new Permission;
        $Permission->name = $request->name;
        $Permission->description = $request->description;
        // $Permission->email_verified_at = now();
        // $Permission->remember_token = Str::random(10);
        $result = $Permission->save();
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
        $Permission = Permission::find($id);
        $Permission->name = $request->name;
        $Permission->description = $request->description;
        // $Permission->email_verified_at = now();
        $result = $Permission->save();
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
        $Permission = Permission::find($id);
        $result = $Permission->delete();
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
