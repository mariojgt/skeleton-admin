<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        // Webhook Configurations Table
        Schema::create('webhook_configs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('repository_url');
            $table->string('branch')->default('main');
            $table->string('secret_token')->nullable();
            $table->boolean('is_active')->default(true);
            $table->json('deployment_commands');
            $table->string('deployment_path');
            $table->timestamps();
        });

        // Deployment Logs Table
        Schema::create('deployment_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('webhook_config_id')->constrained('webhook_configs')->onDelete('cascade');
            $table->string('commit_hash')->nullable();
            $table->string('status'); // pending, running, completed, failed
            $table->text('output')->nullable();
            $table->text('error_message')->nullable();
            $table->timestamp('started_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('deployment_logs');
        Schema::dropIfExists('webhook_configs');
    }
};
