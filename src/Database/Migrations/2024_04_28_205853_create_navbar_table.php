<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('navbars', function (Blueprint $table): void {
            $table->id();
            $table->string('menu_label');
            $table->string('route');
            $table->longText('icon')->nullable();
            $table->boolean('is_frontend')->default(true);
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('navbars');
    }
};
