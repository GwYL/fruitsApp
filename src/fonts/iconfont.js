;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M991.0656 709.0944 406.6944 709.0944c-39.5648 0-49.1136-25.472-50.7392-30.8864-0.9216-3.3024-5.4528-19.3664-12.3136-43.6352L936.9856 561.536c29.8624 0 54.08-24.2048 54.08-54.0032L991.0656 317.0304c0-29.8624-24.2176-54.0416-54.08-54.0416L238.6816 262.9888c-16.5632-58.0736-29.44-103.2192-33.8944-117.9776C187.5456 84.7488 143.3856 77.952 138.432 77.3888L32.9856 77.1712c-18.1888 0-32.9856 14.7584-32.9856 32.9856 0 18.1888 14.7968 32.9472 32.9856 32.9472l96.5376 0c2.5472 1.6 8 6.4768 12.032 20.4544 3.8272 12.992 14.5792 50.3552 28.5312 99.4432 32.448 114.0864 82.688 292.0448 107.392 379.7248 8.9216 31.6416 14.5024 51.6608 14.7968 52.416 6.8608 27.6608 39.7056 79.936 114.432 79.936l584.3712 0c18.1888 0 32.9728-14.7584 32.9728-32.9856C1024.0384 723.8912 1009.2544 709.0944 991.0656 709.0944z"  ></path>' +
    '' +
    '<path d="M373.6448 839.68c-29.5936 0-53.5808 23.9488-53.5808 53.5808 0 29.5808 23.9872 53.5808 53.5808 53.5808 29.5808 0 53.5808-24 53.5808-53.5808C427.2256 863.6288 403.2256 839.68 373.6448 839.68z"  ></path>' +
    '' +
    '<path d="M876.6848 839.68c-29.5808 0-53.5808 23.9488-53.5808 53.5808 0 29.5808 24 53.5808 53.5808 53.5808 29.5936 0 53.5808-24 53.5808-53.5808C930.2656 863.6288 906.2784 839.68 876.6848 839.68z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M927.951 450.916 589.085 98.482c-21.062-21.88-49.21-33.924-79.374-33.924-30.165 0-58.313 12.044-79.376 33.924L91.47 450.916c-34.959 36.377-30.464 67.823-24.687 80.958 4.113 9.318 18.038 34.932 58.093 34.932l49.674 0 0 271.123c0 61.555 44.252 119.514 107.115 119.514l57.004 0 87.251 0 0-63.709L425.92 670.514c0-30.764-4.66-47.904 26.785-47.904l57.005 0 57.004 0c31.445 0 26.784 17.141 26.784 47.904l0 223.221 0 63.707 87.25 0 57.006 0c62.863 0 107.114-57.959 107.114-119.514L844.868 566.805l49.674 0c40.055 0 53.979-25.615 58.095-34.932C958.413 518.738 962.91 487.292 927.951 450.916z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wode" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M725.824512 449.12128c21.813248-37.82656 35.25632-81.076224 35.25632-127.79008 0-142.158848-115.646464-257.833984-257.833984-257.833984-142.158848 0-257.833984 115.675136-257.833984 257.833984 0 46.559232 13.371392 89.67168 35.054592 127.412224-85.998592 67.8656-137.86112 172.628992-137.86112 283.553792 0 225.835008 205.81376 251.974656 360.640512 251.974656s360.669184-26.139648 360.669184-251.974656C863.916032 620.780544 811.93472 516.90496 725.824512 449.12128zM503.246848 122.326016c109.728768 0 199.005184 89.276416 199.005184 199.005184s-89.276416 199.005184-199.005184 199.005184-199.005184-89.276416-199.005184-199.005184S393.51808 122.326016 503.246848 122.326016zM503.246848 925.444096c-214.373376 0-301.811712-55.95648-301.811712-193.145856 0-92.069888 42.8032-178.998272 113.732608-235.845632 47.105024 50.551808 113.69984 82.683904 188.079104 82.683904 74.293248 0 140.816384-32.031744 187.907072-82.461696 71.04 56.781824 113.933312 143.035392 113.933312 235.6224C805.087232 869.487616 717.648896 925.444096 503.246848 925.444096z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-hongbao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M169.6 554.9c0-1.2-1.1-2.2-2.1-2.2h-39.8c-11.8 0-21.4-9.5-21.4-21.3V338.9c0-11.8 9.7-21.3 21.3-21.3h768.9c11.8 0 21.3 9.5 21.3 21.3v192.6c0 11.8-9.5 21.3-21.4 21.3h-40.6c-1.2 0-2.1 1.2-2.1 2.2v382.7c0 11.7-9.7 21.3-21.2 21.3H190.8c-11.7 0-21.2-9.6-21.2-21.3V554.9z" fill="#404040" ></path>' +
    '' +
    '<path d="M513.6 360.6c-0.8 0-1.7 0-2.5-0.1-65.6-3.9-282.8-24.1-325.1-121.6-10.9-25.2-15.6-65.4 24.6-113.9 39.3-47.4 81.7-57.4 110.4-57.4 81.7 0 154.2 79 195.3 135C563.4 145.7 643.8 65 721 65c29.9 0 71.9 11.5 102.4 66.5 28.1 50.7 18 90 4.6 114.1-54.8 98.2-269.7 113-312.2 114.9-0.9 0.1-1.5 0.1-2.2 0.1zM320.9 153.2c-5.6 0-22.6 0-44.5 26.4-9.2 11.1-13.9 21-12 25.3 11.7 26.9 102.7 53 194.4 64.8-34-49.7-92.4-116.5-137.9-116.5z m399.9-2.6c-38.8 0-103.9 63-148.7 119 76.7-10.2 162.8-32.8 181-65.5 1.9-3.4 6.3-11.2-4.7-30.9-12.4-22.6-23-22.6-27.6-22.6z" fill="#404040" ></path>' +
    '' +
    '<path d="M506.2 403.1c-48.7 0-88.5 16-118 49.4-28.9 30.8-43.6 71.8-44.2 123.1h95.6c1.3-37.2 17.1-76.8 62.3-76.8s77.2 51.9 16.6 110.6C409.2 715.2 344 763.3 344 873.3h316.3v-110S628 788 611.5 788H486.4c0-6.9 13.9-32.8 92.8-99 71.8-60.3 77.1-109.5 77.1-149.3 0-40.4-14.1-73.1-41.7-98.8-28.2-25.6-64.8-37.8-108.4-37.8z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pinpai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M792.416 94.864H532.24l156.256 236.144h252.528l0.688 52.496H691.504l-157.456 546.944 458.128-576.736zM86.24 384l0.224-53.328H336l157.232-235.808H230.88L30.992 352.416H30.72l460.8 578.272 0.848-1.056L333.44 384z"  ></path>' +
    '' +
    '<path d="M625.152 335.664l-112.16-169.472-112.48 169.472zM389.472 371.824l122.176 411.504 121.84-411.504z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
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

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)