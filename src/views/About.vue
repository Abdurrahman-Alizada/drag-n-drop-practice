<template>
<div class="flex">
  
  <div class="h-screen top-0 sticky w-48">
    <!-- Note: add overflow-y-scroll if sidebar content is longer than page -->
    <div class="flex items-center h-12 bg-red-200">
      <div class='flex-1 text-red-700 font-mono text-center'>Fixed Logo</div>
    </div>
  
  </div>
  
  <div class="flex-grow bg-gray-300">
    <div class="flex h-12 bg-red-200 sticky top-0">
      <div class='flex-1 flex items-center text-red-700 font-mono p-2'>Menu</div>
    </div>

    <div class="p-4 bg-green-100 h-64">
      deneme
    </div>
    <div class="p-4 bg-green-200 h-64">
      deneme
    </div>
    <div class="p-4 bg-green-100 h-64">
      deneme
    </div>
    <div class="p-4 bg-green-200 h-64">
      deneme
    </div>
  </div>
</div>
</template>
