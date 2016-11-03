;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-shouye" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1011.34336 475.359232 535.425024 67.428352c-13.30176-11.385856-32.88576-11.385856-46.18752 0L13.319168 475.359232c-11.270144 9.653248-15.335424 25.311232-10.184704 39.236608 5.15072 13.925376 18.429952 23.161856 33.278976 23.161856L178.301952 537.757696l0 392.572928c0 19.582976 15.88736 35.473408 35.472384 35.473408l189.185024 0c19.582976 0 35.47136-15.890432 35.47136-35.473408l0-176.78336 165.536768 0 0 176.78336c0 19.582976 15.890432 35.473408 35.473408 35.473408l189.185024 0c19.582976 0 35.473408-15.890432 35.473408-35.473408L864.099328 536.620032l117.547008 0c12.055552 1.660928 24.957952-3.31776 33.532928-13.287424C1027.924992 508.460032 1026.21696 488.108032 1011.34336 475.359232zM793.151488 894.859264 674.912256 894.859264 674.912256 718.07488c0-19.582976-15.890432-35.472384-35.473408-35.472384L402.95936 682.602496c-19.585024 0-35.473408 15.889408-35.473408 35.472384l0 176.784384L249.244672 894.859264 249.244672 502.28736c0-19.585024-15.88736-35.472384-35.47136-35.472384l-81.475584 0 380.033024-325.73952 376.306688 322.551808-72.174592 0c-8.866816 0-24.387584 6.15424-24.387584 22.909952 0 20.72576 0 50.08384 0 50.08384l1.076224 0L793.151488 894.859264z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
