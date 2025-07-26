<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('deployment_output_logs', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('deployment_log_id')->constrained('deployment_logs')->onDelete('cascade');
            $table->string('command');
            $table->text('output');
            $table->string('type')->default('info'); // info, error, success
            $table->integer('sequence')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('deployment_output_logs');
    }
};
