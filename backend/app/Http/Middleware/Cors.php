<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $request = $next($request);

        $request->headers->set('Access-Control-Allow-Origin', '*');
        $request->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        $request->headers->set('Access-Control-Allow-Headers',' Origin, Content-Type, Accept, Authorization, X-Request-With');
        $request->headers->set('Access-Control-Allow-Credentials',' true');

return $request;

    }
}
