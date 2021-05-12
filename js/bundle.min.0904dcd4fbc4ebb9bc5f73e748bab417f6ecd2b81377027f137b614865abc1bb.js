const toggleToc=()=>{document.getElementById('toc').classList.toggle('show-toc');}
function resizeOverlay(){var height=$('#spotlight').height();$('#overlay').height(height+1000);}
function mapValueRange(value,inMin,inMax,outMin,outMax){return(value-inMin)*(outMax-outMin)/(inMax-inMin)+outMin;}
var mouseX=0;var mouseY=0;var mouseThreshold=1;var scrollThreshold=1;var scrollCounter=0;var currentScroll=0;var overlays=[{src:'overlay/0109.png',loaded:false},{src:'overlay/0107.png',loaded:false},{src:'overlay/0110.png',loaded:false},{src:'overlay/0111.png',loaded:false},{src:'overlay/0112.png',loaded:false},{src:'overlay/0113.png',loaded:false},{src:'overlay/0114.png',loaded:false},{src:'overlay/0146.png',loaded:false},{src:'overlay/0147.png',loaded:false},{src:'overlay/0148.png',loaded:false},{src:'overlay/0149.png',loaded:false},{src:'overlay/0150.png',loaded:false},{src:'overlay/0151.png',loaded:false},{src:'overlay/0152.png',loaded:false},{src:'overlay/0153.png',loaded:false},{src:'overlay/0169.png',loaded:false},{src:'overlay/0170.png',loaded:false},{src:'overlay/0171.png',loaded:false},{src:'overlay/0108.png',loaded:false},{src:'overlay/0172.png',loaded:false},{src:'overlay/0173.png',loaded:false},{src:'overlay/0174.png',loaded:false},{src:'overlay/0175.png',loaded:false},{src:'overlay/0176.png',loaded:false},];var overlayIDs=new Map();var index=0;$(overlays).each(function(){overlayIDs[this.src]=index;index++;});var overlayChangeEnabled=false;var overlaysLoaded=0;var nextOverlay=0;var colors=['#000000','#663300','#ff6666','#ff66ff','#ffcccc','#d3d3d3',];var nextColor=0;var interval=0;function showNewsletter(){interval=setInterval(function(){$('#newsletter').show();$('#mc_embed_signup').show();clearInterval(interval);},1000);}
function hideNewsletter(){$('#newsletter').hide();$('#mc_embed_signup').hide();}
function initOverlays(){}
function preload(){for(var i=0;i<overlays.length;i++){var img=new Image();img.onload=function(event){var key=event.target.attributes['src'].nodeValue;overlays[overlayIDs[key]].loaded=true;overlaysLoaded++;}
img.src=overlays[i].src;}}
function changeOverlay(){if(overlaysLoaded==overlays.length){$('#overlay').css('background-image','url('+overlays[nextOverlay].src+')')
if(nextOverlay==overlays.length-1)
nextOverlay=0;else
nextOverlay++;}}
function changeBackgroundColor(forward){$('.bg-color').animate({backgroundColor:colors[nextColor]},7000);if(nextColor==colors.length-1)
nextColor=0;else
nextColor++;}
$(document).scroll(function(event){if(scrollCounter>scrollThreshold){changeOverlay();scrollCounter=0;}
scrollCounter++;hideNewsletter();});$(document).ready(function(){resizeOverlay();preload();});$(window).resize(function(){resizeOverlay();});$('#newsletter-cta').click(function(event){showNewsletter();});;(function(){'use strict';if(!document.queryCommandSupported('copy')){return;}
function flashCopyMessage(el,msg){el.textContent=msg;setTimeout(function(){el.textContent="Copy";},1000);}
function selectText(node){var selection=window.getSelection();var range=document.createRange();range.selectNodeContents(node);selection.removeAllRanges();selection.addRange(range);return selection;}
function addCopyButton(containerEl){var copyBtn=document.createElement("button");copyBtn.className="highlight-copy-btn";copyBtn.textContent="Copy";var codeEl=containerEl.firstElementChild;copyBtn.addEventListener('click',function(){try{var selection=selectText(codeEl);document.execCommand('copy');selection.removeAllRanges();flashCopyMessage(copyBtn,'Copied!')}catch(e){console&&console.log(e);flashCopyMessage(copyBtn,'Failed :\'(')}});containerEl.appendChild(copyBtn);}
var highlightBlocks=document.getElementsByClassName('highlight');Array.prototype.forEach.call(highlightBlocks,addCopyButton);})();