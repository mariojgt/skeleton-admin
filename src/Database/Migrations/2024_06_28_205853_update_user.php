<?php

// database/migrations/xxxx_xx_xx_update_users_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table): void {
            // Make password nullable since social login users might not have a password
            $table->string('password')->nullable()->change();

            // Add avatar URL field
            $table->string('avatar')->nullable();

            // Track how the user registered
            $table->string('registration_type')->default('email');
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->string('password')->nullable(false)->change();
            $table->dropColumn(['avatar', 'registration_type']);
        });
    }
};
