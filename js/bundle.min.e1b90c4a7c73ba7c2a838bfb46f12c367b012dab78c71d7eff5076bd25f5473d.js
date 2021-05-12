const toggleToc=()=>{document.getElementById('toc').classList.toggle('show-toc');}
function preload(arrayOfImages){$(arrayOfImages).each(function(){$('<img />').attr('src',this).appendTo('body').css('display','none');});}
function resizeOverlay(){var height=$('#spotlight').height();$('#overlay').height(height+1000);}
function mapValueRange(value,inMin,inMax,outMin,outMax){return(value-inMin)*(outMax-outMin)/(inMax-inMin)+outMin;}
var mouseX=0;var mouseY=0;var mouseThreshold=10;var scrollThreshold=2;var scrollCounter=0;var currentScroll=0;var overlays=['overlay/0107_s.png','overlay/0108_s.png','overlay/0109_s.png','overlay/0110_s.png','overlay/0111_s.png','overlay/0112_s.png','overlay/0113_s.png','overlay/0114_s.png','overlay/0146_s.png','overlay/0147_s.png','overlay/0148_s.png','overlay/0149_s.png','overlay/0150_s.png','overlay/0151_s.png','overlay/0152_s.png','overlay/0153_s.png','overlay/0169_s.png','overlay/0170_s.png','overlay/0171_s.png','overlay/0172_s.png','overlay/0173_s.png','overlay/0174_s.png','overlay/0175_s.png','overlay/0176_s.png',];var nextOverlay=0;var colors=['#000000','#663300','#ff6666','#ff66ff','#ffcccc','#d3d3d3',];var nextColor=0;var interval=0;function showNewsletter(){interval=setInterval(function(){$('#newsletter').show();$('#mc_embed_signup').show();clearInterval(interval);},1000);}
function hideNewsletter(){$('#newsletter').hide();$('#mc_embed_signup').hide();}
function changeOverlay(){$('#overlay').css('background-image','url('+overlays[nextOverlay]+')')
if(nextOverlay==overlays.length-1)
nextOverlay=0;else
nextOverlay++;}
function changeBackgroundColor(forward){$('.bg-color').animate({backgroundColor:colors[nextColor]},7000);if(nextColor==colors.length-1)
nextColor=0;else
nextColor++;}
$(document).scroll(function(event){hideNewsletter();if(scrollCounter>scrollThreshold){changeOverlay();scrollCounter=0;}
scrollCounter++;});$(document).ready(function(){resizeOverlay();preload(overlays);});$(window).resize(function(){resizeOverlay();});$('#newsletter-cta').click(function(event){showNewsletter();});;(function(){'use strict';if(!document.queryCommandSupported('copy')){return;}
function flashCopyMessage(el,msg){el.textContent=msg;setTimeout(function(){el.textContent="Copy";},1000);}
function selectText(node){var selection=window.getSelection();var range=document.createRange();range.selectNodeContents(node);selection.removeAllRanges();selection.addRange(range);return selection;}
function addCopyButton(containerEl){var copyBtn=document.createElement("button");copyBtn.className="highlight-copy-btn";copyBtn.textContent="Copy";var codeEl=containerEl.firstElementChild;copyBtn.addEventListener('click',function(){try{var selection=selectText(codeEl);document.execCommand('copy');selection.removeAllRanges();flashCopyMessage(copyBtn,'Copied!')}catch(e){console&&console.log(e);flashCopyMessage(copyBtn,'Failed :\'(')}});containerEl.appendChild(copyBtn);}
var highlightBlocks=document.getElementsByClassName('highlight');Array.prototype.forEach.call(highlightBlocks,addCopyButton);})();