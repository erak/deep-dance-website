const toggleToc=()=>{document.getElementById('toc').classList.toggle('show-toc');}
function preload(arrayOfImages){$(arrayOfImages).each(function(){$('<img />').attr('src',this).appendTo('body').css('display','none');});}
function resizeOverlay(){var height=$('#spotlight').height();$('#overlay').height(height+1000);}
function mapValueRange(value,inMin,inMax,outMin,outMax){return(value-inMin)*(outMax-outMin)/(inMax-inMin)+outMin;}
var mouseX=0;var mouseY=0;var mouseThreshold=10;var currentScroll=0;var overlays=['overlay/0107.png','overlay/0108.png','overlay/0109.png','overlay/0110.png','overlay/0111.png','overlay/0112.png','overlay/0113.png','overlay/0114.png','overlay/0146.png','overlay/0147.png','overlay/0148.png','overlay/0149.png','overlay/0150.png','overlay/0151.png','overlay/0152.png','overlay/0153.png','overlay/0169.png','overlay/0170.png','overlay/0171.png','overlay/0172.png','overlay/0173.png','overlay/0174.png','overlay/0175.png','overlay/0176.png',];var nextOverlay=0;var colors=['#000000','#663300','#ff6666','#ff66ff','#ffcccc','#d3d3d3',];var nextColor=0;function changeOverlay(){$('#overlay').css('background-image','url('+overlays[nextOverlay]+')')
if(nextOverlay==overlays.length-1)
nextOverlay=0;else
nextOverlay++;}
function changeBackgroundColor(forward){$('.bg-color').animate({backgroundColor:colors[nextColor]},7000);if(nextColor==colors.length-1)
nextColor=0;else
nextColor++;}
$(document).scroll(function(event){changeOverlay();});$(document).ready(function(){resizeOverlay();setInterval(function(){changeBackgroundColor();},100);preload(overlays);});$(window).resize(function(){resizeOverlay();});;(function(){'use strict';if(!document.queryCommandSupported('copy')){return;}
function flashCopyMessage(el,msg){el.textContent=msg;setTimeout(function(){el.textContent="Copy";},1000);}
function selectText(node){var selection=window.getSelection();var range=document.createRange();range.selectNodeContents(node);selection.removeAllRanges();selection.addRange(range);return selection;}
function addCopyButton(containerEl){var copyBtn=document.createElement("button");copyBtn.className="highlight-copy-btn";copyBtn.textContent="Copy";var codeEl=containerEl.firstElementChild;copyBtn.addEventListener('click',function(){try{var selection=selectText(codeEl);document.execCommand('copy');selection.removeAllRanges();flashCopyMessage(copyBtn,'Copied!')}catch(e){console&&console.log(e);flashCopyMessage(copyBtn,'Failed :\'(')}});containerEl.appendChild(copyBtn);}
var highlightBlocks=document.getElementsByClassName('highlight');Array.prototype.forEach.call(highlightBlocks,addCopyButton);})();