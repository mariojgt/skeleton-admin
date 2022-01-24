<a href="#" onclick="$inputs.toogleDropdown('{{ $id }}')" class="no-underline font-bold block mt-4 sm:inline-block sm:mt-0 text-grey-lighter mr-4 uppercase px-6 py-2 text-xs text-center
border-2 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white
border-purple-600 text-purple-600 hover:text-white hover:bg-purple-600 rounded
">
{{ $name ?? 'Dropdown' }}
</a>

    <div class="absolute mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden" id="{{ $id }}">
        {{ $slot }}
    </div>
