<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('social_accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('provider'); // github, google, facebook, etc.
            $table->string('provider_id'); // ID from the provider
            $table->string('provider_token')->nullable();
            $table->string('provider_refresh_token')->nullable();
            $table->timestamp('token_expires_at')->nullable();
            $table->timestamps();

            // Ensure each user can only connect once with each provider
            $table->unique(['provider', 'provider_id']);
            // Ensure each user can only have one account per provider
            $table->unique(['user_id', 'provider']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('social_accounts');
    }
};
