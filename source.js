
const $select = document.querySelector.bind(document);
const $selectAll = document.querySelector.bind(document);
const $selectId = document.getElementById.bind(document);
const $log = console.log;
const $watch = (el, ev, callback) => {
    document.querySelector(el).addEventListener(ev, callback, false);
};

const $watchAll = (el, ev, callback) => {
    document.querySelectorAll(el).forEach($el => {
        $el.addEventListener(ev, callback, false);
    });
};


function __debug__($response) {
  setTimeout(() => {
    if($response != undefined) {
      let  $logger = JSON.stringify($response);
      // $log = $log.replace($regex,',\n');
      $logger = $logger.split(',').join(',\n');
      $logger = $logger.split('"').join('\t"');
      $logger = $logger.split('\t",').join('",');
      $logger = $logger.split('\t":').join('":');
      $logger = $logger.split(':\t"').join(':  "');
      $logger = $logger.split('=').join(`<span class='comillas'>=</span>`);
      $logger = $logger.split('.').join(`<span class='comas'>.</span>`);
      $logger = $logger.split('{').join(`<span class='llave'>{</span>\n`);
      $logger = $logger.split('}').join(`\n<span class='llave'>}</span>`);
      $logger = $logger.split(':').join(`<span class='puntos'>:</span>`);
      $logger = $logger.split(',').join(`<span class='comas'>,</span>`);
      $logger = $logger.split('"').join(`<span class='comillas'>"</span>`);
      $logger = $logger.split('[').join(`<span class='corchete'>[</span>`);
      $logger = $logger.split(']').join(`<span class='corchete'>]</span>`);
      $logger = $logger.split('(').join(`<span class='comas'>(</span>`);
      $logger = $logger.split(')').join(`<span class='comas'>)</span>`);
      $logger = $logger.split('SELECT').join(`<span class='corchete'>SELECT</span>`);
      $logger = $logger.split('FROM').join(`<span class='llave'>FROM</span>`);
      $logger = $logger.split('WHERE').join(`<span class='llave'>WHERE</span>`);
      $logger = $logger.split('AND').join(`<span class='llave'>AND</span>`);
      $logger = $logger.split('OR').join(`<span class='llave'>OR</span>`);
      $logger = $logger.split('ORDER BY').join(`<span class='llave'>ORDER BY</span>`);
      $logger = $logger.split('INNER').join(`<span class='corchete'>INNER</span>`);
      $logger = $logger.split('LEFT').join(`<span class='corchete'>LEFT</span>`);
      $logger = $logger.split('JOIN').join(`<span class='corchete'>JOIN</span>`);
      $logger = $logger.split(' as ').join(`<span class='corchete'> as </span>`);
      // $logger = $logger.split('.').join(`<span class='comillas'>.</span>`);
      // $logger = $logger.split(':').join('\n<span class="puntos">:</span>');
      $log($logger);
      $selectId('__debug__').innerHTML = `${$logger}`;
      $select('debugger').classList.add('open');
    }
    $watch('.closeDebug', 'click', function() {
      $select('debugger').classList.remove('open');
    });
  }, 500);
}
