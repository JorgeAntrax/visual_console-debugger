<debugger class="oh-flex-column">
    <h3 class="opacity-7 oh-flex oh-flex-center-v oh-flex-between">
      <span style="max-width: 80%; overflow: hidden;text-overflow: ellipsis; white-space: nowrap;">Debugger 1.0 |    localhost/<?=implode('/',$route)?></span>
      <span class="icon-oh-close closeDebug" is-icon></span>
    </h3>
    <section id="__debug__"></section>
    <template type="js">
      <script>
        __debug__(window.debugger);
      </script>
    </template>
</debugger>
