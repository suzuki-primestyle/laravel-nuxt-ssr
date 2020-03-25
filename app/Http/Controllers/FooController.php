<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FooController extends Controller
{
    public function index ()
    {
        if (Auth::check()) {
            return 'Authentication success.';
        } else {
            return 'Authentication failed.';
        }
    }
}
