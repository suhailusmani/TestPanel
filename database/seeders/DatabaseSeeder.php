<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\Student::factory(100)->create();

        \App\Models\User::create([
            'name' => 'Developer',
            'email' => 'admin@gmail.com',
            'phone' => '9876543210',
            'password' => Hash::make('admin'),
            'isAdmin' => '1',
            'status' => 'active',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
