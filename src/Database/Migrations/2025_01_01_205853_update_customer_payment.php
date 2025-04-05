<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Add the new gateway_customer_ids JSON column if it doesn't exist
        if (!Schema::hasColumn('users', 'gateway_customer_ids')) {
            Schema::table('users', function (Blueprint $table) {
                $table->json('gateway_customer_ids')->nullable()->after('password');
            });
        }

        // Migrate existing stripe_id values to the new JSON column
        if (Schema::hasColumn('users', 'stripe_id')) {
            $users = DB::table('users')
                ->whereNotNull('stripe_id')
                ->select(['id', 'stripe_id'])
                ->get();

            foreach ($users as $user) {
                DB::table('users')
                    ->where('id', $user->id)
                    ->update([
                        'gateway_customer_ids' => json_encode(['stripe' => $user->stripe_id])
                    ]);
            }

            // Optionally remove the stripe_id column
            // Commented out for backward compatibility
            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn('stripe_id');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // If we need to roll back, restore stripe_id values from gateway_customer_ids
        if (Schema::hasColumn('users', 'gateway_customer_ids') && Schema::hasColumn('users', 'stripe_id')) {
            $users = DB::table('users')
                ->whereNotNull('gateway_customer_ids')
                ->select(['id', 'gateway_customer_ids'])
                ->get();

            foreach ($users as $user) {
                $customerIds = json_decode($user->gateway_customer_ids, true);
                if (isset($customerIds['stripe'])) {
                    DB::table('users')
                        ->where('id', $user->id)
                        ->update(['stripe_id' => $customerIds['stripe']]);
                }
            }
        }

        // Drop the gateway_customer_ids column
        if (Schema::hasColumn('users', 'gateway_customer_ids')) {
            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn('gateway_customer_ids');
            });
        }
    }
};
