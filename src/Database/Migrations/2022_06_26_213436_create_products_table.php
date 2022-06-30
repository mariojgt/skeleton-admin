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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->mediumText('description')->nullable();
            $table->integer('featured_media_id')->nullable();
            $table->string('sku_code')->nullable();
            $table->integer('category_id')->nullable();
            $table->integer('price');
            $table->integer('cost_price')->nullable();
            $table->json('allergies')->nullable();
            $table->boolean('use_stock')->default(1);
            $table->boolean('is_active')->default(0);
            $table->integer('stock')->default(1);
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
        Schema::dropIfExists('products');
    }
};
