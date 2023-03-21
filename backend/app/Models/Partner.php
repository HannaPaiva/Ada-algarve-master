<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;
    protected $fillable = ['n_socio', 'nome_completo', 'estado', 'tipo', 'data_nascimento', 'localidade'];
}
