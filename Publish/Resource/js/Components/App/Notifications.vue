<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" class="m-1 btn btn-square btn-ghost">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
            </svg>
        </div>

        <div class="flex shadow menu dropdown-content bg-base-100 rounded-box w-96">
            <ul class="menu py-3 shadow-lg bg-base-100 rounded-box">
                <li>
                    <div
                        class="flex pd bg-base-200 shadow-lg rounded-lg overflow-hidden"
                    >
                        <div class="w-2 bg-gray-800"></div>
                        <div class="flex items-center pr-7">
                            <div class="avatar">
                                <div class="w-10 mask mask-squircle">
                                    <img
                                        src="https://api.lorem.space/image/face?hash=47449"
                                    />
                                </div>
                            </div>
                            <div class="mx-3">
                                <h2
                                    class="text-xl font-semibold text-base-content"
                                >
                                    Hello john
                                </h2>
                                <p class="text-base-content">
                                    Sara was replied on the
                                    <a href="#" class="text-blue-500"
                                        >Upload Image</a
                                    >.
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
