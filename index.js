// Generated by CoffeeScript 1.12.7
(function() {
  var codeTime, commentTime, finalStyle, isOn, openComment, skip, styles, writeStyleChar, writeStyles;

  styles = "/*\n * 云云~\n * 我是豪豪~\n * 一直在想送给你一个最最特别的礼物\n * 想了很久做出这个\n * 这是只属于你一个人的礼物！\n *  \n * \"my love gift\"💕\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 1.0rem; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/*\n * 首先做一个框框来放我们的代码吧！\n * 那么~开动啦！！！\n */\n\npre {\n  position: fixed;\n  top: 30px; bottom: 30px;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n/*\n * 点亮代码~那我们就动手实现一下它吧~\n * Colors based on Base16 Ocean Dark\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n/*\n * 首先我们把这个代码框移一下吧~它太占地方啦\n */\n\n@media screen and (max-width: 768px) {pre { left: 6%;right: 6%;top: 50%; }}\n@media screen and (min-width: 768px) {pre { width: 48%;left: 50%;bottom: 30px; }}\n\n/*\n * 然后，一步一步实现给你的礼物\n */\n\n@media screen and (max-width: 768px) {\n    #heart, #echo {\n        position: fixed;\n        width: 300px; height: 300px;\n        margin: 30px auto;\n        left: 0; right: 0;\n        text-align: center;\n        -webkit-transform: scale(0.95);\n        transform: scale(0.95);\n    }\n}\n\n@media screen and (min-width: 768px) {\n    #heart, #echo {\n      position: fixed;\n      width: 300px; height: 300px;\n      top: calc(50% - 150px); left: calc(25% - 150px);\n      text-align: center;\n      -webkit-transform: scale(0.95);transform: scale(0.95);\n    }\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {left: 150px;}\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;transform-origin: 100% 100%;\n}\n\n/* 给它加上一点阴影ww */\n\n#heart::after {\n  box-shadow:inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n#heart::before {\n  box-shadow:inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n/*\n * 这可是~我的心~\n * 只属于你\n * >v<\n */\n\n#heart i::before {\n  content: 'heart beats for you';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 30px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n/*\n * 接下来\n * 施加一点魔法！\n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n  50% {\n    -webkit-transform: scale(1.00);\n            transform: scale(1.00);\n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   {\n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   {\n    opacity: 0.1;transform: scale(1);\n  }\n  100% {\n    opacity: 0;transform: scale(1.4);\n  }\n}\n\n/*\n * 别眨眼喔！\n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;animation-duration: 2000ms;\n  -webkit-animation-timing-function:cubic-bezier(0, 0, 0, 1.74);animation-timing-function:cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;animation-play-state: paused;\n}\n\n#heart {\n  -webkit-animation-name: heartbeat;animation-name: heartbeat;\n}\n#echo {\n  -webkit-animation-name: echo;animation-name: echo;\n}\n\n/*\n * 准备好了嘛~！\n */\n\n#heart, #echo {\n/*\n * ...3...\n *\n * ...2...\n *\n * ...1...\n *\n */\n  -webkit-animation-play-state: running;animation-play-state: running;\n}\n\n\n/*\n * 动起来了，我的心只为你跳动!\n * 诶嘿~~\n * 这是只属于陈海云的 我的心💕\n *\n * 亲爱哒！生日快乐！\n * 我爱你！\n *\n */\n\n/*\n * \"my love gift\" v0.0.1\n * Robot rights protected under BOT License & Apache2 license\n * 谨以此网页献给我的女朋友陈海云💕\n * 最爱你的 豪\n */";

  finalStyle = styles;

  openComment = false;

  isOn = true;

  writeStyleChar = function(which) {
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#style-text').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ':') {
      styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === '{') {
      styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $('#style-text').html() + which;
    }
    $('#style-text').html(styles);
    return $('#style-tag').append(which);
  };

  writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      if (isOn) {
        return setTimeout((function() {
          return writeStyles(message, index, openComment ? commentTime : codeTime);
        }), interval);
      }
    }
  };

  skip = function() {
    isOn = false;
    return setTimeout((function() {
      var pre;
      $('#style-text').html(finalStyle);
      $('#style-tag').html(finalStyle);
      pre = document.getElementById('style-text');
      return pre.scrollTop = pre.scrollHeight;
    }), 2 * commentTime);
  };

  $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>\n  <div style = 'position: fixed;left: 30px;bottom: 10px;'>\n    <a id='skipAnimation'>跳过动画</a>\n    <a style='color: #fff' onclick='location.reload()'>重新播放</a>\n  </div>");

  commentTime = 60;

  codeTime = 20;

  $(document).on('ready page:load', function() {
    return $('#skipAnimation').click(function() {
      return skip();
    });
  });

  writeStyles(styles, 0, commentTime);

}).call(this);
