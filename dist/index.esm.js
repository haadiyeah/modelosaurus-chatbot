import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { forwardRef, createElement, createContext, useLayoutEffect, useEffect, useContext, useRef, useInsertionEffect, useCallback, useMemo, useId, useState, cloneElement, Children, isValidElement } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}:root,[data-theme]{background-color:hsl(var(--b1)/var(--tw-bg-opacity,1));color:hsl(var(--bc)/var(--tw-text-opacity,1))}html{-webkit-tap-highlight-color:transparent}:root{--pf:259 94% 44%;--sf:314 100% 40%;--af:174 75% 39%;--nf:214 20% 14%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:259 94% 51%;--pc:259 96% 91%;--s:314 100% 47%;--sc:314 100% 91%;--a:174 75% 46%;--ac:174 75% 11%;--n:214 20% 21%;--nc:212 19% 87%;--b1:0 0% 100%;--b2:0 0% 95%;--b3:180 2% 90%;--bc:215 28% 17%;color-scheme:light}@media (prefers-color-scheme:dark){:root{--pf:262 80% 43%;--sf:316 70% 43%;--af:175 70% 34%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:262 80% 50%;--pc:0 0% 100%;--s:316 70% 50%;--sc:0 0% 100%;--a:175 70% 41%;--ac:0 0% 100%;--n:213 18% 20%;--nf:212 17% 17%;--nc:220 13% 69%;--b1:212 18% 14%;--b2:213 18% 12%;--b3:213 18% 10%;--bc:220 13% 69%;color-scheme:dark}}[data-theme=light]{--pf:259 94% 44%;--sf:314 100% 40%;--af:174 75% 39%;--nf:214 20% 14%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:259 94% 51%;--pc:259 96% 91%;--s:314 100% 47%;--sc:314 100% 91%;--a:174 75% 46%;--ac:174 75% 11%;--n:214 20% 21%;--nc:212 19% 87%;--b1:0 0% 100%;--b2:0 0% 95%;--b3:180 2% 90%;--bc:215 28% 17%;color-scheme:light}[data-theme=dark]{--pf:262 80% 43%;--sf:316 70% 43%;--af:175 70% 34%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:262 80% 50%;--pc:0 0% 100%;--s:316 70% 50%;--sc:0 0% 100%;--a:175 70% 41%;--ac:0 0% 100%;--n:213 18% 20%;--nf:212 17% 17%;--nc:220 13% 69%;--b1:212 18% 14%;--b2:213 18% 12%;--b3:213 18% 10%;--bc:220 13% 69%;color-scheme:dark}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.avatar{display:inline-flex;position:relative}.avatar>div{aspect-ratio:1/1;display:block;overflow:hidden}.avatar img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.avatar.placeholder>div{align-items:center;display:flex;justify-content:center}@media (hover:hover){.label a:hover{--tw-text-opacity:1;color:hsl(var(--bc)/var(--tw-text-opacity))}}.btn{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;animation:button-pop var(--animation-btn,.25s) ease-out;background-color:hsl(var(--b2)/var(--tw-bg-opacity));border-color:transparent;border-color:hsl(var(--b2)/var(--tw-border-opacity));border-radius:var(--rounded-btn,.5rem);border-width:var(--border-btn,1px);color:hsl(var(--bc)/var(--tw-text-opacity));cursor:pointer;display:inline-flex;flex-shrink:0;flex-wrap:wrap;font-size:.875rem;font-weight:600;gap:.5rem;height:3rem;justify-content:center;line-height:1em;min-height:3rem;outline-color:hsl(var(--bc)/1);padding-left:1rem;padding-right:1rem;text-align:center;text-decoration-line:none;text-transform:var(--btn-text-case,uppercase);transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-user-select:none;-moz-user-select:none;user-select:none}.btn-disabled,.btn:disabled,.btn[disabled]{pointer-events:none}.btn-group>input[type=radio].btn{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-group>input[type=radio].btn:before{content:attr(data-title)}.btn:is(input[type=checkbox]),.btn:is(input[type=radio]){-webkit-appearance:none;-moz-appearance:none;appearance:none;width:auto}.btn:is(input[type=checkbox]):after,.btn:is(input[type=radio]):after{--tw-content:attr(aria-label);content:var(--tw-content)}.chat{-moz-column-gap:.75rem;column-gap:.75rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));padding-bottom:.25rem;padding-top:.25rem}.chat-image{align-self:flex-end;grid-row:span 2/span 2}.chat-bubble{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--n)/var(--tw-bg-opacity));border-radius:var(--rounded-box,1rem);color:hsl(var(--nc)/var(--tw-text-opacity));display:block;max-width:90%;min-height:2.75rem;min-width:2.75rem;padding:.5rem 1rem;position:relative;width:-moz-fit-content;width:fit-content}.chat-bubble:before{background-color:inherit;bottom:0;content:\"\";height:.75rem;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;position:absolute;width:.75rem}.chat-start{grid-template-columns:auto 1fr;place-items:start}.chat-start .chat-footer,.chat-start .chat-header{grid-column-start:2}.chat-start .chat-image{grid-column-start:1}.chat-start .chat-bubble{border-bottom-left-radius:0;grid-column-start:2}.chat-start .chat-bubble:before{left:-.749rem;-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3V0c0 1-2 3-3 3'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3V0c0 1-2 3-3 3'/%3E%3C/svg%3E\")}[dir=rtl] .chat-start .chat-bubble:before{-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3C2 3 0 1 0 0'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3C2 3 0 1 0 0'/%3E%3C/svg%3E\")}.chat-end{grid-template-columns:1fr auto;place-items:end}.chat-end .chat-footer,.chat-end .chat-header{grid-column-start:1}.chat-end .chat-image{grid-column-start:2}.chat-end .chat-bubble{border-bottom-right-radius:0;grid-column-start:1}.chat-end .chat-bubble:before{left:99.9%;-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3C2 3 0 1 0 0'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3C2 3 0 1 0 0'/%3E%3C/svg%3E\")}[dir=rtl] .chat-end .chat-bubble:before{-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3V0c0 1-2 3-3 3'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3V0c0 1-2 3-3 3'/%3E%3C/svg%3E\")}@media (hover:hover){.btn:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsl(var(--b3)/var(--tw-bg-opacity));border-color:hsl(var(--b3)/var(--tw-border-opacity))}.btn.glass:hover{--glass-opacity:25%;--glass-border-opacity:15%}.btn-disabled:hover,.btn:disabled:hover,.btn[disabled]:hover{--tw-border-opacity:0;--tw-bg-opacity:0.2;--tw-text-opacity:0.2;background-color:hsl(var(--n)/var(--tw-bg-opacity));color:hsl(var(--bc)/var(--tw-text-opacity))}.btn:is(input[type=checkbox]:checked):hover,.btn:is(input[type=radio]:checked):hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsl(var(--pf)/var(--tw-bg-opacity));border-color:hsl(var(--pf)/var(--tw-border-opacity))}}.label{align-items:center;display:flex;justify-content:space-between;padding:.5rem .25rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.input{--tw-border-opacity:0;--tw-bg-opacity:1;background-color:hsl(var(--b1)/var(--tw-bg-opacity));border-color:hsl(var(--bc)/var(--tw-border-opacity));border-radius:var(--rounded-btn,.5rem);border-width:1px;flex-shrink:1;font-size:1rem;height:3rem;line-height:2;line-height:1.5rem;padding-left:1rem;padding-right:1rem}.input-group>.input{isolation:isolate}.input-group>*,.input-group>.input,.input-group>.select,.input-group>.textarea{border-radius:0}.join{align-items:stretch;border-radius:var(--rounded-btn,.5rem);display:inline-flex}.join :where(.join-item){border-end-end-radius:0;border-end-start-radius:0;border-start-end-radius:0;border-start-start-radius:0}.join .join-item:not(:first-child):not(:last-child),.join :not(:first-child):not(:last-child) .join-item{border-end-end-radius:0;border-end-start-radius:0;border-start-end-radius:0;border-start-start-radius:0}.join .join-item:first-child:not(:last-child),.join :first-child:not(:last-child) .join-item{border-end-end-radius:0;border-start-end-radius:0}.join .dropdown .join-item:first-child:not(:last-child),.join :first-child:not(:last-child) .dropdown .join-item{border-end-end-radius:inherit;border-start-end-radius:inherit}.join :where(.join-item:first-child:not(:last-child)),.join :where(:first-child:not(:last-child) .join-item){border-end-start-radius:inherit;border-start-start-radius:inherit}.join .join-item:last-child:not(:first-child),.join :last-child:not(:first-child) .join-item{border-end-start-radius:0;border-start-start-radius:0}.join :where(.join-item:last-child:not(:first-child)),.join :where(:last-child:not(:first-child) .join-item){border-end-end-radius:inherit;border-start-end-radius:inherit}@supports not selector(:has(*)){:where(.join *){border-radius:inherit}}@supports selector(:has(*)){:where(.join :has(.join-item)){border-radius:inherit}}.avatar-group :where(.avatar){--tw-border-opacity:1;border-color:hsl(var(--b1)/var(--tw-border-opacity));border-radius:9999px;border-width:4px;overflow:hidden}.btm-nav>* .label{font-size:1rem;line-height:1.5rem}.btn:active:focus,.btn:active:hover{animation:button-pop 0s ease-out;transform:scale(var(--btn-focus-scale,.97))}.btn:focus-visible{outline-offset:2px;outline-style:solid;outline-width:2px}.btn.glass{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);outline-color:currentColor}.btn.glass.btn-active{--glass-opacity:25%;--glass-border-opacity:15%}.btn.btn-disabled,.btn:disabled,.btn[disabled]{--tw-border-opacity:0;--tw-bg-opacity:0.2;--tw-text-opacity:0.2;background-color:hsl(var(--n)/var(--tw-bg-opacity));color:hsl(var(--bc)/var(--tw-text-opacity))}.btn-group>.btn-active,.btn-group>input[type=radio]:checked.btn{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity));border-color:hsl(var(--p)/var(--tw-border-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.btn-group>.btn-active:focus-visible,.btn-group>input[type=radio]:checked.btn:focus-visible{outline-color:hsl(var(--p)/1);outline-style:solid;outline-width:2px}.btn:is(input[type=checkbox]:checked),.btn:is(input[type=radio]:checked){--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity));border-color:hsl(var(--p)/var(--tw-border-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.btn:is(input[type=checkbox]:checked):focus-visible,.btn:is(input[type=radio]:checked):focus-visible{outline-color:hsl(var(--p)/1)}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale,.98))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}.input input:focus{outline:2px solid transparent;outline-offset:2px}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input-bordered{--tw-border-opacity:0.2}.input:focus,.input:focus-within{outline-color:hsl(var(--bc)/.2);outline-offset:2px;outline-style:solid;outline-width:2px}.input-disabled,.input:disabled,.input[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:0.2;background-color:hsl(var(--b2)/var(--tw-bg-opacity));border-color:hsl(var(--b2)/var(--tw-border-opacity));cursor:not-allowed}.input-disabled::-moz-placeholder,.input:disabled::-moz-placeholder,.input[disabled]::-moz-placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.input-disabled::placeholder,.input:disabled::placeholder,.input[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.join>:where(:not(:first-child)){margin-bottom:0;margin-left:-1px;margin-top:0}.loading{aspect-ratio:1/1;background-color:currentColor;display:inline-block;-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' stroke='%23000' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes spinner_zKoa{to{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%25{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%25{stroke-dasharray:42 150;stroke-dashoffset:-16}95%25,to{stroke-dasharray:42 150;stroke-dashoffset:-59}}%3C/style%3E%3Cg style='transform-origin:center;animation:spinner_zKoa 2s linear infinite'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' style='stroke-linecap:round;animation:spinner_YpZS 1.5s ease-out infinite'/%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' stroke='%23000' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes spinner_zKoa{to{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%25{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%25{stroke-dasharray:42 150;stroke-dashoffset:-16}95%25,to{stroke-dasharray:42 150;stroke-dashoffset:-59}}%3C/style%3E%3Cg style='transform-origin:center;animation:spinner_zKoa 2s linear infinite'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' style='stroke-linecap:round;animation:spinner_YpZS 1.5s ease-out infinite'/%3E%3C/g%3E%3C/svg%3E\");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:100%;mask-size:100%;pointer-events:none;width:1.5rem}.loading-dots{-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes spinner_8HQG{0%25,57.14%25{animation-timing-function:cubic-bezier(.33,.66,.66,1);transform:translate(0)}28.57%25{animation-timing-function:cubic-bezier(.33,0,.66,.33);transform:translateY(-6px)}to{transform:translate(0)}}.spinner_qM83{animation:spinner_8HQG 1.05s infinite}%3C/style%3E%3Ccircle class='spinner_qM83' cx='4' cy='12' r='3'/%3E%3Ccircle class='spinner_qM83' cx='12' cy='12' r='3' style='animation-delay:.1s'/%3E%3Ccircle class='spinner_qM83' cx='20' cy='12' r='3' style='animation-delay:.2s'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes spinner_8HQG{0%25,57.14%25{animation-timing-function:cubic-bezier(.33,.66,.66,1);transform:translate(0)}28.57%25{animation-timing-function:cubic-bezier(.33,0,.66,.33);transform:translateY(-6px)}to{transform:translate(0)}}.spinner_qM83{animation:spinner_8HQG 1.05s infinite}%3C/style%3E%3Ccircle class='spinner_qM83' cx='4' cy='12' r='3'/%3E%3Ccircle class='spinner_qM83' cx='12' cy='12' r='3' style='animation-delay:.1s'/%3E%3Ccircle class='spinner_qM83' cx='20' cy='12' r='3' style='animation-delay:.2s'/%3E%3C/svg%3E\")}.loading-md{width:1.5rem}.mockup-browser .mockup-browser-toolbar .input{--tw-bg-opacity:1;background-color:hsl(var(--b2)/var(--tw-bg-opacity));display:block;height:1.75rem;margin-left:auto;margin-right:auto;overflow:hidden;padding-left:2rem;position:relative;text-overflow:ellipsis;white-space:nowrap;width:24rem}.mockup-browser .mockup-browser-toolbar .input:before{--tw-translate-y:-50%;aspect-ratio:1/1;border-color:currentColor;border-radius:9999px;border-width:2px;height:.75rem;left:.5rem}.mockup-browser .mockup-browser-toolbar .input:after,.mockup-browser .mockup-browser-toolbar .input:before{content:\"\";opacity:.6;position:absolute;top:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.mockup-browser .mockup-browser-toolbar .input:after{--tw-translate-y:25%;--tw-rotate:-45deg;border-color:currentColor;border-radius:9999px;border-width:1px;height:.5rem;left:1.25rem}@keyframes modal-pop{0%{opacity:0}}@keyframes progress-loading{50%{background-position-x:-115%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes toast-pop{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}.btn-md{font-size:.875rem;height:3rem;min-height:3rem;padding-left:1rem;padding-right:1rem}.btn-square:where(.btn-md){height:3rem;padding:0;width:3rem}.btn-circle:where(.btn-md){border-radius:9999px;height:3rem;padding:0;width:3rem}.join.join-vertical{flex-direction:column}.join.join-vertical .join-item:first-child:not(:last-child),.join.join-vertical :first-child:not(:last-child) .join-item{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:inherit;border-top-right-radius:inherit}.join.join-vertical .join-item:last-child:not(:first-child),.join.join-vertical :last-child:not(:first-child) .join-item{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.join.join-horizontal{flex-direction:row}.join.join-horizontal .join-item:first-child:not(:last-child),.join.join-horizontal :first-child:not(:last-child) .join-item{border-bottom-left-radius:inherit;border-bottom-right-radius:0;border-top-left-radius:inherit;border-top-right-radius:0}.join.join-horizontal .join-item:last-child:not(:first-child),.join.join-horizontal :last-child:not(:first-child) .join-item{border-bottom-left-radius:0;border-bottom-right-radius:inherit;border-top-left-radius:0;border-top-right-radius:inherit}.avatar.online:before{background-color:hsl(var(--su)/var(--tw-bg-opacity))}.avatar.offline:before,.avatar.online:before{--tw-bg-opacity:1;border-radius:9999px;content:\"\";display:block;height:15%;outline-color:hsl(var(--b1)/1);outline-style:solid;outline-width:2px;position:absolute;right:7%;top:7%;width:15%;z-index:10}.avatar.offline:before{background-color:hsl(var(--b3)/var(--tw-bg-opacity))}.btn-group .btn:not(:first-child):not(:last-child){border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0;border-top-right-radius:0}.btn-group .btn:first-child:not(:last-child){border-bottom-left-radius:var(--rounded-btn,.5rem);border-bottom-right-radius:0;border-top-left-radius:var(--rounded-btn,.5rem);border-top-right-radius:0;margin-left:-1px;margin-top:0}.btn-group .btn:last-child:not(:first-child){border-bottom-left-radius:0;border-bottom-right-radius:var(--rounded-btn,.5rem);border-top-left-radius:0;border-top-right-radius:var(--rounded-btn,.5rem)}.btn-group-horizontal .btn:not(:first-child):not(:last-child){border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0;border-top-right-radius:0}.btn-group-horizontal .btn:first-child:not(:last-child){border-bottom-left-radius:var(--rounded-btn,.5rem);border-bottom-right-radius:0;border-top-left-radius:var(--rounded-btn,.5rem);border-top-right-radius:0;margin-left:-1px;margin-top:0}.btn-group-horizontal .btn:last-child:not(:first-child){border-bottom-left-radius:0;border-bottom-right-radius:var(--rounded-btn,.5rem);border-top-left-radius:0;border-top-right-radius:var(--rounded-btn,.5rem)}.btn-group-vertical .btn:first-child:not(:last-child){border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--rounded-btn,.5rem);border-top-right-radius:var(--rounded-btn,.5rem);margin-left:0;margin-top:-1px}.btn-group-vertical .btn:last-child:not(:first-child){border-bottom-left-radius:var(--rounded-btn,.5rem);border-bottom-right-radius:var(--rounded-btn,.5rem);border-top-left-radius:0;border-top-right-radius:0}.join.join-vertical>:where(:not(:first-child)){margin-left:0;margin-right:0;margin-top:-1px}.join.join-horizontal>:where(:not(:first-child)){margin-bottom:0;margin-left:-1px;margin-top:0}.pointer-events-none{pointer-events:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.-bottom-1{bottom:-.25rem}.-left-3{left:-.75rem}.-right-3{right:-.75rem}.bottom-0{bottom:0}.right-0{right:0}.z-40{z-index:40}.z-50{z-index:50}.-mt-4{margin-top:-1rem}.mb-3{margin-bottom:.75rem}.mt-5{margin-top:1.25rem}.flex{display:flex}.contents{display:contents}.hidden{display:none}.size-3{height:.75rem;width:.75rem}.size-4{height:1rem;width:1rem}.size-6{height:1.5rem;width:1.5rem}.h-0{height:0}.h-2{height:.5rem}.h-6{height:1.5rem}.h-\\[38rem\\]{height:38rem}.w-10{width:2.5rem}.w-6{width:1.5rem}.w-full{width:100%}.flex-1{flex:1 1 0%}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:9999px}.rounded-b-lg{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-b-xl{border-bottom-left-radius:.75rem;border-bottom-right-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.bg-base-200{--tw-bg-opacity:1;background-color:hsl(var(--b2)/var(--tw-bg-opacity,1))}.bg-base-300{--tw-bg-opacity:1;background-color:hsl(var(--b3)/var(--tw-bg-opacity,1))}.bg-red-900{--tw-bg-opacity:1;background-color:rgb(127 29 29/var(--tw-bg-opacity,1))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-primary{--tw-gradient-from:hsl(var(--p)/1) var(--tw-gradient-from-position);--tw-gradient-to:hsl(var(--p)/0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.via-secondary{--tw-gradient-to:hsl(var(--s)/0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),hsl(var(--s)/1) var(--tw-gradient-via-position),var(--tw-gradient-to)}.to-primary{--tw-gradient-to:hsl(var(--p)/1) var(--tw-gradient-to-position)}.bg-\\[length\\:200\\%_100\\%\\]{background-size:200% 100%}.p-2{padding:.5rem}.p-6{padding:1.5rem}.text-center{text-align:center}.text-xs{font-size:.75rem;line-height:1rem}.text-purple-600{--tw-text-opacity:1;color:rgb(147 51 234/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.opacity-40{opacity:.4}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.drop-shadow-2xl{--tw-drop-shadow:drop-shadow(0 25px 25px rgba(0,0,0,.15))}.drop-shadow-2xl,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@keyframes gradient{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}.animate-gradient{animation:gradient 3s ease infinite}.hover\\:opacity-90:hover{opacity:.9}@media (min-width:768px){.md\\:bottom-4{bottom:1rem}.md\\:right-7{right:1.75rem}.md\\:w-\\[30rem\\]{width:30rem}}";
styleInject(css_248z$1,{"insertAt":"top"});

var css_248z = "@font-face{font-display:swap;font-family:Octosquare;font-style:normal;font-weight:400;src:url(\"../assets/fonts/TT/ Octosquares/ Trial/ Compressed/ Regular.ttf\") format(\"truetype\")}.font-octosquare{font-family:Octosquare,sans-serif}";
styleInject(css_248z,{"insertAt":"top"});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * lucide-react v0.279.0 - ISC
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * lucide-react v0.279.0 - ISC
 */


const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, children, ...rest }, ref) => createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: `lucide lucide-${toKebabCase(iconName)}`,
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...(Array.isArray(children) ? children : [children]) || []
      ]
    )
  );
  Component.displayName = `${iconName}`;
  return Component;
};

/**
 * lucide-react v0.279.0 - ISC
 */


const ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);

/**
 * lucide-react v0.279.0 - ISC
 */


const ChevronUp = createLucideIcon("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);

/**
 * lucide-react v0.279.0 - ISC
 */


const SendHorizontal = createLucideIcon("SendHorizontal", [
  ["path", { d: "m3 3 3 9-3 9 19-9Z", key: "1aobqy" }],
  ["path", { d: "M6 12h16", key: "s4cdu5" }]
]);

/**
 * @public
 */
const MotionConfigContext = createContext({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never",
});

const MotionContext = createContext({});

/**
 * @public
 */
const PresenceContext = createContext(null);

const isBrowser = typeof document !== "undefined";

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

const LazyContext = createContext({ strict: false });

/**
 * Convert camelCase to dash-case properties.
 */
const camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

function useVisualElement(Component, visualState, props, createVisualElement) {
    const { visualElement: parent } = useContext(MotionContext);
    const lazyContext = useContext(LazyContext);
    const presenceContext = useContext(PresenceContext);
    const reducedMotionConfig = useContext(MotionConfigContext).reducedMotion;
    const visualElementRef = useRef();
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState,
            parent,
            props,
            presenceContext,
            blockInitialAnimation: presenceContext
                ? presenceContext.initial === false
                : false,
            reducedMotionConfig,
        });
    }
    const visualElement = visualElementRef.current;
    useInsertionEffect(() => {
        visualElement && visualElement.update(props, presenceContext);
    });
    /**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */
    const wantsHandoff = useRef(Boolean(props[optimizedAppearDataAttribute] && !window.HandoffComplete));
    useIsomorphicLayoutEffect(() => {
        if (!visualElement)
            return;
        visualElement.render();
        /**
         * Ideally this function would always run in a useEffect.
         *
         * However, if we have optimised appear animations to handoff from,
         * it needs to happen synchronously to ensure there's no flash of
         * incorrect styles in the event of a hydration error.
         *
         * So if we detect a situtation where optimised appear animations
         * are running, we use useLayoutEffect to trigger animations.
         */
        if (wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
    });
    useEffect(() => {
        if (!visualElement)
            return;
        visualElement.updateFeatures();
        if (!wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
        if (wantsHandoff.current) {
            wantsHandoff.current = false;
            // This ensures all future calls to animateChanges() will run in useEffect
            window.HandoffComplete = true;
        }
    });
    return visualElement;
}

function isRefObject(ref) {
    return (ref &&
        typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}

/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return useCallback((instance) => {
        instance && visualState.mount && visualState.mount(instance);
        if (visualElement) {
            instance
                ? visualElement.mount(instance)
                : visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if (isRefObject(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}

/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}

function isAnimationControls(v) {
    return (v !== null &&
        typeof v === "object" &&
        typeof v.start === "function");
}

const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
];
const variantProps = ["initial", ...variantPriorityOrder];

function isControllingVariants(props) {
    return (isAnimationControls(props.animate) ||
        variantProps.some((name) => isVariantLabel(props[name])));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}

function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || isVariantLabel(initial)
                ? initial
                : undefined,
            animate: isVariantLabel(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}

function useCreateMotionContext(props) {
    const { initial, animate } = getCurrentTreeVariants(props, useContext(MotionContext));
    return useMemo(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}

const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
};
const featureDefinitions = {};
for (const key in featureProps) {
    featureDefinitions[key] = {
        isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
    };
}

function loadFeatures(features) {
    for (const key in features) {
        featureDefinitions[key] = {
            ...featureDefinitions[key],
            ...features[key],
        };
    }
}

const LayoutGroupContext = createContext({});

/**
 * Internal, exported only for usage in Framer
 */
const SwitchLayoutGroupContext = createContext({});

const motionComponentSymbol = Symbol.for("motionComponentSymbol");

/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */
function createMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component, }) {
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        /**
         * If we need to measure the element we load this functionality in a
         * separate class component in order to gain access to getSnapshotBeforeUpdate.
         */
        let MeasureLayout;
        const configAndProps = {
            ...useContext(MotionConfigContext),
            ...props,
            layoutId: useLayoutId(props),
        };
        const { isStatic } = configAndProps;
        const context = useCreateMotionContext(props);
        const visualState = useVisualState(props, isStatic);
        if (!isStatic && isBrowser) {
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement);
            /**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */
            const initialLayoutGroupConfig = useContext(SwitchLayoutGroupContext);
            const isStrict = useContext(LazyContext).strict;
            if (context.visualElement) {
                MeasureLayout = context.visualElement.loadFeatures(
                // Note: Pass the full new combined props to correctly re-render dynamic feature components.
                configAndProps, isStrict, preloadedFeatures, initialLayoutGroupConfig);
            }
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return (React.createElement(MotionContext.Provider, { value: context },
            MeasureLayout && context.visualElement ? (React.createElement(MeasureLayout, { visualElement: context.visualElement, ...configAndProps })) : null,
            useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)));
    }
    const ForwardRefComponent = forwardRef(MotionComponent);
    ForwardRefComponent[motionComponentSymbol] = Component;
    return ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
    const layoutGroupId = useContext(LayoutGroupContext).id;
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}

/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig = {}) {
        return createMotionComponent(createConfig(Component, customMotionComponentConfig));
    }
    if (typeof Proxy === "undefined") {
        return custom;
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    const componentCache = new Map();
    return new Proxy(custom, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: (_target, key) => {
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, custom(key));
            }
            return componentCache.get(key);
        },
    });
}

/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];

function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(Component)) {
        return true;
    }
    return false;
}

const scaleCorrectors = {};
function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
}

/**
 * Generate a list of every possible transform key.
 */
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
];
/**
 * A quick lookup for transform props.
 */
const transformProps = new Set(transformPropOrder);

function isForcedMotionValue(key, { layout, layoutId }) {
    return (transformProps.has(key) ||
        key.startsWith("origin") ||
        ((layout || layoutId !== undefined) &&
            (!!scaleCorrectors[key] || key === "opacity")));
}

const isMotionValue = (value) => Boolean(value && value.getVelocity);

const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
const numTransforms = transformPropOrder.length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(transform, { enableHardwareAcceleration = true, allowTransformNone = true, }, transformIsDefault, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */
    for (let i = 0; i < numTransforms; i++) {
        const key = transformPropOrder[i];
        if (transform[key] !== undefined) {
            const transformName = translateAlias[key] || key;
            transformString += `${transformName}(${transform[key]}) `;
        }
    }
    if (enableHardwareAcceleration && !transform.z) {
        transformString += "translateZ(0)";
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}

const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = checkStringStartsWith("--");
const isCSSVariableToken = checkStringStartsWith("var(--");
const cssVariableRegex = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;

/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
const getValueAsType = (value, type) => {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};

const clamp = (min, max, v) => Math.min(Math.max(v, min), max);

const number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = {
    ...number,
    transform: (v) => clamp(0, 1, v),
};
const scale = {
    ...number,
    default: 1,
};

/**
 * TODO: When we move from string as a source of truth to data models
 * everything in this folder should probably be referred to as models vs types
 */
// If this number is a decimal, make it just five decimal places
// to avoid exponents
const sanitize = (v) => Math.round(v * 100000) / 100000;
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
    return typeof v === "string";
}

const createUnitType = (unit) => ({
    test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = createUnitType("deg");
const percent = createUnitType("%");
const px = createUnitType("px");
const vh = createUnitType("vh");
const vw = createUnitType("vw");
const progressPercentage = {
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100),
};

const int = {
    ...number,
    transform: Math.round,
};

const numberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    size: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    // Transform props
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px,
    // Misc
    zIndex: int,
    // SVG
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int,
};

function buildHTMLStyles(state, latestValues, options, transformTemplate) {
    const { style, vars, transform, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    let transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */
    for (const key in latestValues) {
        const value = latestValues[key];
        /**
         * If this is a CSS variable we don't do any further processing.
         */
        if (isCSSVariableName(key)) {
            vars[key] = value;
            continue;
        }
        // Convert the value to its default value type, ie 0 -> "0px"
        const valueType = numberValueTypes[key];
        const valueAsType = getValueAsType(value, valueType);
        if (transformProps.has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            // If we already know we have a non-default transform, early return
            if (!transformIsNone)
                continue;
            // Otherwise check to see if this is a default transform
            if (value !== (valueType.default || 0))
                transformIsNone = false;
        }
        else if (key.startsWith("origin")) {
            // If this is a transform origin, flag and enable further transform-origin processing
            hasTransformOrigin = true;
            transformOrigin[key] = valueAsType;
        }
        else {
            style[key] = valueAsType;
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) {
            style.transform = buildTransform(state.transform, options, transformIsNone, transformTemplate);
        }
        else if (style.transform) {
            /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */
            style.transform = "none";
        }
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */
    if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0, } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}

const createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
});

function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
        if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues({ transformTemplate }, visualState, isStatic) {
    return useMemo(() => {
        const state = createHtmlRenderState();
        buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState, isStatic);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect =
            style.WebkitUserSelect =
                style.WebkitTouchCallout =
                    "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === undefined &&
        (props.onTap || props.onTapStart || props.whileTap)) {
        htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
}

/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
const validMotionProps = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return (key.startsWith("while") ||
        (key.startsWith("drag") && key !== "draggable") ||
        key.startsWith("layout") ||
        key.startsWith("onTap") ||
        key.startsWith("onPan") ||
        key.startsWith("onLayout") ||
        validMotionProps.has(key));
}

let shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp)
        return;
    // Explicitly filter our events
    shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    /**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */
    loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
        /**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */
        if (key === "values" && typeof props.values === "object")
            continue;
        if (shouldForward(key) ||
            (forwardMotionProps === true && isValidMotionProp(key)) ||
            (!isDom && !isValidMotionProp(key)) ||
            // If trying to use native HTML drag events, forward drag listeners
            (props["draggable"] && key.startsWith("onDrag"))) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}

function calcOrigin$1(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
}

const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = px.transform(-offset);
    // Build the dash array
    const pathLength = px.transform(length);
    const pathSpacing = px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, 
// This is object creation, which we try to avoid per-frame.
...latest }, options, isSVGTag, transformTemplate) {
    buildHTMLStyles(state, latest, options, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */
    if (isSVGTag) {
        if (state.style.viewBox) {
            state.attrs.viewBox = state.style.viewBox;
        }
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    if (attrScale !== undefined)
        attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}

const createSvgRenderState = () => ({
    ...createHtmlRenderState(),
    attrs: {},
});

const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

function useSVGProps(props, visualState, _isStatic, Component) {
    const visualProps = useMemo(() => {
        const state = createSvgRenderState();
        buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, isSVGTag(Component), props.transformTemplate);
        return {
            ...state.attrs,
            style: { ...state.style },
        };
    }, [visualState]);
    if (props.style) {
        const rawStyles = {};
        copyRawValuesOnly(rawStyles, props.style, props);
        visualProps.style = { ...rawStyles, ...visualProps.style };
    }
    return visualProps;
}

function createUseRender(forwardMotionProps = false) {
    const useRender = (Component, props, ref, { latestValues }, isStatic) => {
        const useVisualProps = isSVGComponent(Component)
            ? useSVGProps
            : useHTMLProps;
        const visualProps = useVisualProps(props, latestValues, isStatic, Component);
        const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
        const elementProps = {
            ...filteredProps,
            ...visualProps,
            ref,
        };
        /**
         * If component has been handed a motion value as its child,
         * memoise its initial value and render that. Subsequent updates
         * will be handled by the onChange handler
         */
        const { children } = props;
        const renderedChildren = useMemo(() => (isMotionValue(children) ? children.get() : children), [children]);
        return createElement(Component, {
            ...elementProps,
            children: renderedChildren,
        });
    };
    return useRender;
}

function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for (const key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}

/**
 * A set of attribute names that are always read/written as camel case.
 */
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);

function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, undefined, projection);
    for (const key in renderState.attrs) {
        element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
}

function scrapeMotionValuesFromProps$1(props, prevProps) {
    const { style } = props;
    const newValues = {};
    for (const key in style) {
        if (isMotionValue(style[key]) ||
            (prevProps.style && isMotionValue(prevProps.style[key])) ||
            isForcedMotionValue(key, props)) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}

function scrapeMotionValuesFromProps(props, prevProps) {
    const newValues = scrapeMotionValuesFromProps$1(props, prevProps);
    for (const key in props) {
        if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
            const targetKey = transformPropOrder.indexOf(key) !== -1
                ? "attr" + key.charAt(0).toUpperCase() + key.substring(1)
                : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}

function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
    }
    return definition;
}

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    const ref = useRef(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}

const isKeyframesTarget = (v) => {
    return Array.isArray(v);
};

const isCustomValue = (v) => {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = (v) => {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
function resolveMotionValue(value) {
    const unwrappedValue = isMotionValue(value) ? value.get() : value;
    return isCustomValue(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}

function makeState({ scrapeMotionValuesFromProps, createRenderState, onMount, }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    if (onMount) {
        state.mount = (instance) => onMount(props, instance, state);
    }
    return state;
}
const makeUseVisualState = (config) => (props, isStatic) => {
    const context = useContext(MotionContext);
    const presenceContext = useContext(PresenceContext);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
        values[key] = resolveMotionValue(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    if (context &&
        isVariantNode$1 &&
        !isControllingVariants$1 &&
        props.inherit !== false) {
        if (initial === undefined)
            initial = context.initial;
        if (animate === undefined)
            animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext
        ? presenceContext.initial === false
        : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !isAnimationControls(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        list.forEach((definition) => {
            const resolved = resolveVariantFromProps(props, definition);
            if (!resolved)
                return;
            const { transitionEnd, transition, ...target } = resolved;
            for (const key in target) {
                let valueTarget = target[key];
                if (Array.isArray(valueTarget)) {
                    /**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */
                    const index = isInitialAnimationBlocked
                        ? valueTarget.length - 1
                        : 0;
                    valueTarget = valueTarget[index];
                }
                if (valueTarget !== null) {
                    values[key] = valueTarget;
                }
            }
            for (const key in transitionEnd)
                values[key] = transitionEnd[key];
        });
    }
    return values;
}

const noop = (any) => any;

class Queue {
    constructor() {
        this.order = [];
        this.scheduled = new Set();
    }
    add(process) {
        if (!this.scheduled.has(process)) {
            this.scheduled.add(process);
            this.order.push(process);
            return true;
        }
    }
    remove(process) {
        const index = this.order.indexOf(process);
        if (index !== -1) {
            this.order.splice(index, 1);
            this.scheduled.delete(process);
        }
    }
    clear() {
        this.order.length = 0;
        this.scheduled.clear();
    }
}
function createRenderStep(runNextFrame) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */
    let thisFrame = new Queue();
    let nextFrame = new Queue();
    let numToRun = 0;
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */
    let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */
    const toKeepAlive = new WeakSet();
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (queue.add(callback) && addToCurrentFrame && isProcessing) {
                // If we're adding it to the currently running queue, update its measured size
                numToRun = thisFrame.order.length;
            }
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */
        cancel: (callback) => {
            nextFrame.remove(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */
        process: (frameData) => {
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [thisFrame, nextFrame] = [nextFrame, thisFrame];
            // Clear the next frame queue
            nextFrame.clear();
            // Execute this frame
            numToRun = thisFrame.order.length;
            if (numToRun) {
                for (let i = 0; i < numToRun; i++) {
                    const callback = thisFrame.order[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}

const stepsOrder = [
    "prepare",
    "read",
    "update",
    "preRender",
    "render",
    "postRender",
];
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0,
        timestamp: 0,
        isProcessing: false,
    };
    const steps = stepsOrder.reduce((acc, key) => {
        acc[key] = createRenderStep(() => (runNextFrame = true));
        return acc;
    }, {});
    const processStep = (stepId) => steps[stepId].process(state);
    const processBatch = () => {
        const timestamp = performance.now();
        runNextFrame = false;
        state.delta = useDefaultElapsed
            ? 1000 / 60
            : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        stepsOrder.forEach(processStep);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = () => {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) {
            scheduleNextBatch(processBatch);
        }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false) => {
            if (!runNextFrame)
                wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process) => stepsOrder.forEach((key) => steps[key].cancel(process));
    return { schedule, cancel, state, steps };
}

const { schedule: frame, cancel: cancelFrame, state: frameData, steps, } = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

const svgMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
        createRenderState: createSvgRenderState,
        onMount: (props, instance, { renderState, latestValues }) => {
            frame.read(() => {
                try {
                    renderState.dimensions =
                        typeof instance.getBBox ===
                            "function"
                            ? instance.getBBox()
                            : instance.getBoundingClientRect();
                }
                catch (e) {
                    // Most likely trying to measure an unrendered element under Firefox
                    renderState.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                    };
                }
            });
            frame.render(() => {
                buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, isSVGTag(instance.tagName), props.transformTemplate);
                renderSVG(instance, renderState);
            });
        },
    }),
};

const htmlMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
        createRenderState: createHtmlRenderState,
    }),
};

function createDomMotionConfig(Component, { forwardMotionProps = false }, preloadedFeatures, createVisualElement) {
    const baseConfig = isSVGComponent(Component)
        ? svgMotionConfig
        : htmlMotionConfig;
    return {
        ...baseConfig,
        preloadedFeatures,
        useRender: createUseRender(forwardMotionProps),
        createVisualElement,
        Component,
    };
}

function addDomEvent(target, eventName, handler, options = { passive: true }) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler);
}

const isPrimaryPointer = (event) => {
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    }
    else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */
        return event.isPrimary !== false;
    }
};

function extractEventInfo(event, pointType = "page") {
    return {
        point: {
            x: event[pointType + "X"],
            y: event[pointType + "Y"],
        },
    };
}
const addPointerInfo = (handler) => {
    return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};

function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);

function createLock(name) {
    let lock = null;
    return () => {
        const openLock = () => {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
const globalHorizontalLock = createLock("dragHorizontal");
const globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    let lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        const openHorizontal = globalHorizontalLock();
        const openVertical = globalVerticalLock();
        if (openHorizontal && openVertical) {
            lock = () => {
                openHorizontal();
                openVertical();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal)
                openHorizontal();
            if (openVertical)
                openVertical();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    const openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
        return true;
    openGestureLock();
    return false;
}

class Feature {
    constructor(node) {
        this.isMounted = false;
        this.node = node;
    }
    update() { }
}

function addHoverEvent(node, isActive) {
    const eventName = "pointer" + (isActive ? "enter" : "leave");
    const callbackName = "onHover" + (isActive ? "Start" : "End");
    const handleEvent = (event, info) => {
        if (event.pointerType === "touch" || isDragActive())
            return;
        const props = node.getProps();
        if (node.animationState && props.whileHover) {
            node.animationState.setActive("whileHover", isActive);
        }
        if (props[callbackName]) {
            frame.update(() => props[callbackName](event, info));
        }
    };
    return addPointerEvent(node.current, eventName, handleEvent, {
        passive: !node.getProps()[callbackName],
    });
}
class HoverGesture extends Feature {
    mount() {
        this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
    }
    unmount() { }
}

class FocusGesture extends Feature {
    constructor() {
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let isFocusVisible = false;
        /**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */
        try {
            isFocusVisible = this.node.current.matches(":focus-visible");
        }
        catch (e) {
            isFocusVisible = true;
        }
        if (!isFocusVisible || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", true);
        this.isActive = true;
    }
    onBlur() {
        if (!this.isActive || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", false);
        this.isActive = false;
    }
    mount() {
        this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() { }
}

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
const isNodeOrChild = (parent, child) => {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};

function fireSyntheticPointerEvent(name, handler) {
    if (!handler)
        return;
    const syntheticPointerEvent = new PointerEvent("pointer" + name);
    handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
class PressGesture extends Feature {
    constructor() {
        super(...arguments);
        this.removeStartListeners = noop;
        this.removeEndListeners = noop;
        this.removeAccessibleListeners = noop;
        this.startPointerPress = (startEvent, startInfo) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const props = this.node.getProps();
            const endPointerPress = (endEvent, endInfo) => {
                if (!this.checkPressEnd())
                    return;
                const { onTap, onTapCancel, globalTapTarget } = this.node.getProps();
                frame.update(() => {
                    /**
                     * We only count this as a tap gesture if the event.target is the same
                     * as, or a child of, this component's element
                     */
                    !globalTapTarget &&
                        !isNodeOrChild(this.node.current, endEvent.target)
                        ? onTapCancel && onTapCancel(endEvent, endInfo)
                        : onTap && onTap(endEvent, endInfo);
                });
            };
            const removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, { passive: !(props.onTap || props["onPointerUp"]) });
            const removePointerCancelListener = addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), { passive: !(props.onTapCancel || props["onPointerCancel"]) });
            this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
            this.startPress(startEvent, startInfo);
        };
        this.startAccessiblePress = () => {
            const handleKeydown = (keydownEvent) => {
                if (keydownEvent.key !== "Enter" || this.isPressing)
                    return;
                const handleKeyup = (keyupEvent) => {
                    if (keyupEvent.key !== "Enter" || !this.checkPressEnd())
                        return;
                    fireSyntheticPointerEvent("up", (event, info) => {
                        const { onTap } = this.node.getProps();
                        if (onTap) {
                            frame.update(() => onTap(event, info));
                        }
                    });
                };
                this.removeEndListeners();
                this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup);
                fireSyntheticPointerEvent("down", (event, info) => {
                    this.startPress(event, info);
                });
            };
            const removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown);
            const handleBlur = () => {
                if (!this.isPressing)
                    return;
                fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
            };
            const removeBlurListener = addDomEvent(this.node.current, "blur", handleBlur);
            this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
        };
    }
    startPress(event, info) {
        this.isPressing = true;
        const { onTapStart, whileTap } = this.node.getProps();
        /**
         * Ensure we trigger animations before firing event callback
         */
        if (whileTap && this.node.animationState) {
            this.node.animationState.setActive("whileTap", true);
        }
        if (onTapStart) {
            frame.update(() => onTapStart(event, info));
        }
    }
    checkPressEnd() {
        this.removeEndListeners();
        this.isPressing = false;
        const props = this.node.getProps();
        if (props.whileTap && this.node.animationState) {
            this.node.animationState.setActive("whileTap", false);
        }
        return !isDragActive();
    }
    cancelPress(event, info) {
        if (!this.checkPressEnd())
            return;
        const { onTapCancel } = this.node.getProps();
        if (onTapCancel) {
            frame.update(() => onTapCancel(event, info));
        }
    }
    mount() {
        const props = this.node.getProps();
        const removePointerListener = addPointerEvent(props.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(props.onTapStart || props["onPointerStart"]) });
        const removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
    }
    unmount() {
        this.removeStartListeners();
        this.removeEndListeners();
        this.removeAccessibleListeners();
    }
}

/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
const observers = new WeakMap();
const fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}

const thresholdNames = {
    some: 0,
    all: 1,
};
class InViewFeature extends Feature {
    constructor() {
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.unmount();
        const { viewport = {} } = this.node.getProps();
        const { root, margin: rootMargin, amount = "some", once } = viewport;
        const options = {
            root: root ? root.current : undefined,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount],
        };
        const onIntersectionUpdate = (entry) => {
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */
            if (this.isInView === isIntersecting)
                return;
            this.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */
            if (once && !isIntersecting && this.hasEnteredView) {
                return;
            }
            else if (isIntersecting) {
                this.hasEnteredView = true;
            }
            if (this.node.animationState) {
                this.node.animationState.setActive("whileInView", isIntersecting);
            }
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */
            const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const callback = isIntersecting ? onViewportEnter : onViewportLeave;
            callback && callback(entry);
        };
        return observeIntersection(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined")
            return;
        const { props, prevProps } = this.node;
        const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
        if (hasOptionsChanged) {
            this.startObserver();
        }
    }
    unmount() { }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
}

const gestureAnimations = {
    inView: {
        Feature: InViewFeature,
    },
    tap: {
        Feature: PressGesture,
    },
    focus: {
        Feature: FocusGesture,
    },
    hover: {
        Feature: HoverGesture,
    },
};

function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (let i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}

/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    const current = {};
    visualElement.values.forEach((value, key) => (current[key] = value.get()));
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity$1(visualElement) {
    const velocity = {};
    visualElement.values.forEach((value, key) => (velocity[key] = value.getVelocity()));
    return velocity;
}
function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== undefined ? custom : props.custom, getCurrent(visualElement), getVelocity$1(visualElement));
}

let warning = noop;
let invariant = noop;
if (process.env.NODE_ENV !== "production") {
    warning = (check, message) => {
        if (!check && typeof console !== "undefined") {
            console.warn(message);
        }
    };
    invariant = (check, message) => {
        if (!check) {
            throw new Error(message);
        }
    };
}

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
const secondsToMilliseconds = (seconds) => seconds * 1000;
const millisecondsToSeconds = (milliseconds) => milliseconds / 1000;

const instantAnimationState = {
    current: false,
};

const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";

function isWaapiSupportedEasing(easing) {
    return Boolean(!easing ||
        (typeof easing === "string" && supportedWaapiEasing[easing]) ||
        isBezierDefinition(easing) ||
        (Array.isArray(easing) && easing.every(isWaapiSupportedEasing)));
}
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
};
function mapEasingToNativeEasing(easing) {
    if (!easing)
        return undefined;
    return isBezierDefinition(easing)
        ? cubicBezierAsString(easing)
        : Array.isArray(easing)
            ? easing.map(mapEasingToNativeEasing)
            : supportedWaapiEasing[easing];
}

function animateStyle(element, valueName, keyframes, { delay = 0, duration, repeat = 0, repeatType = "loop", ease, times, } = {}) {
    const keyframeOptions = { [valueName]: keyframes };
    if (times)
        keyframeOptions.offset = times;
    const easing = mapEasingToNativeEasing(ease);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */
    if (Array.isArray(easing))
        keyframeOptions.easing = easing;
    return element.animate(keyframeOptions, {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal",
    });
}

function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }) {
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1
        ? 0
        : keyframes.length - 1;
    return keyframes[index];
}

/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) *
    t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

const easeIn = cubicBezier(0.42, 0, 1, 1);
const easeOut = cubicBezier(0, 0, 0.58, 1);
const easeInOut = cubicBezier(0.42, 0, 0.58, 1);

const isEasingArray = (ease) => {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);

const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circIn);

const backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
const backIn = reverseEasing(backOut);
const backInOut = mirrorEasing(backIn);

const anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

const easingLookup = {
    linear: noop,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate,
};
const easingDefinitionToFunction = (definition) => {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return cubicBezier(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        invariant(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};

/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
const isColorString = (type, testProp) => (v) => {
    return Boolean((isString(v) && singleColorRegex.test(v) && v.startsWith(type)) ||
        (testProp && Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (!isString(v))
        return v;
    const [a, b, c, alpha] = v.match(floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};

const clampRgbUnit = (v) => clamp(0, 255, v);
const rgbUnit = {
    ...number,
    transform: (v) => Math.round(clampRgbUnit(v)),
};
const rgba = {
    test: isColorString("rgb", "red"),
    parse: splitColor("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" +
        rgbUnit.transform(red) +
        ", " +
        rgbUnit.transform(green) +
        ", " +
        rgbUnit.transform(blue) +
        ", " +
        sanitize(alpha.transform(alpha$1)) +
        ")",
};

function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
        // Or we have 3 characters, ie #F00
    }
    else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: isColorString("#"),
    parse: parseHex,
    transform: rgba.transform,
};

const hsla = {
    test: isColorString("hsl", "hue"),
    parse: splitColor("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ("hsla(" +
            Math.round(hue) +
            ", " +
            percent.transform(sanitize(saturation)) +
            ", " +
            percent.transform(sanitize(lightness)) +
            ", " +
            sanitize(alpha.transform(alpha$1)) +
            ")");
    },
};

const color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else {
            return hex.parse(v);
        }
    },
    transform: (v) => {
        return isString(v)
            ? v
            : v.hasOwnProperty("red")
                ? rgba.transform(v)
                : hsla.transform(v);
    },
};

/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
const mix = (from, to, progress) => -progress * from + progress * to + from;

// Adapted from https://gist.github.com/mjackson/5311256
function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}

// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
};
const colorTypes = [hex, rgba, hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    invariant(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
    let model = type.parse(color);
    if (type === hsla) {
        // TODO Remove this cast - needed since Framer Motion's stricter typing
        model = hslaToRgba(model);
    }
    return model;
}
const mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    const blended = { ...fromRGBA };
    return (v) => {
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v);
        return rgba.transform(blended);
    };
};

function test(v) {
    var _a, _b;
    return (isNaN(v) &&
        isString(v) &&
        (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) +
            (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) >
            0);
}
const cssVarTokeniser = {
    regex: cssVariableRegex,
    countKey: "Vars",
    token: "${v}",
    parse: noop,
};
const colorTokeniser = {
    regex: colorRegex,
    countKey: "Colors",
    token: "${c}",
    parse: color.parse,
};
const numberTokeniser = {
    regex: floatRegex,
    countKey: "Numbers",
    token: "${n}",
    parse: number.parse,
};
function tokenise(info, { regex, countKey, token, parse }) {
    const matches = info.tokenised.match(regex);
    if (!matches)
        return;
    info["num" + countKey] = matches.length;
    info.tokenised = info.tokenised.replace(regex, token);
    info.values.push(...matches.map(parse));
}
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const info = {
        value: originalValue,
        tokenised: originalValue,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0,
    };
    if (info.value.includes("var(--"))
        tokenise(info, cssVarTokeniser);
    tokenise(info, colorTokeniser);
    tokenise(info, numberTokeniser);
    return info;
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    const { values, numColors, numVars, tokenised } = analyseComplexValue(source);
    const numValues = values.length;
    return (v) => {
        let output = tokenised;
        for (let i = 0; i < numValues; i++) {
            if (i < numVars) {
                output = output.replace(cssVarTokeniser.token, v[i]);
            }
            else if (i < numVars + numColors) {
                output = output.replace(colorTokeniser.token, color.transform(v[i]));
            }
            else {
                output = output.replace(numberTokeniser.token, sanitize(v[i]));
            }
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone$1(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone: getAnimatableNone$1,
};

const mixImmediate = (origin, target) => (p) => `${p > 0 ? target : origin}`;
function getMixer(origin, target) {
    if (typeof origin === "number") {
        return (v) => mix(origin, target, v);
    }
    else if (color.test(origin)) {
        return mixColor(origin, target);
    }
    else {
        return origin.startsWith("var(")
            ? mixImmediate(origin, target)
            : mixComplex(origin, target);
    }
}
const mixArray = (from, to) => {
    const output = [...from];
    const numValues = output.length;
    const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
    return (v) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
const mixObject = (origin, target) => {
    const output = { ...origin, ...target };
    const blendValue = {};
    for (const key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
const mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyseComplexValue(origin);
    const targetStats = analyseComplexValue(target);
    const canInterpolate = originStats.numVars === targetStats.numVars &&
        originStats.numColors === targetStats.numColors &&
        originStats.numNumbers >= targetStats.numNumbers;
    if (canInterpolate) {
        return pipe(mixArray(originStats.values, targetStats.values), template);
    }
    else {
        warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return mixImmediate(origin, target);
    }
};

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

const mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
    if (typeof v === "number") {
        return mixNumber;
    }
    else if (typeof v === "string") {
        return color.test(v) ? mixColor : mixComplex;
    }
    else if (Array.isArray(v)) {
        return mixArray;
    }
    else if (typeof v === "object") {
        return mixObject;
    }
    return mixNumber;
}
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || detectMixerFactory(output[0]);
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || noop : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length, "Both input and output ranges must be the same length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */
    if (inputLength === 1)
        return () => output[0];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [...input].reverse();
        output = [...output].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
        let i = 0;
        if (numMixers > 1) {
            for (; i < input.length - 2; i++) {
                if (v < input[i + 1])
                    break;
            }
        }
        const progressInRange = progress(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp
        ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v))
        : interpolator;
}

function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = progress(0, remaining, i);
        offset.push(mix(min, 1, offsetProgress));
    }
}

function defaultOffset(arr) {
    const offset = [0];
    fillOffset(offset, arr.length - 1);
    return offset;
}

function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}

function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut", }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */
    const easingFunctions = isEasingArray(ease)
        ? ease.map(easingDefinitionToFunction)
        : easingDefinitionToFunction(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = {
        done: false,
        value: keyframeValues[0],
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */
    const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length
        ? times
        : defaultOffset(keyframeValues), duration);
    const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions)
            ? easingFunctions
            : defaultEasing(keyframeValues, easingFunctions),
    });
    return {
        calculatedDuration: duration,
        next: (t) => {
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        },
    };
}

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration$1 = 10.0;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1, }) {
    let envelope;
    let derivative;
    warning(duration <= secondsToMilliseconds(maxDuration$1), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */
    dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
    duration = clamp(minDuration, maxDuration$1, millisecondsToSeconds(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        /**
         * Critically-damped spring
         */
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = secondsToMilliseconds(duration);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: 0.0,
        stiffness: 100,
        damping: 10,
        mass: 1.0,
        isResolvedFromDuration: false,
        ...options,
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        const derived = findSpring(options);
        springOptions = {
            ...springOptions,
            ...derived,
            mass: 1.0,
        };
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring({ keyframes, restDelta, restSpeed, ...options }) {
    const origin = keyframes[0];
    const target = keyframes[keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration, } = getSpringOptions({
        ...options,
        velocity: -millisecondsToSeconds(options.velocity || 0),
    });
    const initialVelocity = velocity || 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
    restDelta || (restDelta = isGranularScale ? 0.005 : 0.5);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (target -
                envelope *
                    (((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) /
                        angularFreq) *
                        Math.sin(angularFreq * t) +
                        initialDelta * Math.cos(angularFreq * t)));
        };
    }
    else if (dampingRatio === 1) {
        // Critically damped spring
        resolveSpring = (t) => target -
            Math.exp(-undampedAngularFreq * t) *
                (initialDelta +
                    (initialVelocity + undampedAngularFreq * initialDelta) * t);
    }
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return (target -
                (envelope *
                    ((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) *
                        Math.sinh(freqForT) +
                        dampedAngularFreq *
                            initialDelta *
                            Math.cosh(freqForT))) /
                    dampedAngularFreq);
        };
    }
    return {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                let currentVelocity = initialVelocity;
                if (t !== 0) {
                    /**
                     * We only need to calculate velocity for under-damped springs
                     * as over- and critically-damped springs can't overshoot, so
                     * checking only for displacement is enough.
                     */
                    if (dampingRatio < 1) {
                        currentVelocity = calcGeneratorVelocity(resolveSpring, t, current);
                    }
                    else {
                        currentVelocity = 0;
                    }
                }
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? target : current;
            return state;
        },
    };
}

function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed, }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin,
    };
    const isOutOfBounds = (v) => (min !== undefined && v < min) || (max !== undefined && v > max);
    const nearestBoundary = (v) => {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */
    if (target !== ideal)
        amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
        if (!isOutOfBounds(state.value))
            return;
        timeReachedBoundary = t;
        spring$1 = spring({
            keyframes: [state.value, nearestBoundary(state.value)],
            velocity: calcGeneratorVelocity(calcLatest, t, state.value),
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed,
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t) => {
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */
            let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */
            if (timeReachedBoundary !== undefined && t > timeReachedBoundary) {
                return spring$1.next(t - timeReachedBoundary);
            }
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        },
    };
}

const frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
        start: () => frame.update(passTimestamp, true),
        stop: () => cancelFrame(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */
        now: () => frameData.isProcessing ? frameData.timestamp : performance.now(),
    };
};

/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}

const types = {
    decay: inertia,
    inertia,
    tween: keyframes,
    keyframes: keyframes,
    spring,
};
/**
 * Animate a single value on the main thread.
 *
 * This function is written, where functionality overlaps,
 * to be largely spec-compliant with WAAPI to allow fungibility
 * between the two.
 */
function animateValue({ autoplay = true, delay = 0, driver = frameloopDriver, keyframes: keyframes$1, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", onPlay, onStop, onComplete, onUpdate, ...options }) {
    let speed = 1;
    let hasStopped = false;
    let resolveFinishedPromise;
    let currentFinishedPromise;
    /**
     * Resolve the current Promise every time we enter the
     * finished state. This is WAAPI-compatible behaviour.
     */
    const updateFinishedPromise = () => {
        currentFinishedPromise = new Promise((resolve) => {
            resolveFinishedPromise = resolve;
        });
    };
    // Create the first finished promise
    updateFinishedPromise();
    let animationDriver;
    const generatorFactory = types[type] || keyframes;
    /**
     * If this isn't the keyframes generator and we've been provided
     * strings as keyframes, we need to interpolate these.
     */
    let mapNumbersToKeyframes;
    if (generatorFactory !== keyframes &&
        typeof keyframes$1[0] !== "number") {
        if (process.env.NODE_ENV !== "production") {
            invariant(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
        }
        mapNumbersToKeyframes = interpolate([0, 100], keyframes$1, {
            clamp: false,
        });
        keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
    let mirroredGenerator;
    if (repeatType === "mirror") {
        mirroredGenerator = generatorFactory({
            ...options,
            keyframes: [...keyframes$1].reverse(),
            velocity: -(options.velocity || 0),
        });
    }
    let playState = "idle";
    let holdTime = null;
    let startTime = null;
    let cancelTime = null;
    /**
     * If duration is undefined and we have repeat options,
     * we need to calculate a duration from the generator.
     *
     * We set it to the generator itself to cache the duration.
     * Any timeline resolver will need to have already precalculated
     * the duration by this step.
     */
    if (generator.calculatedDuration === null && repeat) {
        generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    let resolvedDuration = Infinity;
    let totalDuration = Infinity;
    if (calculatedDuration !== null) {
        resolvedDuration = calculatedDuration + repeatDelay;
        totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
    }
    let currentTime = 0;
    const tick = (timestamp) => {
        if (startTime === null)
            return;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */
        if (speed > 0)
            startTime = Math.min(startTime, timestamp);
        if (speed < 0)
            startTime = Math.min(timestamp - totalDuration / speed, startTime);
        if (holdTime !== null) {
            currentTime = holdTime;
        }
        else {
            // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
            // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
            // example.
            currentTime = Math.round(timestamp - startTime) * speed;
        }
        // Rebase on delay
        const timeWithoutDelay = currentTime - delay * (speed >= 0 ? 1 : -1);
        const isInDelayPhase = speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
        currentTime = Math.max(timeWithoutDelay, 0);
        /**
         * If this animation has finished, set the current time
         * to the total duration.
         */
        if (playState === "finished" && holdTime === null) {
            currentTime = totalDuration;
        }
        let elapsed = currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = Math.min(currentTime, totalDuration) / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const isOddIteration = Boolean(currentIteration % 2);
            if (isOddIteration) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) {
                        iterationProgress -= repeatDelay / resolvedDuration;
                    }
                }
                else if (repeatType === "mirror") {
                    frameGenerator = mirroredGenerator;
                }
            }
            elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */
        const state = isInDelayPhase
            ? { done: false, value: keyframes$1[0] }
            : frameGenerator.next(elapsed);
        if (mapNumbersToKeyframes) {
            state.value = mapNumbersToKeyframes(state.value);
        }
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) {
            done = speed >= 0 ? currentTime >= totalDuration : currentTime <= 0;
        }
        const isAnimationFinished = holdTime === null &&
            (playState === "finished" || (playState === "running" && done));
        if (onUpdate) {
            onUpdate(state.value);
        }
        if (isAnimationFinished) {
            finish();
        }
        return state;
    };
    const stopAnimationDriver = () => {
        animationDriver && animationDriver.stop();
        animationDriver = undefined;
    };
    const cancel = () => {
        playState = "idle";
        stopAnimationDriver();
        resolveFinishedPromise();
        updateFinishedPromise();
        startTime = cancelTime = null;
    };
    const finish = () => {
        playState = "finished";
        onComplete && onComplete();
        stopAnimationDriver();
        resolveFinishedPromise();
    };
    const play = () => {
        if (hasStopped)
            return;
        if (!animationDriver)
            animationDriver = driver(tick);
        const now = animationDriver.now();
        onPlay && onPlay();
        if (holdTime !== null) {
            startTime = now - holdTime;
        }
        else if (!startTime || playState === "finished") {
            startTime = now;
        }
        if (playState === "finished") {
            updateFinishedPromise();
        }
        cancelTime = startTime;
        holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */
        playState = "running";
        animationDriver.start();
    };
    if (autoplay) {
        play();
    }
    const controls = {
        then(resolve, reject) {
            return currentFinishedPromise.then(resolve, reject);
        },
        get time() {
            return millisecondsToSeconds(currentTime);
        },
        set time(newTime) {
            newTime = secondsToMilliseconds(newTime);
            currentTime = newTime;
            if (holdTime !== null || !animationDriver || speed === 0) {
                holdTime = newTime;
            }
            else {
                startTime = animationDriver.now() - newTime / speed;
            }
        },
        get duration() {
            const duration = generator.calculatedDuration === null
                ? calcGeneratorDuration(generator)
                : generator.calculatedDuration;
            return millisecondsToSeconds(duration);
        },
        get speed() {
            return speed;
        },
        set speed(newSpeed) {
            if (newSpeed === speed || !animationDriver)
                return;
            speed = newSpeed;
            controls.time = millisecondsToSeconds(currentTime);
        },
        get state() {
            return playState;
        },
        play,
        pause: () => {
            playState = "paused";
            holdTime = currentTime;
        },
        stop: () => {
            hasStopped = true;
            if (playState === "idle")
                return;
            playState = "idle";
            onStop && onStop();
            cancel();
        },
        cancel: () => {
            if (cancelTime !== null)
                tick(cancelTime);
            cancel();
        },
        complete: () => {
            playState = "finished";
        },
        sample: (elapsed) => {
            startTime = 0;
            return tick(elapsed);
        },
    };
    return controls;
}

function memo(callback) {
    let result;
    return () => {
        if (result === undefined)
            result = callback();
        return result;
    };
}

const supportsWaapi = memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
/**
 * A list of values that can be hardware-accelerated.
 */
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
]);
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
const sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxDuration = 20000;
const requiresPregeneratedKeyframes = (valueName, options) => options.type === "spring" ||
    valueName === "backgroundColor" ||
    !isWaapiSupportedEasing(options.ease);
function createAcceleratedAnimation(value, valueName, { onUpdate, onComplete, ...options }) {
    const canAccelerateAnimation = supportsWaapi() &&
        acceleratedValues.has(valueName) &&
        !options.repeatDelay &&
        options.repeatType !== "mirror" &&
        options.damping !== 0 &&
        options.type !== "inertia";
    if (!canAccelerateAnimation)
        return false;
    /**
     * TODO: Unify with js/index
     */
    let hasStopped = false;
    let resolveFinishedPromise;
    let currentFinishedPromise;
    /**
     * Cancelling an animation will write to the DOM. For safety we want to defer
     * this until the next `update` frame lifecycle. This flag tracks whether we
     * have a pending cancel, if so we shouldn't allow animations to finish.
     */
    let pendingCancel = false;
    /**
     * Resolve the current Promise every time we enter the
     * finished state. This is WAAPI-compatible behaviour.
     */
    const updateFinishedPromise = () => {
        currentFinishedPromise = new Promise((resolve) => {
            resolveFinishedPromise = resolve;
        });
    };
    // Create the first finished promise
    updateFinishedPromise();
    let { keyframes, duration = 300, ease, times } = options;
    /**
     * If this animation needs pre-generated keyframes then generate.
     */
    if (requiresPregeneratedKeyframes(valueName, options)) {
        const sampleAnimation = animateValue({
            ...options,
            repeat: 0,
            delay: 0,
        });
        let state = { done: false, value: keyframes[0] };
        const pregeneratedKeyframes = [];
        /**
         * Bail after 20 seconds of pre-generated keyframes as it's likely
         * we're heading for an infinite loop.
         */
        let t = 0;
        while (!state.done && t < maxDuration) {
            state = sampleAnimation.sample(t);
            pregeneratedKeyframes.push(state.value);
            t += sampleDelta;
        }
        times = undefined;
        keyframes = pregeneratedKeyframes;
        duration = t - sampleDelta;
        ease = "linear";
    }
    const animation = animateStyle(value.owner.current, valueName, keyframes, {
        ...options,
        duration,
        /**
         * This function is currently not called if ease is provided
         * as a function so the cast is safe.
         *
         * However it would be possible for a future refinement to port
         * in easing pregeneration from Motion One for browsers that
         * support the upcoming `linear()` easing function.
         */
        ease: ease,
        times,
    });
    const cancelAnimation = () => {
        pendingCancel = false;
        animation.cancel();
    };
    const safeCancel = () => {
        pendingCancel = true;
        frame.update(cancelAnimation);
        resolveFinishedPromise();
        updateFinishedPromise();
    };
    /**
     * Prefer the `onfinish` prop as it's more widely supported than
     * the `finished` promise.
     *
     * Here, we synchronously set the provided MotionValue to the end
     * keyframe. If we didn't, when the WAAPI animation is finished it would
     * be removed from the element which would then revert to its old styles.
     */
    animation.onfinish = () => {
        if (pendingCancel)
            return;
        value.set(getFinalKeyframe(keyframes, options));
        onComplete && onComplete();
        safeCancel();
    };
    /**
     * Animation interrupt callback.
     */
    const controls = {
        then(resolve, reject) {
            return currentFinishedPromise.then(resolve, reject);
        },
        attachTimeline(timeline) {
            animation.timeline = timeline;
            animation.onfinish = null;
            return noop;
        },
        get time() {
            return millisecondsToSeconds(animation.currentTime || 0);
        },
        set time(newTime) {
            animation.currentTime = secondsToMilliseconds(newTime);
        },
        get speed() {
            return animation.playbackRate;
        },
        set speed(newSpeed) {
            animation.playbackRate = newSpeed;
        },
        get duration() {
            return millisecondsToSeconds(duration);
        },
        play: () => {
            if (hasStopped)
                return;
            animation.play();
            /**
             * Cancel any pending cancel tasks
             */
            cancelFrame(cancelAnimation);
        },
        pause: () => animation.pause(),
        stop: () => {
            hasStopped = true;
            if (animation.playState === "idle")
                return;
            /**
             * WAAPI doesn't natively have any interruption capabilities.
             *
             * Rather than read commited styles back out of the DOM, we can
             * create a renderless JS animation and sample it twice to calculate
             * its current value, "previous" value, and therefore allow
             * Motion to calculate velocity for any subsequent animation.
             */
            const { currentTime } = animation;
            if (currentTime) {
                const sampleAnimation = animateValue({
                    ...options,
                    autoplay: false,
                });
                value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
            }
            safeCancel();
        },
        complete: () => {
            if (pendingCancel)
                return;
            animation.finish();
        },
        cancel: safeCancel,
    };
    return controls;
}

function createInstantAnimation({ keyframes, delay, onUpdate, onComplete, }) {
    const setValue = () => {
        onUpdate && onUpdate(keyframes[keyframes.length - 1]);
        onComplete && onComplete();
        /**
         * TODO: As this API grows it could make sense to always return
         * animateValue. This will be a bigger project as animateValue
         * is frame-locked whereas this function resolves instantly.
         * This is a behavioural change and also has ramifications regarding
         * assumptions within tests.
         */
        return {
            time: 0,
            speed: 1,
            duration: 0,
            play: (noop),
            pause: (noop),
            stop: (noop),
            then: (resolve) => {
                resolve();
                return Promise.resolve();
            },
            cancel: (noop),
            complete: (noop),
        };
    };
    return delay
        ? animateValue({
            keyframes: [0, 1],
            duration: 0,
            delay,
            onComplete: setValue,
        })
        : setValue();
}

const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
};
const criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
});
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8,
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
const ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
};
const getDefaultTransition = (valueKey, { keyframes }) => {
    if (keyframes.length > 2) {
        return keyframesTransition;
    }
    else if (transformProps.has(valueKey)) {
        return valueKey.startsWith("scale")
            ? criticallyDampedSpring(keyframes[1])
            : underDampedSpring;
    }
    return ease;
};

/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
const isAnimatable = (key, value) => {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        (complex.test(value) || value === "0") && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};

/**
 * Properties that should default to 1 or 100%
 */
const maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
        return v;
    const [number] = value.match(floatRegex) || [];
    if (!number)
        return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = {
    ...complex,
    getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    },
};

/**
 * A map of default value types for common values
 */
const defaultValueTypes = {
    ...numberValueTypes,
    // Color props
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter,
};
/**
 * Gets the default ValueType for the provided value key
 */
const getDefaultValueType = (key) => defaultValueTypes[key];

function getAnimatableNone(key, value) {
    let defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter)
        defaultValueType = complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone
        ? defaultValueType.getAnimatableNone(value)
        : undefined;
}

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
const isZeroValueString = (v) => /^0[^.\s]+$/.test(v);

function isNone(value) {
    if (typeof value === "number") {
        return value === 0;
    }
    else if (value !== null) {
        return value === "none" || value === "0" || isZeroValueString(value);
    }
}

function getKeyframes(value, valueName, target, transition) {
    const isTargetAnimatable = isAnimatable(valueName, target);
    let keyframes;
    if (Array.isArray(target)) {
        keyframes = [...target];
    }
    else {
        keyframes = [null, target];
    }
    const defaultOrigin = transition.from !== undefined ? transition.from : value.get();
    let animatableTemplateValue = undefined;
    const noneKeyframeIndexes = [];
    for (let i = 0; i < keyframes.length; i++) {
        /**
         * Fill null/wildcard keyframes
         */
        if (keyframes[i] === null) {
            keyframes[i] = i === 0 ? defaultOrigin : keyframes[i - 1];
        }
        if (isNone(keyframes[i])) {
            noneKeyframeIndexes.push(i);
        }
        // TODO: Clean this conditional, it works for now
        if (typeof keyframes[i] === "string" &&
            keyframes[i] !== "none" &&
            keyframes[i] !== "0") {
            animatableTemplateValue = keyframes[i];
        }
    }
    if (isTargetAnimatable &&
        noneKeyframeIndexes.length &&
        animatableTemplateValue) {
        for (let i = 0; i < noneKeyframeIndexes.length; i++) {
            const index = noneKeyframeIndexes[i];
            keyframes[index] = getAnimatableNone(valueName, animatableTemplateValue);
        }
    }
    return keyframes;
}

/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
}
function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
}

const MotionGlobalConfig = {
    skipAnimations: false,
};

const animateMotionValue = (valueName, value, target, transition = {}) => {
    return (onComplete) => {
        const valueTransition = getValueTransition(transition, valueName) || {};
        /**
         * Most transition values are currently completely overwritten by value-specific
         * transitions. In the future it'd be nicer to blend these transitions. But for now
         * delay actually does inherit from the root transition if not value-specific.
         */
        const delay = valueTransition.delay || transition.delay || 0;
        /**
         * Elapsed isn't a public transition option but can be passed through from
         * optimized appear effects in milliseconds.
         */
        let { elapsed = 0 } = transition;
        elapsed = elapsed - secondsToMilliseconds(delay);
        const keyframes = getKeyframes(value, valueName, target, valueTransition);
        /**
         * Check if we're able to animate between the start and end keyframes,
         * and throw a warning if we're attempting to animate between one that's
         * animatable and another that isn't.
         */
        const originKeyframe = keyframes[0];
        const targetKeyframe = keyframes[keyframes.length - 1];
        const isOriginAnimatable = isAnimatable(valueName, originKeyframe);
        const isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
        warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
        let options = {
            keyframes,
            velocity: value.getVelocity(),
            ease: "easeOut",
            ...valueTransition,
            delay: -elapsed,
            onUpdate: (v) => {
                value.set(v);
                valueTransition.onUpdate && valueTransition.onUpdate(v);
            },
            onComplete: () => {
                onComplete();
                valueTransition.onComplete && valueTransition.onComplete();
            },
        };
        /**
         * If there's no transition defined for this value, we can generate
         * unqiue transition settings for this value.
         */
        if (!isTransitionDefined(valueTransition)) {
            options = {
                ...options,
                ...getDefaultTransition(valueName, options),
            };
        }
        /**
         * Both WAAPI and our internal animation functions use durations
         * as defined by milliseconds, while our external API defines them
         * as seconds.
         */
        if (options.duration) {
            options.duration = secondsToMilliseconds(options.duration);
        }
        if (options.repeatDelay) {
            options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
        }
        if (!isOriginAnimatable ||
            !isTargetAnimatable ||
            instantAnimationState.current ||
            valueTransition.type === false ||
            MotionGlobalConfig.skipAnimations) {
            /**
             * If we can't animate this value, or the global instant animation flag is set,
             * or this is simply defined as an instant transition, return an instant transition.
             */
            return createInstantAnimation(options);
        }
        /**
         * Animate via WAAPI if possible.
         */
        if (
        /**
         * If this is a handoff animation, the optimised animation will be running via
         * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
         * optimised animation.
         */
        !transition.isHandoff &&
            value.owner &&
            value.owner.current instanceof HTMLElement &&
            /**
             * If we're outputting values to onUpdate then we can't use WAAPI as there's
             * no way to read the value from WAAPI every frame.
             */
            !value.owner.getProps().onUpdate) {
            const acceleratedAnimation = createAcceleratedAnimation(value, valueName, options);
            if (acceleratedAnimation)
                return acceleratedAnimation;
        }
        /**
         * If we didn't create an accelerated animation, create a JS animation
         */
        return animateValue(options);
    };
};

function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
}

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
const isNumericalString = (v) => /^\-?\d*\.?\d+$/.test(v);

function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
        arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
        arr.splice(index, 1);
}

class SubscriptionManager {
    constructor() {
        this.subscriptions = [];
    }
    add(handler) {
        addUniqueItem(this.subscriptions, handler);
        return () => removeItem(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (let i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}

const warned = new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message))
        return;
    console.warn(message);
    if (element)
        console.warn(element);
    warned.add(message);
}

const isFloat = (value) => {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(init, options = {}) {
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */
        this.version = "10.18.0";
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        this.updateAndNotify = (v, render = true) => {
            this.prev = this.current;
            this.current = v;
            // Update timestamp
            const { delta, timestamp } = frameData;
            if (this.lastUpdated !== timestamp) {
                this.timeDelta = delta;
                this.lastUpdated = timestamp;
                frame.postRender(this.scheduleVelocityCheck);
            }
            // Update update subscribers
            if (this.prev !== this.current && this.events.change) {
                this.events.change.notify(this.current);
            }
            // Update velocity subscribers
            if (this.events.velocityChange) {
                this.events.velocityChange.notify(this.getVelocity());
            }
            // Update render subscribers
            if (render && this.events.renderRequest) {
                this.events.renderRequest.notify(this.current);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = () => frame.postRender(this.velocityCheck);
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = ({ timestamp }) => {
            if (timestamp !== this.lastUpdated) {
                this.prev = this.current;
                if (this.events.velocityChange) {
                    this.events.velocityChange.notify(this.getVelocity());
                }
            }
        };
        this.hasAnimated = false;
        this.prev = this.current = init;
        this.canTrackVelocity = isFloat(this.current);
        this.owner = options.owner;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
        if (process.env.NODE_ENV !== "production") {
            warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
        }
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new SubscriptionManager();
        }
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") {
            return () => {
                unsubscribe();
                /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */
                frame.read(() => {
                    if (!this.events.change.getSize()) {
                        this.stop();
                    }
                });
            };
        }
        return unsubscribe;
    }
    clearListeners() {
        for (const eventManagers in this.events) {
            this.events[eventManagers].clear();
        }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v, render = true) {
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = prev;
        this.timeDelta = delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v) {
        this.updateAndNotify(v);
        this.prev = v;
        this.stop();
        if (this.stopPassiveEffect)
            this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
        return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                velocityPerSecond(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    start(startAnimation) {
        this.stop();
        return new Promise((resolve) => {
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) {
                this.events.animationStart.notify();
            }
        }).then(() => {
            if (this.events.animationComplete) {
                this.events.animationComplete.notify();
            }
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) {
                this.events.animationCancel.notify();
            }
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
        }
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}

/**
 * Tests a provided value against a ValueType
 */
const testValueType = (v) => (type) => type.test(v);

/**
 * ValueType for "auto"
 */
const auto = {
    test: (v) => v === "auto",
    parse: (v) => v,
};

/**
 * A list of value types commonly used for dimensions
 */
const dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
const findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

/**
 * A list of all ValueTypes
 */
const valueTypes = [...dimensionValueTypes, color, complex];
/**
 * Tests a value against the list of ValueTypes
 */
const findValueType = (v) => valueTypes.find(testValueType(v));

/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, motionValue(value));
    }
}
function setTarget(visualElement, definition) {
    const resolved = resolveVariant(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
        const value = resolveFinalValueInKeyframes(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
function checkTargetForNewValues(visualElement, target, origin) {
    var _a, _b;
    const newValueKeys = Object.keys(target).filter((key) => !visualElement.hasValue(key));
    const numNewValues = newValueKeys.length;
    if (!numNewValues)
        return;
    for (let i = 0; i < numNewValues; i++) {
        const key = newValueKeys[i];
        const targetValue = target[key];
        let value = null;
        /**
         * If the target is a series of keyframes, we can use the first value
         * in the array. If this first value is null, we'll still need to read from the DOM.
         */
        if (Array.isArray(targetValue)) {
            value = targetValue[0];
        }
        /**
         * If the target isn't keyframes, or the first keyframe was null, we need to
         * first check if an origin value was explicitly defined in the transition as "from",
         * if not read the value from the DOM. As an absolute fallback, take the defined target value.
         */
        if (value === null) {
            value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
        }
        /**
         * If value is still undefined or null, ignore it. Preferably this would throw,
         * but this was causing issues in Framer.
         */
        if (value === undefined || value === null)
            continue;
        if (typeof value === "string" &&
            (isNumericalString(value) || isZeroValueString(value))) {
            // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
        }
        else if (!findValueType(value) && complex.test(targetValue)) {
            value = getAnimatableNone(key, targetValue);
        }
        visualElement.addValue(key, motionValue(value, { owner: visualElement }));
        if (origin[key] === undefined) {
            origin[key] = value;
        }
        if (value !== null)
            visualElement.setBaseTarget(key, value);
    }
}
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    const valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    const origin = {};
    for (const key in target) {
        const transitionOrigin = getOriginFromTransition(key, transition);
        if (transitionOrigin !== undefined) {
            origin[key] = transitionOrigin;
        }
        else {
            const value = visualElement.getValue(key);
            if (value) {
                origin[key] = value.get();
            }
        }
    }
    return origin;
}

/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function hasKeyframesChanged(value, target) {
    const current = value.get();
    if (Array.isArray(target)) {
        for (let i = 0; i < target.length; i++) {
            if (target[i] !== current)
                return true;
        }
    }
    else {
        return current !== target;
    }
}
function animateTarget(visualElement, definition, { delay = 0, transitionOverride, type } = {}) {
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = visualElement.makeTargetAnimatable(definition);
    const willChange = visualElement.getValue("willChange");
    if (transitionOverride)
        transition = transitionOverride;
    const animations = [];
    const animationTypeState = type &&
        visualElement.animationState &&
        visualElement.animationState.getState()[type];
    for (const key in target) {
        const value = visualElement.getValue(key);
        const valueTarget = target[key];
        if (!value ||
            valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        const valueTransition = {
            delay,
            elapsed: 0,
            ...getValueTransition(transition || {}, key),
        };
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */
        if (window.HandoffAppearAnimations) {
            const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
            if (appearId) {
                const elapsed = window.HandoffAppearAnimations(appearId, key, value, frame);
                if (elapsed !== null) {
                    valueTransition.elapsed = elapsed;
                    valueTransition.isHandoff = true;
                }
            }
        }
        let canSkip = !valueTransition.isHandoff &&
            !hasKeyframesChanged(value, valueTarget);
        if (valueTransition.type === "spring" &&
            (value.getVelocity() || valueTransition.velocity)) {
            canSkip = false;
        }
        /**
         * Temporarily disable skipping animations if there's an animation in
         * progress. Better would be to track the current target of a value
         * and compare that against valueTarget.
         */
        if (value.animation) {
            canSkip = false;
        }
        if (canSkip)
            continue;
        value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key)
            ? { type: false }
            : valueTransition));
        const animation = value.animation;
        if (isWillChangeMotionValue(willChange)) {
            willChange.add(key);
            animation.then(() => willChange.remove(key));
        }
        animations.push(animation);
    }
    if (transitionEnd) {
        Promise.all(animations).then(() => {
            transitionEnd && setTarget(visualElement, transitionEnd);
        });
    }
    return animations;
}

function animateVariant(visualElement, variant, options = {}) {
    const resolved = resolveVariant(visualElement, variant, options.custom);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getAnimation = resolved
        ? () => Promise.all(animateTarget(visualElement, resolved, options))
        : () => Promise.resolve();
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size
        ? (forwardDelay = 0) => {
            const { delayChildren = 0, staggerChildren, staggerDirection, } = transition;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : () => Promise.resolve();
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    const { when } = transition;
    if (when) {
        const [first, last] = when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation];
        return first().then(() => last());
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations = [];
    const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    const generateStaggerDuration = staggerDirection === 1
        ? (i = 0) => i * staggerChildren
        : (i = 0) => maxStaggerDuration - i * staggerChildren;
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach((child, i) => {
        child.notify("AnimationStart", variant);
        animations.push(animateVariant(child, variant, {
            ...options,
            delay: delayChildren + generateStaggerDuration(i),
        }).then(() => child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}

function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
        const animations = definition.map((variant) => animateVariant(visualElement, variant, options));
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    }
    else {
        const resolvedDefinition = typeof definition === "function"
            ? resolveVariant(visualElement, definition, options.custom)
            : definition;
        animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
    }
    return animation.then(() => visualElement.notify("AnimationComplete", definition));
}

const reversePriorityOrder = [...variantPriorityOrder].reverse();
const numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
    return (animations) => Promise.all(animations.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
    let animate = animateList(visualElement);
    const state = createState();
    let isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    const buildResolvedTypeValues = (acc, definition) => {
        const resolved = resolveVariant(visualElement, definition);
        if (resolved) {
            const { transition, transitionEnd, ...target } = resolved;
            acc = { ...acc, ...target, ...transitionEnd };
        }
        return acc;
    };
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(options, changedActiveType) {
        const props = visualElement.getProps();
        const context = visualElement.getVariantContext(true) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        const animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        const removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        let encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        let removedVariantIndex = Infinity;
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (let i = 0; i < numAnimationTypes; i++) {
            const type = reversePriorityOrder[i];
            const typeState = state[type];
            const prop = props[type] !== undefined ? props[type] : context[type];
            const propIsVariant = isVariantLabel(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            const activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = { ...encounteredKeys };
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                isAnimationControls(prop) ||
                typeof prop === "boolean") {
                continue;
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            let shouldAnimateType = variantDidChange ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            let handledRemovedValues = false;
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            const definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            const { prevResolvedValues = {} } = typeState;
            const allKeys = {
                ...prevResolvedValues,
                ...resolvedValues,
            };
            const markToAnimate = (key) => {
                shouldAnimateType = true;
                if (removedKeys.has(key)) {
                    handledRemovedValues = true;
                    removedKeys.delete(key);
                }
                typeState.needsAnimating[key] = true;
            };
            for (const key in allKeys) {
                const next = resolvedValues[key];
                const prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                let valueHasChanged = false;
                if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
                    valueHasChanged = !shallowCompare(next, prev);
                }
                else {
                    valueHasChanged = next !== prev;
                }
                if (valueHasChanged) {
                    if (next !== undefined) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = { ...encounteredKeys, ...resolvedValues };
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to hard-block animations
             */
            if (shouldAnimateType && (!isInherited || handledRemovedValues)) {
                animations.push(...definitionList.map((animation) => ({
                    animation: animation,
                    options: { type, ...options },
                })));
            }
        }
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            const fallbackAnimation = {};
            removedKeys.forEach((key) => {
                const fallbackTarget = visualElement.getBaseTarget(key);
                if (fallbackTarget !== undefined) {
                    fallbackAnimation[key] = fallbackTarget;
                }
            });
            animations.push({ animation: fallbackAnimation });
        }
        let shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            (props.initial === false || props.initial === props.animate) &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive, options) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
        state[type].isActive = isActive;
        const animations = animateChanges(options, type);
        for (const key in state) {
            state[key].protectedKeys = {};
        }
        return animations;
    }
    return {
        animateChanges,
        setActive,
        setAnimateFunction,
        getState: () => state,
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if (Array.isArray(next)) {
        return !shallowCompare(next, prev);
    }
    return false;
}
function createTypeState(isActive = false) {
    return {
        isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    return {
        animate: createTypeState(true),
        whileInView: createTypeState(),
        whileHover: createTypeState(),
        whileTap: createTypeState(),
        whileDrag: createTypeState(),
        whileFocus: createTypeState(),
        exit: createTypeState(),
    };
}

class AnimationFeature extends Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
        super(node);
        node.animationState || (node.animationState = createAnimationState(node));
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        this.unmount();
        if (isAnimationControls(animate)) {
            this.unmount = animate.subscribe(this.node);
        }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate } = this.node.getProps();
        const { animate: prevAnimate } = this.node.prevProps || {};
        if (animate !== prevAnimate) {
            this.updateAnimationControlsSubscription();
        }
    }
    unmount() { }
}

let id$1 = 0;
class ExitAnimationFeature extends Feature {
    constructor() {
        super(...arguments);
        this.id = id$1++;
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent, onExitComplete, custom } = this.node.presenceContext;
        const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || isPresent === prevIsPresent) {
            return;
        }
        const exitAnimation = this.node.animationState.setActive("exit", !isPresent, { custom: custom !== null && custom !== void 0 ? custom : this.node.getProps().custom });
        if (onExitComplete && !isPresent) {
            exitAnimation.then(() => onExitComplete(this.id));
        }
    }
    mount() {
        const { register } = this.node.presenceContext || {};
        if (register) {
            this.unmount = register(this.id);
        }
    }
    unmount() { }
}

const animations = {
    animation: {
        Feature: AnimationFeature,
    },
    exit: {
        Feature: ExitAnimationFeature,
    },
};

const distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
    // Multi-dimensional
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

/**
 * @internal
 */
class PanSession {
    constructor(event, handlers, { transformPagePoint, contextWindow, dragSnapToOrigin = false } = {}) {
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        /**
         * @internal
         */
        this.contextWindow = window;
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const info = getPanInfo(this.lastMoveEventInfo, this.history);
            const isPanStarted = this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            const isDistancePastThreshold = distance2D(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            const { point } = info;
            const { timestamp } = frameData;
            this.history.push({ ...point, timestamp });
            const { onStart, onMove } = this.handlers;
            if (!isPanStarted) {
                onStart && onStart(this.lastMoveEvent, info);
                this.startEvent = this.lastMoveEvent;
            }
            onMove && onMove(this.lastMoveEvent, info);
        };
        this.handlePointerMove = (event, info) => {
            this.lastMoveEvent = event;
            this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
            // Throttle mouse move event to once per frame
            frame.update(this.updatePoint, true);
        };
        this.handlePointerUp = (event, info) => {
            this.end();
            const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
            if (this.dragSnapToOrigin)
                resumeAnimation && resumeAnimation();
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const panInfo = getPanInfo(event.type === "pointercancel"
                ? this.lastMoveEventInfo
                : transformPoint(info, this.transformPagePoint), this.history);
            if (this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (!isPrimaryPointer(event))
            return;
        this.dragSnapToOrigin = dragSnapToOrigin;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        this.contextWindow = contextWindow || window;
        const info = extractEventInfo(event);
        const initialInfo = transformPoint(info, this.transformPagePoint);
        const { point } = initialInfo;
        const { timestamp } = frameData;
        this.history = [{ ...point, timestamp }];
        const { onSessionStart } = handlers;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(handlers) {
        this.handlers = handlers;
    }
    end() {
        this.removeListeners && this.removeListeners();
        cancelFrame(this.updatePoint);
    }
}
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
    return {
        point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            secondsToMilliseconds(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    const currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}

function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = mix(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 0.0001) || isNaN(delta.scale))
        delta.scale = 1;
    delta.translate =
        mix(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate) || isNaN(delta.translate))
        delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
}

/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, { min, max }, elastic) {
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        [min, max] = [max, min];
    }
    return { min, max };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = calcLength(source);
    const targetLength = calcLength(target);
    if (targetLength > sourceLength) {
        origin = progress(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = progress(source.min, source.max - targetLength, target.min);
    }
    return clamp(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number"
        ? dragElastic
        : dragElastic[label] || 0;
}

const createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
});
const createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta(),
});
const createAxis = () => ({ min: 0, max: 0 });
const createBox = () => ({
    x: createAxis(),
    y: createAxis(),
});

function eachAxis(callback) {
    return [callback("x"), callback("y")];
}

/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox({ top, left, right, bottom, }) {
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    const topLeft = transformPoint({ x: point.left, y: point.top });
    const bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}

function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return (!isIdentityScale(scale) ||
        !isIdentityScale(scaleX) ||
        !isIdentityScale(scaleY));
}
function hasTransform(values) {
    return (hasScale(values) ||
        has2DTranslate(values) ||
        values.z ||
        values.rotate ||
        values.rotateX ||
        values.rotateY);
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}

/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */
        const instance = node.instance;
        if (instance &&
            instance.style &&
            instance.style.display === "contents") {
            continue;
        }
        if (isSharedTransition &&
            node.options.layoutScroll &&
            node.scroll &&
            node !== node.root) {
            transformBox(box, {
                x: -node.scroll.offset.x,
                y: -node.scroll.offset.y,
            });
        }
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && hasTransform(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */
    treeScale.x = snapToDefault(treeScale.x);
    treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale) {
    if (Number.isInteger(scale))
        return scale;
    return scale > 1.0000000000001 || scale < 0.999999999999 ? scale : 1;
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
    const axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    const originPoint = mix(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const xKeys$1 = ["x", "scaleX", "originX"];
const yKeys$1 = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
    transformAxis(box.x, transform, xKeys$1);
    transformAxis(box.y, transform, yKeys$1);
}

function measureViewportBox(instance, transformPoint) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        translateAxis(viewportBox.x, scroll.offset.x);
        translateAxis(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}

// Fixes https://github.com/framer/motion/issues/2270
const getContextWindow = ({ current }) => {
    return current ? current.ownerDocument.defaultView : null;
};

const elementDragControls = new WeakMap();
/**
 *
 */
// let latestPointerEvent: PointerEvent
class VisualElementDragControls {
    constructor(visualElement) {
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = { x: 0, y: 0 };
        /**
         * The permitted boundaries of travel, in pixels.
         */
        this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */
        this.elastic = createBox();
        this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false } = {}) {
        /**
         * Don't start dragging if this component is exiting
         */
        const { presenceContext } = this.visualElement;
        if (presenceContext && presenceContext.isPresent === false)
            return;
        const onSessionStart = (event) => {
            const { dragSnapToOrigin } = this.getProps();
            // Stop or pause any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            dragSnapToOrigin ? this.pauseAnimation() : this.stopAnimation();
            if (snapToCursor) {
                this.snapToCursor(extractEventInfo(event, "page").point);
            }
        };
        const onStart = (event, info) => {
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            const { drag, dragPropagation, onDragStart } = this.getProps();
            if (drag && !dragPropagation) {
                if (this.openGlobalLock)
                    this.openGlobalLock();
                this.openGlobalLock = getGlobalLock(drag);
                // If we don 't have the lock, don't start dragging
                if (!this.openGlobalLock)
                    return;
            }
            this.isDragging = true;
            this.currentDirection = null;
            this.resolveConstraints();
            if (this.visualElement.projection) {
                this.visualElement.projection.isAnimationBlocked = true;
                this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin
             */
            eachAxis((axis) => {
                let current = this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */
                if (percent.test(current)) {
                    const { projection } = this.visualElement;
                    if (projection && projection.layout) {
                        const measuredAxis = projection.layout.layoutBox[axis];
                        if (measuredAxis) {
                            const length = calcLength(measuredAxis);
                            current = length * (parseFloat(current) / 100);
                        }
                    }
                }
                this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            if (onDragStart) {
                frame.update(() => onDragStart(event, info), false, true);
            }
            const { animationState } = this.visualElement;
            animationState && animationState.setActive("whileDrag", true);
        };
        const onMove = (event, info) => {
            // latestPointerEvent = event
            const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag, } = this.getProps();
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !this.openGlobalLock)
                return;
            const { offset } = info;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && this.currentDirection === null) {
                this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (this.currentDirection !== null) {
                    onDirectionLock && onDirectionLock(this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            this.updateAxis("x", info.point, offset);
            this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */
            this.visualElement.render();
            /**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */
            onDrag && onDrag(event, info);
        };
        const onSessionEnd = (event, info) => this.stop(event, info);
        const resumeAnimation = () => eachAxis((axis) => {
            var _a;
            return this.getAnimationState(axis) === "paused" &&
                ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
        });
        const { dragSnapToOrigin } = this.getProps();
        this.panSession = new PanSession(originEvent, {
            onSessionStart,
            onStart,
            onMove,
            onSessionEnd,
            resumeAnimation,
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin,
            contextWindow: getContextWindow(this.visualElement),
        });
    }
    stop(event, info) {
        const isDragging = this.isDragging;
        this.cancel();
        if (!isDragging)
            return;
        const { velocity } = info;
        this.startAnimation(velocity);
        const { onDragEnd } = this.getProps();
        if (onDragEnd) {
            frame.update(() => onDragEnd(event, info));
        }
    }
    cancel() {
        this.isDragging = false;
        const { projection, animationState } = this.visualElement;
        if (projection) {
            projection.isAnimationBlocked = false;
        }
        this.panSession && this.panSession.end();
        this.panSession = undefined;
        const { dragPropagation } = this.getProps();
        if (!dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
        animationState && animationState.setActive("whileDrag", false);
    }
    updateAxis(axis, _point, offset) {
        const { drag } = this.getProps();
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection))
            return;
        const axisValue = this.getAxisMotionValue(axis);
        let next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) {
            next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
        }
        axisValue.set(next);
    }
    resolveConstraints() {
        var _a;
        const { dragConstraints, dragElastic } = this.getProps();
        const layout = this.visualElement.projection &&
            !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(false)
            : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
        const prevConstraints = this.constraints;
        if (dragConstraints && isRefObject(dragConstraints)) {
            if (!this.constraints) {
                this.constraints = this.resolveRefConstraints();
            }
        }
        else {
            if (dragConstraints && layout) {
                this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
            }
            else {
                this.constraints = false;
            }
        }
        this.elastic = resolveDragElastic(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (prevConstraints !== this.constraints &&
            layout &&
            this.constraints &&
            !this.hasMutatedConstraints) {
            eachAxis((axis) => {
                if (this.getAxisMotionValue(axis)) {
                    this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
                }
            });
        }
    }
    resolveRefConstraints() {
        const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
        if (!constraints || !isRefObject(constraints))
            return false;
        const constraintsElement = constraints.current;
        invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        const { projection } = this.visualElement;
        // TODO
        if (!projection || !projection.layout)
            return false;
        const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = convertBoundingBoxToBox(userConstraints);
            }
        }
        return measuredConstraints;
    }
    startAnimation(velocity) {
        const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd, } = this.getProps();
        const constraints = this.constraints || {};
        const momentumAnimations = eachAxis((axis) => {
            if (!shouldDrag(axis, drag, this.currentDirection)) {
                return;
            }
            let transition = (constraints && constraints[axis]) || {};
            if (dragSnapToOrigin)
                transition = { min: 0, max: 0 };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            const bounceStiffness = dragElastic ? 200 : 1000000;
            const bounceDamping = dragElastic ? 40 : 10000000;
            const inertia = {
                type: "inertia",
                velocity: dragMomentum ? velocity[axis] : 0,
                bounceStiffness,
                bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...dragTransition,
                ...transition,
            };
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
        const axisValue = this.getAxisMotionValue(axis);
        return axisValue.start(animateMotionValue(axis, axisValue, 0, transition));
    }
    stopAnimation() {
        eachAxis((axis) => this.getAxisMotionValue(axis).stop());
    }
    pauseAnimation() {
        eachAxis((axis) => { var _a; return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause(); });
    }
    getAnimationState(axis) {
        var _a;
        return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis) {
        const dragKey = "_drag" + axis.toUpperCase();
        const props = this.visualElement.getProps();
        const externalMotionValue = props[dragKey];
        return externalMotionValue
            ? externalMotionValue
            : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : undefined) || 0);
    }
    snapToCursor(point) {
        eachAxis((axis) => {
            const { drag } = this.getProps();
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, this.currentDirection))
                return;
            const { projection } = this.visualElement;
            const axisValue = this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                const { min, max } = projection.layout.layoutBox[axis];
                axisValue.set(point[axis] - mix(min, max, 0.5));
            }
        });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag, dragConstraints } = this.getProps();
        const { projection } = this.visualElement;
        if (!isRefObject(dragConstraints) || !projection || !this.constraints)
            return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */
        this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */
        const boxProgress = { x: 0, y: 0 };
        eachAxis((axis) => {
            const axisValue = this.getAxisMotionValue(axis);
            if (axisValue) {
                const latest = axisValue.get();
                boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */
        const { transformTemplate } = this.visualElement.getProps();
        this.visualElement.current.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */
        eachAxis((axis) => {
            if (!shouldDrag(axis, drag, null))
                return;
            /**
             * Calculate a new transform based on the previous box progress
             */
            const axisValue = this.getAxisMotionValue(axis);
            const { min, max } = this.constraints[axis];
            axisValue.set(mix(min, max, boxProgress[axis]));
        });
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        elementDragControls.set(this.visualElement, this);
        const element = this.visualElement.current;
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
            const { drag, dragListener = true } = this.getProps();
            drag && dragListener && this.start(event);
        });
        const measureDragConstraints = () => {
            const { dragConstraints } = this.getProps();
            if (isRefObject(dragConstraints)) {
                this.constraints = this.resolveRefConstraints();
            }
        };
        const { projection } = this.visualElement;
        const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            projection.root && projection.root.updateScroll();
            projection.updateLayout();
        }
        measureDragConstraints();
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */
        const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
            if (this.isDragging && hasLayoutChanged) {
                eachAxis((axis) => {
                    const motionValue = this.getAxisMotionValue(axis);
                    if (!motionValue)
                        return;
                    this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                this.visualElement.render();
            }
        }));
        return () => {
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
            stopLayoutUpdateListener && stopLayoutUpdateListener();
        };
    }
    getProps() {
        const props = this.visualElement.getProps();
        const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true, } = props;
        return {
            ...props,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum,
        };
    }
}
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}

class DragGesture extends Feature {
    constructor(node) {
        super(node);
        this.removeGroupControls = noop;
        this.removeListeners = noop;
        this.controls = new VisualElementDragControls(node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) {
            this.removeGroupControls = dragControls.subscribe(this.controls);
        }
        this.removeListeners = this.controls.addListeners() || noop;
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
    }
}

const asyncHandler = (handler) => (event, info) => {
    if (handler) {
        frame.update(() => handler(event, info));
    }
};
class PanGesture extends Feature {
    constructor() {
        super(...arguments);
        this.removePointerDownListener = noop;
    }
    onPointerDown(pointerDownEvent) {
        this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: getContextWindow(this.node),
        });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: onPan,
            onEnd: (event, info) => {
                delete this.session;
                if (onPanEnd) {
                    frame.update(() => onPanEnd(event, info));
                }
            },
        };
    }
    mount() {
        this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}

/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    const context = useContext(PresenceContext);
    if (context === null)
        return [true, null];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    const id = useId();
    useEffect(() => register(id), []);
    const safeToRemove = () => onExitComplete && onExitComplete(id);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false,
};

function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
        return 0;
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
const correctBorderRadius = {
    correct: (latest, node) => {
        if (!node.target)
            return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */
        if (typeof latest === "string") {
            if (px.test(latest)) {
                latest = parseFloat(latest);
            }
            else {
                return latest;
            }
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */
        const x = pixelsToPercent(latest, node.target.x);
        const y = pixelsToPercent(latest, node.target.y);
        return `${x}% ${y}%`;
    },
};

const correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta }) => {
        const original = latest;
        const shadow = complex.parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5)
            return original;
        const template = complex.createTransformer(latest);
        const offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        const xScale = projectionDelta.x.scale * treeScale.x;
        const yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */
        const averageScale = mix(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number")
            shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number")
            shadow[3 + offset] /= averageScale;
        return template(shadow);
    },
};

class MeasureLayoutWithContext extends React__default.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        addScaleCorrector(defaultScaleCorrectors);
        if (projection) {
            if (layoutGroup.group)
                layoutGroup.group.add(projection);
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
                switchLayoutGroup.register(projection);
            }
            projection.root.didUpdate();
            projection.addEventListener("animationComplete", () => {
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                onExitComplete: () => this.safeToRemove(),
            });
        }
        globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layoutDependency, visualElement, drag, isPresent } = this.props;
        const projection = visualElement.projection;
        if (!projection)
            return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */
        projection.isPresent = isPresent;
        if (drag ||
            prevProps.layoutDependency !== layoutDependency ||
            layoutDependency === undefined) {
            projection.willUpdate();
        }
        else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            }
            else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */
                frame.postRender(() => {
                    const stack = projection.getStack();
                    if (!stack || !stack.members.length) {
                        this.safeToRemove();
                    }
                });
            }
        }
        return null;
    }
    componentDidUpdate() {
        const { projection } = this.props.visualElement;
        if (projection) {
            projection.root.didUpdate();
            queueMicrotask(() => {
                if (!projection.currentAnimation && projection.isLead()) {
                    this.safeToRemove();
                }
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext, } = this.props;
        const { projection } = visualElement;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group)
                layoutGroup.group.remove(projection);
            if (promoteContext && promoteContext.deregister)
                promoteContext.deregister(projection);
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        safeToRemove && safeToRemove();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = usePresence();
    const layoutGroup = useContext(LayoutGroupContext);
    return (React__default.createElement(MeasureLayoutWithContext, { ...props, layoutGroup: layoutGroup, switchLayoutGroup: useContext(SwitchLayoutGroupContext), isPresent: isPresent, safeToRemove: safeToRemove }));
}
const defaultScaleCorrectors = {
    borderRadius: {
        ...correctBorderRadius,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ],
    },
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow,
};

const borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
const numBorders = borders.length;
const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
const isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        target.opacity = mix(0, 
        // TODO Reinstate this if only child
        lead.opacity !== undefined ? lead.opacity : 1, easeCrossfadeIn(progress));
        target.opacityExit = mix(follow.opacity !== undefined ? follow.opacity : 1, 0, easeCrossfadeOut(progress));
    }
    else if (isOnlyMember) {
        target.opacity = mix(follow.opacity !== undefined ? follow.opacity : 1, lead.opacity !== undefined ? lead.opacity : 1, progress);
    }
    /**
     * Mix border radius
     */
    for (let i = 0; i < numBorders; i++) {
        const borderLabel = `border${borders[i]}Radius`;
        let followRadius = getRadius(follow, borderLabel);
        let leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined)
            continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        const canMix = followRadius === 0 ||
            leadRadius === 0 ||
            isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if (percent.test(leadRadius) || percent.test(followRadius)) {
                target[borderLabel] += "%";
            }
        }
        else {
            target[borderLabel] = leadRadius;
        }
    }
    /**
     * Mix rotation
     */
    if (follow.rotate || lead.rotate) {
        target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress);
    }
}
function getRadius(values, radiusName) {
    return values[radiusName] !== undefined
        ? values[radiusName]
        : values.borderRadius;
}
// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
const easeCrossfadeIn = compress(0, 0.5, circOut);
const easeCrossfadeOut = compress(0.5, 0.95, noop);
function compress(min, max, easing) {
    return (p) => {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing(progress(min, max, p));
    };
}

/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}

/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (percent.test(translate)) {
        translate = parseFloat(translate);
        const relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
        return;
    let originPoint = mix(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
        originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}

function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
    return (a.x.min === b.x.min &&
        a.x.max === b.x.max &&
        a.y.min === b.y.min &&
        a.y.max === b.y.max);
}
function boxEqualsRounded(a, b) {
    return (Math.round(a.x.min) === Math.round(b.x.min) &&
        Math.round(a.x.max) === Math.round(b.x.max) &&
        Math.round(a.y.min) === Math.round(b.y.min) &&
        Math.round(a.y.max) === Math.round(b.y.max));
}
function aspectRatio(box) {
    return calcLength(box.x) / calcLength(box.y);
}

class NodeStack {
    constructor() {
        this.members = [];
    }
    add(node) {
        addUniqueItem(this.members, node);
        node.scheduleRender();
    }
    remove(node) {
        removeItem(this.members, node);
        if (node === this.prevLead) {
            this.prevLead = undefined;
        }
        if (node === this.lead) {
            const prevLead = this.members[this.members.length - 1];
            if (prevLead) {
                this.promote(prevLead);
            }
        }
    }
    relegate(node) {
        const indexOfNode = this.members.findIndex((member) => node === member);
        if (indexOfNode === 0)
            return false;
        /**
         * Find the next projection node that is present
         */
        let prevLead;
        for (let i = indexOfNode; i >= 0; i--) {
            const member = this.members[i];
            if (member.isPresent !== false) {
                prevLead = member;
                break;
            }
        }
        if (prevLead) {
            this.promote(prevLead);
            return true;
        }
        else {
            return false;
        }
    }
    promote(node, preserveFollowOpacity) {
        const prevLead = this.lead;
        if (node === prevLead)
            return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.instance && prevLead.scheduleRender();
            node.scheduleRender();
            node.resumeFrom = prevLead;
            if (preserveFollowOpacity) {
                node.resumeFrom.preserveOpacity = true;
            }
            if (prevLead.snapshot) {
                node.snapshot = prevLead.snapshot;
                node.snapshot.latestValues =
                    prevLead.animationValues || prevLead.latestValues;
            }
            if (node.root && node.root.isUpdating) {
                node.isLayoutDirty = true;
            }
            const { crossfade } = node.options;
            if (crossfade === false) {
                prevLead.hide();
            }
            /**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */
        }
    }
    exitAnimationComplete() {
        this.members.forEach((node) => {
            const { options, resumingFrom } = node;
            options.onExitComplete && options.onExitComplete();
            if (resumingFrom) {
                resumingFrom.options.onExitComplete &&
                    resumingFrom.options.onExitComplete();
            }
        });
    }
    scheduleRender() {
        this.members.forEach((node) => {
            node.instance && node.scheduleRender(false);
        });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot() {
        if (this.lead && this.lead.snapshot) {
            this.lead.snapshot = undefined;
        }
    }
}

function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    if (xTranslate || yTranslate) {
        transform = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
    }
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */
    if (treeScale.x !== 1 || treeScale.y !== 1) {
        transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
        const { rotate, rotateX, rotateY } = latestTransform;
        if (rotate)
            transform += `rotate(${rotate}deg) `;
        if (rotateX)
            transform += `rotateX(${rotateX}deg) `;
        if (rotateY)
            transform += `rotateY(${rotateY}deg) `;
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
        transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform || "none";
}

const compareByDepth = (a, b) => a.depth - b.depth;

class FlatTree {
    constructor() {
        this.children = [];
        this.isDirty = false;
    }
    add(child) {
        addUniqueItem(this.children, child);
        this.isDirty = true;
    }
    remove(child) {
        removeItem(this.children, child);
        this.isDirty = true;
    }
    forEach(callback) {
        this.isDirty && this.children.sort(compareByDepth);
        this.isDirty = false;
        this.children.forEach(callback);
    }
}

/**
 * Timeout defined in ms
 */
function delay(callback, timeout) {
    const start = performance.now();
    const checkElapsed = ({ timestamp }) => {
        const elapsed = timestamp - start;
        if (elapsed >= timeout) {
            cancelFrame(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    frame.read(checkElapsed, true);
    return () => cancelFrame(checkElapsed);
}

function record(data) {
    if (window.MotionDebug) {
        window.MotionDebug.record(data);
    }
}

function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
}

function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
    motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}

const transformAxes = ["", "X", "Y", "Z"];
const hiddenVisibility = { visibility: "hidden" };
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
const animationTarget = 1000;
let id = 0;
/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */
const projectionFrameData = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
};
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform, }) {
    return class ProjectionNode {
        constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
            /**
             * A unique ID generated for every projection node.
             */
            this.id = id++;
            /**
             * An id that represents a unique session instigated by startUpdate.
             */
            this.animationId = 0;
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */
            this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */
            this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */
            this.isLayoutDirty = false;
            /**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */
            this.isProjectionDirty = false;
            /**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */
            this.isSharedProjectionDirty = false;
            /**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */
            this.isTransformDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */
            this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */
            this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */
            this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */
            this.shouldResetTransform = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */
            this.treeScale = { x: 1, y: 1 };
            /**
             *
             */
            this.eventHandlers = new Map();
            this.hasTreeAnimated = false;
            // Note: Currently only running on root node
            this.updateScheduled = false;
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = () => {
                if (this.isUpdating) {
                    this.isUpdating = false;
                    this.clearAllSnapshots();
                }
            };
            /**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */
            this.updateProjection = () => {
                this.projectionUpdateScheduled = false;
                /**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */
                projectionFrameData.totalNodes =
                    projectionFrameData.resolvedTargetDeltas =
                        projectionFrameData.recalculatedProjection =
                            0;
                this.nodes.forEach(propagateDirtyNodes);
                this.nodes.forEach(resolveTargetDelta);
                this.nodes.forEach(calcProjection);
                this.nodes.forEach(cleanDirtyNodes);
                record(projectionFrameData);
            };
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */
            // TODO Only running on root node
            this.sharedNodes = new Map();
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? [...parent.path, parent] : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            for (let i = 0; i < this.path.length; i++) {
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this)
                this.nodes = new FlatTree();
        }
        addEventListener(name, handler) {
            if (!this.eventHandlers.has(name)) {
                this.eventHandlers.set(name, new SubscriptionManager());
            }
            return this.eventHandlers.get(name).add(handler);
        }
        notifyListeners(name, ...args) {
            const subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager && subscriptionManager.notify(...args);
        }
        hasListeners(name) {
            return this.eventHandlers.has(name);
        }
        /**
         * Lifecycles
         */
        mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = isSVGElement(instance);
            this.instance = instance;
            const { layoutId, layout, visualElement } = this.options;
            if (visualElement && !visualElement.current) {
                visualElement.mount(instance);
            }
            this.root.nodes.add(this);
            this.parent && this.parent.children.add(this);
            if (isLayoutDirty && (layout || layoutId)) {
                this.isLayoutDirty = true;
            }
            if (attachResizeListener) {
                let cancelDelay;
                const resizeUnblockUpdate = () => (this.root.updateBlockedByResize = false);
                attachResizeListener(instance, () => {
                    this.root.updateBlockedByResize = true;
                    cancelDelay && cancelDelay();
                    cancelDelay = delay(resizeUnblockUpdate, 250);
                    if (globalProjectionState.hasAnimatedSinceResize) {
                        globalProjectionState.hasAnimatedSinceResize = false;
                        this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) {
                this.root.registerSharedNode(layoutId, this);
            }
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false &&
                visualElement &&
                (layoutId || layout)) {
                this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout, }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = undefined;
                        this.relativeTarget = undefined;
                        return;
                    }
                    // TODO: Check here if an animation exists
                    const layoutTransition = this.options.transition ||
                        visualElement.getDefaultTransition() ||
                        defaultLayoutTransition;
                    const { onLayoutAnimationStart, onLayoutAnimationComplete, } = visualElement.getProps();
                    /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */
                    const targetChanged = !this.targetLayout ||
                        !boxEqualsRounded(this.targetLayout, newLayout) ||
                        hasRelativeTargetChanged;
                    /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */
                    const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
                    if (this.options.layoutRoot ||
                        (this.resumeFrom && this.resumeFrom.instance) ||
                        hasOnlyRelativeTargetChanged ||
                        (hasLayoutChanged &&
                            (targetChanged || !this.currentAnimation))) {
                        if (this.resumeFrom) {
                            this.resumingFrom = this.resumeFrom;
                            this.resumingFrom.resumingFrom = undefined;
                        }
                        this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                        const animationOptions = {
                            ...getValueTransition(layoutTransition, "layout"),
                            onPlay: onLayoutAnimationStart,
                            onComplete: onLayoutAnimationComplete,
                        };
                        if (visualElement.shouldReduceMotion ||
                            this.options.layoutRoot) {
                            animationOptions.delay = 0;
                            animationOptions.type = false;
                        }
                        this.startAnimation(animationOptions);
                    }
                    else {
                        /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never commited to screen and look like a jumpy box.
                         */
                        if (!hasLayoutChanged) {
                            finishAnimation(this);
                        }
                        if (this.isLead() && this.options.onExitComplete) {
                            this.options.onExitComplete();
                        }
                    }
                    this.targetLayout = newLayout;
                });
            }
        }
        unmount() {
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            const stack = this.getStack();
            stack && stack.remove(this);
            this.parent && this.parent.children.delete(this);
            this.instance = undefined;
            cancelFrame(this.updateProjection);
        }
        // only on the root
        blockUpdate() {
            this.updateManuallyBlocked = true;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = false;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                false);
        }
        // Note: currently only running on root node
        startUpdate() {
            if (this.isUpdateBlocked())
                return;
            this.isUpdating = true;
            this.nodes && this.nodes.forEach(resetRotation);
            this.animationId++;
        }
        getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
        }
        willUpdate(shouldNotifyListeners = true) {
            this.root.hasTreeAnimated = true;
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty)
                return;
            this.isLayoutDirty = true;
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                node.shouldResetTransform = true;
                node.updateScroll("snapshot");
                if (node.options.layoutRoot) {
                    node.willUpdate(false);
                }
            }
            const { layoutId, layout } = this.options;
            if (layoutId === undefined && !layout)
                return;
            const transformTemplate = this.getTransformTemplate();
            this.prevTransformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        }
        update() {
            this.updateScheduled = false;
            const updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                this.unblockUpdate();
                this.clearAllSnapshots();
                this.nodes.forEach(clearMeasurements);
                return;
            }
            if (!this.isUpdating) {
                this.nodes.forEach(clearIsLayoutDirty);
            }
            this.isUpdating = false;
            /**
             * Write
             */
            this.nodes.forEach(resetTransformStyle);
            /**
             * Read ==================
             */
            // Update layout measurements of updated children
            this.nodes.forEach(updateLayout);
            /**
             * Write
             */
            // Notify listeners that the layout is updated
            this.nodes.forEach(notifyLayoutUpdate);
            this.clearAllSnapshots();
            /**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */
            const now = performance.now();
            frameData.delta = clamp(0, 1000 / 60, now - frameData.timestamp);
            frameData.timestamp = now;
            frameData.isProcessing = true;
            steps.update.process(frameData);
            steps.preRender.process(frameData);
            steps.render.process(frameData);
            frameData.isProcessing = false;
        }
        didUpdate() {
            if (!this.updateScheduled) {
                this.updateScheduled = true;
                queueMicrotask(() => this.update());
            }
        }
        clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        }
        scheduleUpdateProjection() {
            if (!this.projectionUpdateScheduled) {
                this.projectionUpdateScheduled = true;
                frame.preRender(this.updateProjection, false, true);
            }
        }
        scheduleCheckAfterUnmount() {
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */
            frame.postRender(() => {
                if (this.isLayoutDirty) {
                    this.root.didUpdate();
                }
                else {
                    this.root.checkUpdateFailed();
                }
            });
        }
        /**
         * Update measurements
         */
        updateSnapshot() {
            if (this.snapshot || !this.instance)
                return;
            this.snapshot = this.measure();
        }
        updateLayout() {
            if (!this.instance)
                return;
            // TODO: Incorporate into a forwarded scroll offset
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty) {
                return;
            }
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */
            if (this.resumeFrom && !this.resumeFrom.instance) {
                for (let i = 0; i < this.path.length; i++) {
                    const node = this.path[i];
                    node.updateScroll();
                }
            }
            const prevLayout = this.layout;
            this.layout = this.measure(false);
            this.layoutCorrected = createBox();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement } = this.options;
            visualElement &&
                visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
        }
        updateScroll(phase = "measure") {
            let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === phase) {
                needsMeasurement = false;
            }
            if (needsMeasurement) {
                this.scroll = {
                    animationId: this.root.animationId,
                    phase,
                    isRoot: checkIsScrollRoot(this.instance),
                    offset: measureScroll(this.instance),
                };
            }
        }
        resetTransform() {
            if (!resetTransform)
                return;
            const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
            const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
            const transformTemplate = this.getTransformTemplate();
            const transformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested &&
                (hasProjection ||
                    hasTransform(this.latestValues) ||
                    transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        }
        measure(removeTransform = true) {
            const pageBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(pageBox);
            /**
             * Measurements taken during the pre-render stage
             * still have transforms applied so we remove them
             * via calculation.
             */
            if (removeTransform) {
                layoutBox = this.removeTransform(layoutBox);
            }
            roundBox(layoutBox);
            return {
                animationId: this.root.animationId,
                measuredBox: pageBox,
                layoutBox,
                latestValues: {},
                source: this.id,
            };
        }
        measurePageBox() {
            const { visualElement } = this.options;
            if (!visualElement)
                return createBox();
            const box = visualElement.measureViewportBox();
            // Remove viewport scroll to give page-relative coordinates
            const { scroll } = this.root;
            if (scroll) {
                translateAxis(box.x, scroll.offset.x);
                translateAxis(box.y, scroll.offset.y);
            }
            return box;
        }
        removeElementScroll(box) {
            const boxWithoutScroll = createBox();
            copyBoxInto(boxWithoutScroll, box);
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                const { scroll, options } = node;
                if (node !== this.root && scroll && options.layoutScroll) {
                    /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */
                    if (scroll.isRoot) {
                        copyBoxInto(boxWithoutScroll, box);
                        const { scroll: rootScroll } = this.root;
                        /**
                         * Undo the application of page scroll that was originally added
                         * to the measured bounding box.
                         */
                        if (rootScroll) {
                            translateAxis(boxWithoutScroll.x, -rootScroll.offset.x);
                            translateAxis(boxWithoutScroll.y, -rootScroll.offset.y);
                        }
                    }
                    translateAxis(boxWithoutScroll.x, scroll.offset.x);
                    translateAxis(boxWithoutScroll.y, scroll.offset.y);
                }
            }
            return boxWithoutScroll;
        }
        applyTransform(box, transformOnly = false) {
            const withTransforms = createBox();
            copyBoxInto(withTransforms, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!transformOnly &&
                    node.options.layoutScroll &&
                    node.scroll &&
                    node !== node.root) {
                    transformBox(withTransforms, {
                        x: -node.scroll.offset.x,
                        y: -node.scroll.offset.y,
                    });
                }
                if (!hasTransform(node.latestValues))
                    continue;
                transformBox(withTransforms, node.latestValues);
            }
            if (hasTransform(this.latestValues)) {
                transformBox(withTransforms, this.latestValues);
            }
            return withTransforms;
        }
        removeTransform(box) {
            const boxWithoutTransform = createBox();
            copyBoxInto(boxWithoutTransform, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!node.instance)
                    continue;
                if (!hasTransform(node.latestValues))
                    continue;
                hasScale(node.latestValues) && node.updateSnapshot();
                const sourceBox = createBox();
                const nodeBox = node.measurePageBox();
                copyBoxInto(sourceBox, nodeBox);
                removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
            }
            if (hasTransform(this.latestValues)) {
                removeBoxTransforms(boxWithoutTransform, this.latestValues);
            }
            return boxWithoutTransform;
        }
        setTargetDelta(delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
        }
        setOptions(options) {
            this.options = {
                ...this.options,
                ...options,
                crossfade: options.crossfade !== undefined ? options.crossfade : true,
            };
        }
        clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        }
        forceRelativeParentToResolveTarget() {
            if (!this.relativeParent)
                return;
            /**
             * If the parent target isn't up-to-date, force it to update.
             * This is an unfortunate de-optimisation as it means any updating relative
             * projection will cause all the relative parents to recalculate back
             * up the tree.
             */
            if (this.relativeParent.resolvedRelativeTargetAt !==
                frameData.timestamp) {
                this.relativeParent.resolveTargetDelta(true);
            }
        }
        resolveTargetDelta(forceRecalculation = false) {
            var _a;
            /**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */
            const lead = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
            this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            /**
             * We don't use transform for this step of processing so we don't
             * need to check whether any nodes have changed transform.
             */
            const canSkip = !(forceRecalculation ||
                (isShared && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget);
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If we have no layout, we can't perform projection, so early return
             */
            if (!this.layout || !(layout || layoutId))
                return;
            this.resolvedRelativeTargetAt = frameData.timestamp;
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */
            // TODO If this is unsuccessful this currently happens every frame
            if (!this.targetDelta && !this.relativeTarget) {
                // TODO: This is a semi-repetition of further down this function, make DRY
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent &&
                    relativeParent.layout &&
                    this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = createBox();
                    this.relativeTargetOrigin = createBox();
                    calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */
            if (!this.relativeTarget && !this.targetDelta)
                return;
            /**
             * Lazy-init target data structure
             */
            if (!this.target) {
                this.target = createBox();
                this.targetWithTransforms = createBox();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */
            if (this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target) {
                this.forceRelativeParentToResolveTarget();
                calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
                /**
                 * If we've only got a targetDelta, resolve it into a target
                 */
            }
            else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) {
                    // TODO: This is creating a new object every frame
                    this.target = this.applyTransform(this.layout.layoutBox);
                }
                else {
                    copyBoxInto(this.target, this.layout.layoutBox);
                }
                applyBoxDelta(this.target, this.targetDelta);
            }
            else {
                /**
                 * If no target, use own layout as target
                 */
                copyBoxInto(this.target, this.layout.layoutBox);
            }
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */
            if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent &&
                    Boolean(relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                    !relativeParent.options.layoutScroll &&
                    relativeParent.target &&
                    this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = createBox();
                    this.relativeTargetOrigin = createBox();
                    calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * Increase debug counter for resolved target deltas
             */
            projectionFrameData.resolvedTargetDeltas++;
        }
        getClosestProjectingParent() {
            if (!this.parent ||
                hasScale(this.parent.latestValues) ||
                has2DTranslate(this.parent.latestValues)) {
                return undefined;
            }
            if (this.parent.isProjecting()) {
                return this.parent;
            }
            else {
                return this.parent.getClosestProjectingParent();
            }
        }
        isProjecting() {
            return Boolean((this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
                this.layout);
        }
        calcProjection() {
            var _a;
            const lead = this.getLead();
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            let canSkip = true;
            /**
             * If this is a normal layout animation and neither this node nor its nearest projecting
             * is dirty then we can't skip.
             */
            if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
                canSkip = false;
            }
            /**
             * If this is a shared layout animation and this node's shared projection is dirty then
             * we can't skip.
             */
            if (isShared &&
                (this.isSharedProjectionDirty || this.isTransformDirty)) {
                canSkip = false;
            }
            /**
             * If we have resolved the target this frame we must recalculate the
             * projection to ensure it visually represents the internal calculations.
             */
            if (this.resolvedRelativeTargetAt === frameData.timestamp) {
                canSkip = false;
            }
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */
            this.isTreeAnimating = Boolean((this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation);
            if (!this.isTreeAnimating) {
                this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || !(layout || layoutId))
                return;
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */
            copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
            /**
             * Record previous tree scales before updating.
             */
            const prevTreeScaleX = this.treeScale.x;
            const prevTreeScaleY = this.treeScale.y;
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */
            applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
            /**
             * If this layer needs to perform scale correction but doesn't have a target,
             * use the layout as the target.
             */
            if (lead.layout &&
                !lead.target &&
                (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                lead.target = lead.layout.layoutBox;
            }
            const { target } = lead;
            if (!target) {
                /**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */
                if (this.projectionTransform) {
                    this.projectionDelta = createDelta();
                    this.projectionTransform = "none";
                    this.scheduleRender();
                }
                return;
            }
            if (!this.projectionDelta) {
                this.projectionDelta = createDelta();
                this.projectionDeltaWithTransform = createDelta();
            }
            const prevProjectionTransform = this.projectionTransform;
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */
            calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
            if (this.projectionTransform !== prevProjectionTransform ||
                this.treeScale.x !== prevTreeScaleX ||
                this.treeScale.y !== prevTreeScaleY) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
            /**
             * Increase debug counter for recalculated projections
             */
            projectionFrameData.recalculatedProjection++;
        }
        hide() {
            this.isVisible = false;
            // TODO: Schedule render
        }
        show() {
            this.isVisible = true;
            // TODO: Schedule render
        }
        scheduleRender(notifyAll = true) {
            this.options.scheduleRender && this.options.scheduleRender();
            if (notifyAll) {
                const stack = this.getStack();
                stack && stack.scheduleRender();
            }
            if (this.resumingFrom && !this.resumingFrom.instance) {
                this.resumingFrom = undefined;
            }
        }
        setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
            const snapshot = this.snapshot;
            const snapshotLatestValues = snapshot
                ? snapshot.latestValues
                : {};
            const mixedValues = { ...this.latestValues };
            const targetDelta = createDelta();
            if (!this.relativeParent ||
                !this.relativeParent.options.layoutRoot) {
                this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            const relativeLayout = createBox();
            const snapshotSource = snapshot ? snapshot.source : undefined;
            const layoutSource = this.layout ? this.layout.source : undefined;
            const isSharedLayoutAnimation = snapshotSource !== layoutSource;
            const stack = this.getStack();
            const isOnlyMember = !stack || stack.members.length <= 1;
            const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation &&
                !isOnlyMember &&
                this.options.crossfade === true &&
                !this.path.some(hasOpacityCrossfade));
            this.animationProgress = 0;
            let prevRelativeTarget;
            this.mixTargetDelta = (latest) => {
                const progress = latest / 1000;
                mixAxisDelta(targetDelta.x, delta.x, progress);
                mixAxisDelta(targetDelta.y, delta.y, progress);
                this.setTargetDelta(targetDelta);
                if (this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout) {
                    calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
                    mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
                    /**
                     * If this is an unchanged relative target we can consider the
                     * projection not dirty.
                     */
                    if (prevRelativeTarget &&
                        boxEquals(this.relativeTarget, prevRelativeTarget)) {
                        this.isProjectionDirty = false;
                    }
                    if (!prevRelativeTarget)
                        prevRelativeTarget = createBox();
                    copyBoxInto(prevRelativeTarget, this.relativeTarget);
                }
                if (isSharedLayoutAnimation) {
                    this.animationValues = mixedValues;
                    mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                this.root.scheduleUpdateProjection();
                this.scheduleRender();
                this.animationProgress = progress;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
        }
        startAnimation(options) {
            this.notifyListeners("animationStart");
            this.currentAnimation && this.currentAnimation.stop();
            if (this.resumingFrom && this.resumingFrom.currentAnimation) {
                this.resumingFrom.currentAnimation.stop();
            }
            if (this.pendingAnimation) {
                cancelFrame(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */
            this.pendingAnimation = frame.update(() => {
                globalProjectionState.hasAnimatedSinceResize = true;
                this.currentAnimation = animateSingleValue(0, animationTarget, {
                    ...options,
                    onUpdate: (latest) => {
                        this.mixTargetDelta(latest);
                        options.onUpdate && options.onUpdate(latest);
                    },
                    onComplete: () => {
                        options.onComplete && options.onComplete();
                        this.completeAnimation();
                    },
                });
                if (this.resumingFrom) {
                    this.resumingFrom.currentAnimation = this.currentAnimation;
                }
                this.pendingAnimation = undefined;
            });
        }
        completeAnimation() {
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            const stack = this.getStack();
            stack && stack.exitAnimationComplete();
            this.resumingFrom =
                this.currentAnimation =
                    this.animationValues =
                        undefined;
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            if (this.currentAnimation) {
                this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        }
        applyTransformsToTarget() {
            const lead = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = lead;
            if (!targetWithTransforms || !target || !layout)
                return;
            /**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */
            if (this !== lead &&
                this.layout &&
                layout &&
                shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                target = this.target || createBox();
                const xLength = calcLength(this.layout.layoutBox.x);
                target.x.min = lead.target.x.min;
                target.x.max = target.x.min + xLength;
                const yLength = calcLength(this.layout.layoutBox.y);
                target.y.min = lead.target.y.min;
                target.y.max = target.y.min + yLength;
            }
            copyBoxInto(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */
            transformBox(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its layout layout
             * into the desired bounding box.
             */
            calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        }
        registerSharedNode(layoutId, node) {
            if (!this.sharedNodes.has(layoutId)) {
                this.sharedNodes.set(layoutId, new NodeStack());
            }
            const stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            const config = node.options.initialPromotionConfig;
            node.promote({
                transition: config ? config.transition : undefined,
                preserveFollowOpacity: config && config.shouldPreserveFollowOpacity
                    ? config.shouldPreserveFollowOpacity(node)
                    : undefined,
            });
        }
        isLead() {
            const stack = this.getStack();
            return stack ? stack.lead === this : true;
        }
        getLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
        }
        getPrevLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : undefined;
        }
        getStack() {
            const { layoutId } = this.options;
            if (layoutId)
                return this.root.sharedNodes.get(layoutId);
        }
        promote({ needsReset, transition, preserveFollowOpacity, } = {}) {
            const stack = this.getStack();
            if (stack)
                stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition)
                this.setOptions({ transition });
        }
        relegate() {
            const stack = this.getStack();
            if (stack) {
                return stack.relegate(this);
            }
            else {
                return false;
            }
        }
        resetRotation() {
            const { visualElement } = this.options;
            if (!visualElement)
                return;
            // If there's no detected rotation values, we can early return without a forced render.
            let hasRotate = false;
            /**
             * An unrolled check for rotation values. Most elements don't have any rotation and
             * skipping the nested loop and new object creation is 50% faster.
             */
            const { latestValues } = visualElement;
            if (latestValues.rotate ||
                latestValues.rotateX ||
                latestValues.rotateY ||
                latestValues.rotateZ) {
                hasRotate = true;
            }
            // If there's no rotation values, we don't need to do any more.
            if (!hasRotate)
                return;
            const resetValues = {};
            // Check the rotate value of all axes and reset to 0
            for (let i = 0; i < transformAxes.length; i++) {
                const key = "rotate" + transformAxes[i];
                // Record the rotation and then temporarily set it to 0
                if (latestValues[key]) {
                    resetValues[key] = latestValues[key];
                    visualElement.setStaticValue(key, 0);
                }
            }
            // Force a render of this element to apply the transform with all rotations
            // set to 0.
            visualElement.render();
            // Put back all the values we reset
            for (const key in resetValues) {
                visualElement.setStaticValue(key, resetValues[key]);
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        }
        getProjectionStyles(styleProp) {
            var _a, _b;
            if (!this.instance || this.isSVG)
                return undefined;
            if (!this.isVisible) {
                return hiddenVisibility;
            }
            const styles = {
                visibility: "",
            };
            const transformTemplate = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = false;
                styles.opacity = "";
                styles.pointerEvents =
                    resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                styles.transform = transformTemplate
                    ? transformTemplate(this.latestValues, "")
                    : "none";
                return styles;
            }
            const lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                const emptyStyles = {};
                if (this.options.layoutId) {
                    emptyStyles.opacity =
                        this.latestValues.opacity !== undefined
                            ? this.latestValues.opacity
                            : 1;
                    emptyStyles.pointerEvents =
                        resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                }
                if (this.hasProjected && !hasTransform(this.latestValues)) {
                    emptyStyles.transform = transformTemplate
                        ? transformTemplate({}, "")
                        : "none";
                    this.hasProjected = false;
                }
                return emptyStyles;
            }
            const valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) {
                styles.transform = transformTemplate(valuesToRender, styles.transform);
            }
            const { x, y } = this.projectionDelta;
            styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
            if (lead.animationValues) {
                /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */
                styles.opacity =
                    lead === this
                        ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1
                        : this.preserveOpacity
                            ? this.latestValues.opacity
                            : valuesToRender.opacityExit;
            }
            else {
                /**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */
                styles.opacity =
                    lead === this
                        ? valuesToRender.opacity !== undefined
                            ? valuesToRender.opacity
                            : ""
                        : valuesToRender.opacityExit !== undefined
                            ? valuesToRender.opacityExit
                            : 0;
            }
            /**
             * Apply scale correction
             */
            for (const key in scaleCorrectors) {
                if (valuesToRender[key] === undefined)
                    continue;
                const { correct, applyTo } = scaleCorrectors[key];
                /**
                 * Only apply scale correction to the value if we have an
                 * active projection transform. Otherwise these values become
                 * vulnerable to distortion if the element changes size without
                 * a corresponding layout animation.
                 */
                const corrected = styles.transform === "none"
                    ? valuesToRender[key]
                    : correct(valuesToRender[key], lead);
                if (applyTo) {
                    const num = applyTo.length;
                    for (let i = 0; i < num; i++) {
                        styles[applyTo[i]] = corrected;
                    }
                }
                else {
                    styles[key] = corrected;
                }
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */
            if (this.options.layoutId) {
                styles.pointerEvents =
                    lead === this
                        ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || ""
                        : "none";
            }
            return styles;
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
        }
        // Only run on root
        resetTree() {
            this.root.nodes.forEach((node) => { var _a; return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop(); });
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        }
    };
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    var _a;
    const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
    if (node.isLead() &&
        node.layout &&
        snapshot &&
        node.hasListeners("didUpdate")) {
        const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
        const { animationType } = node.options;
        const isShared = snapshot.source !== node.layout.source;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (animationType === "size") {
            eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = calcLength(axisSnapshot);
                axisSnapshot.min = layout[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        }
        else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
            eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = calcLength(layout[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
                /**
                 * Ensure relative target gets resized and rerendererd
                 */
                if (node.relativeTarget && !node.currentAnimation) {
                    node.isProjectionDirty = true;
                    node.relativeTarget[axis].max =
                        node.relativeTarget[axis].min + length;
                }
            });
        }
        const layoutDelta = createDelta();
        calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
        const visualDelta = createDelta();
        if (isShared) {
            calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        }
        else {
            calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
        }
        const hasLayoutChanged = !isDeltaZero(layoutDelta);
        let hasRelativeTargetChanged = false;
        if (!node.resumeFrom) {
            const relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */
            if (relativeParent && !relativeParent.resumeFrom) {
                const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
                if (parentSnapshot && parentLayout) {
                    const relativeSnapshot = createBox();
                    calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
                    const relativeLayout = createBox();
                    calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox);
                    if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
                        hasRelativeTargetChanged = true;
                    }
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout,
            snapshot,
            delta: visualDelta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeTargetChanged,
        });
    }
    else if (node.isLead()) {
        const { onExitComplete } = node.options;
        onExitComplete && onExitComplete();
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */
    node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
    /**
     * Increase debug counter for nodes encountered this frame
     */
    projectionFrameData.totalNodes++;
    if (!node.parent)
        return;
    /**
     * If this node isn't projecting, propagate isProjectionDirty. It will have
     * no performance impact but it will allow the next child that *is* projecting
     * but *isn't* dirty to just check its parent to see if *any* ancestor needs
     * correcting.
     */
    if (!node.isProjecting()) {
        node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    /**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty ||
        node.parent.isProjectionDirty ||
        node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty =
        node.isSharedProjectionDirty =
            node.isTransformDirty =
                false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
    node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetRotation(node) {
    node.resetRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = mix(delta.translate, 0, p);
    output.scale = mix(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = mix(from.min, to.min, p);
    output.max = mix(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return (node.animationValues && node.animationValues.opacityExit !== undefined);
}
const defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
const userAgentContains = (string) => typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().includes(string);
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */
const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/")
    ? Math.round
    : noop;
function roundAxis(axis) {
    // Round to the nearest .5 pixels to support subpixel layouts
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
    return (animationType === "position" ||
        (animationType === "preserve-aspect" &&
            !isNear(aspectRatio(snapshot), aspectRatio(layout), 0.2)));
}

const DocumentProjectionNode = createProjectionNode({
    attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => true,
});

const rootProjectionNode = {
    current: undefined,
};
const HTMLProjectionNode = createProjectionNode({
    measureScroll: (instance) => ({
        x: instance.scrollLeft,
        y: instance.scrollTop,
    }),
    defaultParent: () => {
        if (!rootProjectionNode.current) {
            const documentNode = new DocumentProjectionNode({});
            documentNode.mount(window);
            documentNode.setOptions({ layoutScroll: true });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: (instance, value) => {
        instance.style.transform = value !== undefined ? value : "none";
    },
    checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed"),
});

const drag = {
    pan: {
        Feature: PanGesture,
    },
    drag: {
        Feature: DragGesture,
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout,
    },
};

/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
const splitCSSVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
        return [,];
    const [, token, fallback] = match;
    return [token, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    else if (isCSSVariableToken(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, { ...target }, transitionEnd) {
    const element = visualElement.current;
    if (!(element instanceof Element))
        return { target, transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = { ...transitionEnd };
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.values.forEach((value) => {
        const current = value.get();
        if (!isCSSVariableToken(current))
            return;
        const resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (const key in target) {
        const current = target[key];
        if (!isCSSVariableToken(current))
            continue;
        const resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        if (!transitionEnd)
            transitionEnd = {};
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd[key] === undefined) {
            transitionEnd[key] = current;
        }
    }
    return { target, transitionEnd };
}

const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
]);
const isPositionalKey = (key) => positionalKeys.has(key);
const hasPositionalKey = (target) => {
    return Object.keys(target).some(isPositionalKey);
};
const isNumOrPxType = (v) => v === number || v === px;
const getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
    if (transform === "none" || !transform)
        return 0;
    const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        const matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
};
const transformKeys = new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.render();
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
const convertChangedValueTypes = (target, visualElement, changedKeys) => {
    const originBbox = visualElement.measureViewportBox();
    const element = visualElement.current;
    const elementComputedStyle = getComputedStyle(element);
    const { display } = elementComputedStyle;
    const origin = {};
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValue("display", target.display || "block");
    }
    /**
     * Record origins before we render and update styles
     */
    changedKeys.forEach((key) => {
        origin[key] = positionalValues[key](originBbox, elementComputedStyle);
    });
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.render();
    const targetBbox = visualElement.measureViewportBox();
    changedKeys.forEach((key) => {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        const value = visualElement.getValue(key);
        value && value.jump(origin[key]);
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
const checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
    target = { ...target };
    transitionEnd = { ...transitionEnd };
    const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    let removedTransformValues = [];
    let hasAttemptedToRemoveTransformValues = false;
    const changedValueTypeKeys = [];
    targetPositionalKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        let from = origin[key];
        let fromType = findDimensionValueType(from);
        const to = target[key];
        let toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if (isKeyframesTarget(to)) {
            const numKeyframes = to.length;
            const fromIndex = to[0] === null ? 1 : 0;
            from = to[fromIndex];
            fromType = findDimensionValueType(from);
            for (let i = fromIndex; i < numKeyframes; i++) {
                /**
                 * Don't allow wildcard keyframes to be used to detect
                 * a difference in value types.
                 */
                if (to[i] === null)
                    break;
                if (!toType) {
                    toType = findDimensionValueType(to[i]);
                    invariant(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = findDimensionValueType(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                const current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === px) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) &&
                (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues =
                        removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                value.jump(to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        const scrollY = changedValueTypeKeys.indexOf("height") >= 0
            ? window.pageYOffset
            : null;
        const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(([key, value]) => {
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.render();
        // Restore scroll position
        if (isBrowser && scrollY !== null) {
            window.scrollTo({ top: scrollY });
        }
        return { target: convertedTarget, transitionEnd };
    }
    else {
        return { target, transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target, transitionEnd };
}

/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
const parseDomVariant = (visualElement, target, origin, transitionEnd) => {
    const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return unitConversion(visualElement, target, origin, transitionEnd);
};

// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };

function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!isBrowser)
        return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = () => (prefersReducedMotion.current = motionMediaQuery.matches);
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.current = false;
    }
}

function updateMotionValuesFromProps(element, next, prev) {
    const { willChange } = next;
    for (const key in next) {
        const nextValue = next[key];
        const prevValue = prev[key];
        if (isMotionValue(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
            if (isWillChangeMotionValue(willChange)) {
                willChange.add(key);
            }
            /**
             * Check the version of the incoming motion value with this version
             * and warn against mismatches.
             */
            if (process.env.NODE_ENV === "development") {
                warnOnce(nextValue.version === "10.18.0", `Attempting to mix Framer Motion versions ${nextValue.version} with 10.18.0 may not work as expected.`);
            }
        }
        else if (isMotionValue(prevValue)) {
            /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */
            element.addValue(key, motionValue(nextValue, { owner: element }));
            if (isWillChangeMotionValue(willChange)) {
                willChange.remove(key);
            }
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                // TODO: Only update values that aren't being animated or even looked at
                !existingValue.hasAnimated && existingValue.set(nextValue);
            }
            else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, motionValue(latestValue !== undefined ? latestValue : nextValue, { owner: element }));
            }
        }
    }
    // Handle removed values
    for (const key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}

const visualElementStore = new WeakMap();

const featureNames = Object.keys(featureDefinitions);
const numFeatures = featureNames.length;
const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
const numVariantProps = variantProps.length;
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */
class VisualElement {
    constructor({ parent, props, presenceContext, reducedMotionConfig, visualState, }, options = {}) {
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */
        this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */
        this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */
        this.shouldReduceMotion = null;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        this.values = new Map();
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */
        this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        this.prevMotionValues = {};
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */
        this.propEventSubscriptions = {};
        this.notifyUpdate = () => this.notify("Update", this.latestValues);
        this.render = () => {
            if (!this.current)
                return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.scheduleRender = () => frame.render(this.render, false, true);
        const { latestValues, renderState } = visualState;
        this.latestValues = latestValues;
        this.baseTarget = { ...latestValues };
        this.initialValues = props.initial ? { ...latestValues } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.isControllingVariants = isControllingVariants(props);
        this.isVariantNode = isVariantNode(props);
        if (this.isVariantNode) {
            this.variantChildren = new Set();
        }
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */
        const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {});
        for (const key in initialMotionValues) {
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && isMotionValue(value)) {
                value.set(latestValues[key], false);
                if (isWillChangeMotionValue(willChange)) {
                    willChange.add(key);
                }
            }
        }
    }
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps) {
        return {};
    }
    mount(instance) {
        this.current = instance;
        visualElementStore.set(instance, this);
        if (this.projection && !this.projection.instance) {
            this.projection.mount(instance);
        }
        if (this.parent && this.isVariantNode && !this.isControllingVariants) {
            this.removeFromVariantTree = this.parent.addVariantChild(this);
        }
        this.values.forEach((value, key) => this.bindToMotionValue(key, value));
        if (!hasReducedMotionListener.current) {
            initPrefersReducedMotion();
        }
        this.shouldReduceMotion =
            this.reducedMotionConfig === "never"
                ? false
                : this.reducedMotionConfig === "always"
                    ? true
                    : prefersReducedMotion.current;
        if (process.env.NODE_ENV !== "production") {
            warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
        }
        if (this.parent)
            this.parent.children.add(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        visualElementStore.delete(this.current);
        this.projection && this.projection.unmount();
        cancelFrame(this.notifyUpdate);
        cancelFrame(this.render);
        this.valueSubscriptions.forEach((remove) => remove());
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent && this.parent.children.delete(this);
        for (const key in this.events) {
            this.events[key].clear();
        }
        for (const key in this.features) {
            this.features[key].unmount();
        }
        this.current = null;
    }
    bindToMotionValue(key, value) {
        const valueIsTransform = transformProps.has(key);
        const removeOnChange = value.on("change", (latestValue) => {
            this.latestValues[key] = latestValue;
            this.props.onUpdate &&
                frame.update(this.notifyUpdate, false, true);
            if (valueIsTransform && this.projection) {
                this.projection.isTransformDirty = true;
            }
        });
        const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(key, () => {
            removeOnChange();
            removeOnRenderRequest();
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */
        if (!this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== other.type) {
            return 0;
        }
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    loadFeatures({ children, ...renderedProps }, isStrict, preloadedFeatures, initialLayoutGroupConfig) {
        let ProjectionNodeConstructor;
        let MeasureLayout;
        /**
         * If we're in development mode, check to make sure we're not rendering a motion component
         * as a child of LazyMotion, as this will break the file-size benefits of using it.
         */
        if (process.env.NODE_ENV !== "production" &&
            preloadedFeatures &&
            isStrict) {
            const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
            renderedProps.ignoreStrict
                ? warning(false, strictMessage)
                : invariant(false, strictMessage);
        }
        for (let i = 0; i < numFeatures; i++) {
            const name = featureNames[i];
            const { isEnabled, Feature: FeatureConstructor, ProjectionNode, MeasureLayout: MeasureLayoutComponent, } = featureDefinitions[name];
            if (ProjectionNode)
                ProjectionNodeConstructor = ProjectionNode;
            if (isEnabled(renderedProps)) {
                if (!this.features[name] && FeatureConstructor) {
                    this.features[name] = new FeatureConstructor(this);
                }
                if (MeasureLayoutComponent) {
                    MeasureLayout = MeasureLayoutComponent;
                }
            }
        }
        if ((this.type === "html" || this.type === "svg") &&
            !this.projection &&
            ProjectionNodeConstructor) {
            this.projection = new ProjectionNodeConstructor(this.latestValues, this.parent && this.parent.projection);
            const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, } = renderedProps;
            this.projection.setOptions({
                layoutId,
                layout,
                alwaysMeasureLayout: Boolean(drag) ||
                    (dragConstraints && isRefObject(dragConstraints)),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                /**
                 * TODO: Update options in an effect. This could be tricky as it'll be too late
                 * to update by the time layout animations run.
                 * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
                 * ensuring it gets called if there's no potential layout animations.
                 *
                 */
                animationType: typeof layout === "string" ? layout : "both",
                initialPromotionConfig: initialLayoutGroupConfig,
                layoutScroll,
                layoutRoot,
            });
        }
        return MeasureLayout;
    }
    updateFeatures() {
        for (const key in this.features) {
            const feature = this.features[key];
            if (feature.isMounted) {
                feature.update();
            }
            else {
                feature.mount();
                feature.isMounted = true;
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : createBox();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Make a target animatable by Popmotion. For instance, if we're
     * trying to animate width from 100px to 100vw we need to measure 100vw
     * in pixels to determine what we really need to animate to. This is also
     * pluggable to support Framer's custom value types like Color,
     * and CSS variables.
     */
    makeTargetAnimatable(target, canMutate = true) {
        return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) {
            this.scheduleRender();
        }
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */
        for (let i = 0; i < propEventHandlers.length; i++) {
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listener = props["on" + key];
            if (listener) {
                this.propEventSubscriptions[key] = this.on(key, listener);
            }
        }
        this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps), this.prevMotionValues);
        if (this.handleChildMotionValue) {
            this.handleChildMotionValue();
        }
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
                ? this.parent.getClosestVariantNode()
                : undefined;
    }
    getVariantContext(startAtParent = false) {
        if (startAtParent) {
            return this.parent ? this.parent.getVariantContext() : undefined;
        }
        if (!this.isControllingVariants) {
            const context = this.parent
                ? this.parent.getVariantContext() || {}
                : {};
            if (this.props.initial !== undefined) {
                context.initial = this.props.initial;
            }
            return context;
        }
        const context = {};
        for (let i = 0; i < numVariantProps; i++) {
            const name = variantProps[i];
            const prop = this.props[name];
            if (isVariantLabel(prop) || prop === false) {
                context[name] = prop;
            }
        }
        return context;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren &&
                closestVariantNode.variantChildren.add(child);
            return () => closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
        // Remove existing value if it exists
        if (value !== this.values.get(key)) {
            this.removeValue(key);
            this.bindToMotionValue(key, value);
        }
        this.values.set(key, value);
        this.latestValues[key] = value.get();
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) {
            return this.props.values[key];
        }
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = motionValue(defaultValue, { owner: this });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key) {
        var _a;
        return this.latestValues[key] !== undefined || !this.current
            ? this.latestValues[key]
            : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
        var _a;
        const { initial } = this.props;
        const valueFromInitial = typeof initial === "string" || typeof initial === "object"
            ? (_a = resolveVariantFromProps(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key]
            : undefined;
        /**
         * If this value still exists in the current initial variant, read that.
         */
        if (initial && valueFromInitial !== undefined) {
            return valueFromInitial;
        }
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */
        const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !isMotionValue(target))
            return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */
        return this.initialValues[key] !== undefined &&
            valueFromInitial === undefined
            ? undefined
            : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new SubscriptionManager();
        }
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].notify(...args);
        }
    }
}

class DOMVisualElement extends VisualElement {
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        return props.style ? props.style[key] : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    makeTargetAnimatableFromInstance({ transition, transitionEnd, ...target }, { transformValues }, isMounted) {
        let origin = getOrigin(target, transition || {}, this);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
            if (transitionEnd)
                transitionEnd = transformValues(transitionEnd);
            if (target)
                target = transformValues(target);
            if (origin)
                origin = transformValues(origin);
        }
        if (isMounted) {
            checkTargetForNewValues(this, target, origin);
            const parsed = parseDomVariant(this, target, origin, transitionEnd);
            transitionEnd = parsed.transitionEnd;
            target = parsed.target;
        }
        return {
            transition,
            transitionEnd,
            ...target,
        };
    }
}

function getComputedStyle$1(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "html";
    }
    readValueFromInstance(instance, key) {
        if (transformProps.has(key)) {
            const defaultType = getDefaultValueType(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            const computedStyle = getComputedStyle$1(instance);
            const value = (isCSSVariableName(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return measureViewportBox(instance, transformPagePoint);
    }
    build(renderState, latestValues, options, props) {
        buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps) {
        return scrapeMotionValuesFromProps$1(props, prevProps);
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if (isMotionValue(children)) {
            this.childSubscription = children.on("change", (latest) => {
                if (this.current)
                    this.current.textContent = `${latest}`;
            });
        }
    }
    renderInstance(instance, renderState, styleProp, projection) {
        renderHTML(instance, renderState, styleProp, projection);
    }
}

class SVGVisualElement extends DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "svg";
        this.isSVGTag = false;
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if (transformProps.has(key)) {
            const defaultType = getDefaultValueType(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        return instance.getAttribute(key);
    }
    measureInstanceViewportBox() {
        return createBox();
    }
    scrapeMotionValuesFromProps(props, prevProps) {
        return scrapeMotionValuesFromProps(props, prevProps);
    }
    build(renderState, latestValues, options, props) {
        buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        renderSVG(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = isSVGTag(instance.tagName);
        super.mount(instance);
    }
}

const createDomVisualElement = (Component, options) => {
    return isSVGComponent(Component)
        ? new SVGVisualElement(options, { enableHardwareAcceleration: false })
        : new HTMLVisualElement(options, { enableHardwareAcceleration: true });
};

const layout = {
    layout: {
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout,
    },
};

const preloadedFeatures = {
    ...animations,
    ...gestureAnimations,
    ...drag,
    ...layout,
};
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
const motion = /*@__PURE__*/ createMotionProxy((Component, config) => createDomMotionConfig(Component, config, preloadedFeatures, createDomVisualElement));

function useIsMounted() {
    const isMounted = useRef(false);
    useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}

function useForceUpdate() {
    const isMounted = useIsMounted();
    const [forcedRenderCount, setForcedRenderCount] = useState(0);
    const forceRender = useCallback(() => {
        isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */
    const deferredForceRender = useCallback(() => frame.postRender(forceRender), [forceRender]);
    return [deferredForceRender, forcedRenderCount];
}

/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends React.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent }) {
    const id = useId();
    const ref = useRef(null);
    const size = useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    useInsertionEffect(() => {
        const { width, height, top, left } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
        }
        return () => {
            document.head.removeChild(style);
        };
    }, [isPresent]);
    return (React.createElement(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size }, React.cloneElement(children, { ref })));
}

const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, }) => {
    const presenceChildren = useConstant(newChildrenMap);
    const id = useId();
    const context = useMemo(() => ({
        id,
        initial,
        isPresent,
        custom,
        onExitComplete: (childId) => {
            presenceChildren.set(childId, true);
            for (const isComplete of presenceChildren.values()) {
                if (!isComplete)
                    return; // can stop searching when any is incomplete
            }
            onExitComplete && onExitComplete();
        },
        register: (childId) => {
            presenceChildren.set(childId, false);
            return () => presenceChildren.delete(childId);
        },
    }), 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    useMemo(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    React.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = React.createElement(PopChild, { isPresent: isPresent }, children);
    }
    return (React.createElement(PresenceContext.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}

function useUnmountEffect(callback) {
    return useEffect(() => () => callback(), []);
}

const getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
    children.forEach((child) => {
        const key = getChildKey(child);
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    Children.forEach(children, (child) => {
        if (isValidElement(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync", }) => {
    invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    const forceRender = useContext(LayoutGroupContext).forceRender || useForceUpdate()[0];
    const isMounted = useIsMounted();
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    const filteredChildren = onlyElements(children);
    let childrenToRender = filteredChildren;
    const exitingChildren = useRef(new Map()).current;
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    const presentChildren = useRef(childrenToRender);
    // A lookup table to quickly reference components by key
    const allChildren = useRef(new Map()).current;
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    const isInitialRender = useRef(true);
    useIsomorphicLayoutEffect(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
    });
    useUnmountEffect(() => {
        isInitialRender.current = true;
        allChildren.clear();
        exitingChildren.clear();
    });
    if (isInitialRender.current) {
        return (React.createElement(React.Fragment, null, childrenToRender.map((child) => (React.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child)))));
    }
    // If this is a subsequent render, deal with entering and exiting children
    childrenToRender = [...childrenToRender];
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    const presentKeys = presentChildren.current.map(getChildKey);
    const targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    const numPresent = presentKeys.length;
    for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) {
            exitingChildren.set(key, undefined);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (mode === "wait" && exitingChildren.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exitingChildren.forEach((component, key) => {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        const child = allChildren.get(key);
        if (!child)
            return;
        const insertionIndex = presentKeys.indexOf(key);
        let exitingComponent = component;
        if (!exitingComponent) {
            const onExit = () => {
                // clean up the exiting children map
                exitingChildren.delete(key);
                // compute the keys of children that were rendered once but are no longer present
                // this could happen in case of too many fast consequent renderings
                // @link https://github.com/framer/motion/issues/2023
                const leftOverKeys = Array.from(allChildren.keys()).filter((childKey) => !targetKeys.includes(childKey));
                // clean up the all children map
                leftOverKeys.forEach((leftOverKey) => allChildren.delete(leftOverKey));
                // make sure to render only the children that are actually visible
                presentChildren.current = filteredChildren.filter((presentChild) => {
                    const presentChildKey = getChildKey(presentChild);
                    return (
                    // filter out the node exiting
                    presentChildKey === key ||
                        // filter out the leftover children
                        leftOverKeys.includes(presentChildKey));
                });
                // Defer re-rendering until all exiting children have indeed left
                if (!exitingChildren.size) {
                    if (isMounted.current === false)
                        return;
                    forceRender();
                    onExitComplete && onExitComplete();
                }
            };
            exitingComponent = (React.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
            exitingChildren.set(key, exitingComponent);
        }
        childrenToRender.splice(insertionIndex, 0, exitingComponent);
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exitingChildren.has(key) ? (child) : (React.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
    });
    if (process.env.NODE_ENV !== "production" &&
        mode === "wait" &&
        childrenToRender.length > 1) {
        console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
    }
    return (React.createElement(React.Fragment, null, exitingChildren.size
        ? childrenToRender
        : childrenToRender.map((child) => cloneElement(child))));
};

var img$2 = "data:image/png;base64,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";

var img$1 = "data:image/png;base64,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";

var img = "data:image/png;base64,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";

// API URL as a constant
var API_URL = "https://kodiak-viable-supposedly.ngrok-free.app";
var getContrastColor = function getContrastColor(hexColor) {
  // Remove # if present
  var hex = hexColor.replace('#', '');
  // Convert hex to RGB
  var r = parseInt(hex.substr(0, 2), 16);
  var g = parseInt(hex.substr(2, 2), 16);
  var b = parseInt(hex.substr(4, 2), 16);
  // Calculate perceived brightness (YIQ formula)
  var brightness = r * 0.299 + g * 0.587 + b * 0.114;
  // Return white for dark colors and black for light colors
  return brightness < 150 ? '#ffffff' : '#000000';
};
var ModelosaurusChatbot = function ModelosaurusChatbot(_a) {
  var _b;
  var modelosaurusKey = _a.modelosaurusKey,
    chatbotId = _a.chatbotId;
  // Use state for all settings that were previously props
  var _c = useState({
      headerColor: '#6419E6',
      chatBubbleUserColor: '#F000B8',
      chatBubbleBotColor: '#6419E6',
      fontSize: 16,
      borderRadius: 10,
      fontFamily: 'sans-serif',
      showBotIcon: true,
      showUserIcon: true,
      botIconUrl: "",
      userIconUrl: "",
      titleText: 'Chat with AI',
      initialMessage: 'Hello! How can I assist you today?',
      llm: 'llama-3.1-8b-instant',
      temperature: 30,
      maxTokens: 500,
      customCSS: '',
      enableVectorSearch: true,
      enableStreaming: true
    }),
    settings = _c[0],
    setSettings = _c[1];
  var _d = useState(''),
    message = _d[0],
    setMessage = _d[1];
  var _e = useState(false),
    loading = _e[0],
    setLoading = _e[1];
  var _f = useState([{
      sender: 'bot',
      message: settings.initialMessage || 'Hello! How can I assist you today?'
    }]),
    chat = _f[0],
    setChat = _f[1];
  var _g = useState(false),
    isExpanded = _g[0],
    setIsExpanded = _g[1];
  var chatEndRef = useRef(null);
  var _h = useState(null),
    vectorStoreUrl = _h[0],
    setVectorStoreUrl = _h[1];
  // Convert temperature value (0-100) to actual temperature (0-1)
  var actualTemperature = (settings.temperature || 30) / 100;
  var scrollToBottom = function scrollToBottom() {
    var _a;
    (_a = chatEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(function () {
    scrollToBottom();
  }, [chat]);
  // Initialize chat with initial message
  useEffect(function () {
    if (settings.initialMessage && chat.length === 0) {
      setChat([{
        sender: 'bot',
        message: settings.initialMessage
      }]);
    }
  }, [settings.initialMessage, chat.length]);
  // Fetch chatbot data from the server
  useEffect(function () {
    fetch("".concat(API_URL, "/chatbot/get-chatbot-data"), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        apiKey: modelosaurusKey,
        chatbotId: chatbotId
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log("got the vector store url.");
      if (data.vector_store_url) {
        console.log(data.vector_store_url);
        setVectorStoreUrl(data.vector_store_url);
      }
      console.log("data:", data);
      // Check if the response contains the expected data
      // Update all settings from chatbotData
      if (data.chatbotData) {
        setSettings(function (prevSettings) {
          return __assign(__assign({}, prevSettings), data.chatbotData);
        });
      }
    })["catch"](function (error) {
      console.error('Error:', error);
    });
  }, [modelosaurusKey, chatbotId]);
  // Apply custom CSS if provided
  useEffect(function () {
    if (settings.customCSS) {
      var styleElement_1 = document.createElement('style');
      styleElement_1.innerHTML = settings.customCSS;
      document.head.appendChild(styleElement_1);
      return function () {
        document.head.removeChild(styleElement_1);
      };
    }
  }, [settings.customCSS]);
  var formatBotResponse = function formatBotResponse(response) {
    if (!response) return '';
    // Replace </s> if it appears (common in LLM outputs)
    response = response.replace(/<\/s>/g, '');
    // Convert markdown-style bold text to HTML
    response = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Handle lists - add proper spacing after list items
    response = response.replace(/(\d+\.\s.+?)(?:\n|$)/g, '$1\n\n');
    response = response.replace(/(-\s.+?)(?:\n|$)/g, '$1\n\n');
    // Handle paragraphs - ensure proper spacing between paragraphs
    response = response.replace(/\.(?=\s)/g, '.\n\n');
    // Clean up excessive newlines
    response = response.replace(/\n{3,}/g, '\n\n');
    return response;
  };
  var handleSubmit = function handleSubmit(e) {
    return __awaiter(void 0, void 0, void 0, function () {
      var currentMessage, onMessageSentFn, res, reader, decoder, result_1, _a, done, value, chunk, lines, _i, lines_1, line, data, parsed, onMessageReceivedFn, data, botResponse_1, onMessageReceivedFn, err_1;
      var _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            e.preventDefault();
            currentMessage = message;
            setLoading(true);
            // Add the user's message to the chat immediately
            setChat(function (prevChat) {
              return __spreadArray(__spreadArray([], prevChat, true), [{
                sender: 'user',
                message: currentMessage
              }], false);
            });
            // Execute onMessageSent if available
            if (settings.onMessageSent) {
              try {
                onMessageSentFn = new Function('message', settings.onMessageSent);
                onMessageSentFn(currentMessage);
              } catch (error) {
                console.error('Error executing onMessageSent hook:', error);
              }
            }
            setMessage('');
            _c.label = 1;
          case 1:
            _c.trys.push([1, 9,, 10]);
            return [4 /*yield*/, fetch("".concat(API_URL, "/chatbot/chat"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(modelosaurusKey)
              },
              body: JSON.stringify({
                chatbot_id: chatbotId,
                model: settings.llm,
                temperature: actualTemperature,
                max_tokens: settings.maxTokens,
                messages: [{
                  role: "user",
                  content: currentMessage
                }],
                stream: settings.enableStreaming,
                enable_vector_search: settings.enableVectorSearch,
                vector_store_url: vectorStoreUrl
              })
            })];
          case 2:
            res = _c.sent();
            if (!res.ok) {
              throw new Error("HTTP error! status: ".concat(res.status));
            }
            if (!settings.enableStreaming) return [3 /*break*/, 6];
            reader = (_b = res.body) === null || _b === void 0 ? void 0 : _b.getReader();
            if (!reader) throw new Error('Response body reader not available');
            decoder = new TextDecoder();
            result_1 = '';
            // Add an initial empty bot message
            setChat(function (prevChat) {
              return __spreadArray(__spreadArray([], prevChat, true), [{
                sender: 'bot',
                message: ''
              }], false);
            });
            _c.label = 3;
          case 3:
            return [4 /*yield*/, reader.read()];
          case 4:
            _a = _c.sent(), done = _a.done, value = _a.value;
            if (done) return [3 /*break*/, 5];
            chunk = decoder.decode(value, {
              stream: true
            });
            lines = chunk.split('\n').filter(function (line) {
              return line.trim() !== '';
            });
            for (_i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
              line = lines_1[_i];
              if (line.startsWith('data: ')) {
                data = line.slice(6);
                if (data === '[DONE]') continue;
                try {
                  parsed = JSON.parse(data);
                  if (parsed.choices && parsed.choices[0].delta.content) {
                    result_1 += parsed.choices[0].delta.content;
                    // Update chat with current result
                    setChat(function (prevChat) {
                      return __spreadArray(__spreadArray([], prevChat.slice(0, -1), true), [{
                        sender: 'bot',
                        message: result_1
                      }], false);
                    });
                  }
                } catch (e) {
                  console.error('Error parsing SSE data:', e);
                }
              }
            }
            return [3 /*break*/, 3];
          case 5:
            // Execute onMessageReceived for streaming response
            if (settings.onMessageReceived && result_1) {
              try {
                onMessageReceivedFn = new Function('message', settings.onMessageReceived);
                onMessageReceivedFn(result_1);
              } catch (error) {
                console.error('Error executing onMessageReceived hook:', error);
              }
            }
            return [3 /*break*/, 8];
          case 6:
            return [4 /*yield*/, res.json()];
          case 7:
            data = _c.sent();
            botResponse_1 = data.choices[0].message.content;
            setChat(function (prevChat) {
              return __spreadArray(__spreadArray([], prevChat, true), [{
                sender: 'bot',
                message: botResponse_1
              }], false);
            });
            // Execute onMessageReceived if available
            if (settings.onMessageReceived) {
              try {
                onMessageReceivedFn = new Function('message', settings.onMessageReceived);
                onMessageReceivedFn(botResponse_1);
              } catch (error) {
                console.error('Error executing onMessageReceived hook:', error);
              }
            }
            _c.label = 8;
          case 8:
            setLoading(false);
            return [3 /*break*/, 10];
          case 9:
            err_1 = _c.sent();
            console.error('Fetch error:', err_1);
            setLoading(false);
            // Add an error message to the chat
            setChat(function (prevChat) {
              return __spreadArray(__spreadArray([], prevChat, true), [{
                sender: 'bot',
                message: 'Sorry, an error occurred. Please try again.'
              }], false);
            });
            return [3 /*break*/, 10];
          case 10:
            return [2 /*return*/];
        }
      });
    });
  };
  var handleSendMessage = function handleSendMessage() {
    if (message.trim() !== '') {
      handleSubmit({
        preventDefault: function preventDefault() {}
      });
    }
  };
  var handleKeyPress = function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  var toggleChat = function toggleChat() {
    setIsExpanded(!isExpanded);
  };
  // Dynamic styles based on settings
  var styles = {
    header: {
      backgroundColor: settings.headerColor,
      color: getContrastColor(settings.headerColor || '#6419E6')
    },
    chatBubbleUser: {
      backgroundColor: settings.chatBubbleUserColor,
      borderRadius: "".concat(settings.borderRadius, "px"),
      color: getContrastColor(settings.chatBubbleUserColor || '#F000B8')
    },
    chatBubbleBot: {
      backgroundColor: settings.chatBubbleBotColor,
      borderRadius: "".concat(settings.borderRadius, "px"),
      color: getContrastColor(settings.chatBubbleBotColor || '#6419E6')
    },
    font: {
      fontSize: "".concat(settings.fontSize, "px"),
      fontFamily: settings.fontFamily
    }
  };
  return jsxs(Fragment, {
    children: [jsx(AnimatePresence, {
      children: isExpanded && jsx(motion.div
      // @ts-ignore - motion.div has correct props but TypeScript doesn't recognize them properly
      , {
        // @ts-ignore - motion.div has correct props but TypeScript doesn't recognize them properly
        className: "fixed inset-0 z-40 pointer-events-none",
        style: {
          background: 'linear-gradient(to left, rgba(0,0,0,0.5), transparent)'
        },
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: 0.3
        }
      })
    }), jsxs("div", {
      className: "fixed bottom-0 right-0 md:bottom-4 md:right-7 z-50 w-full md:w-[30rem] drop-shadow-2xl",
      style: styles.font,
      children: [jsxs("div", {
        className: "bg-base-200 rounded-t-lg shadow-lg overflow-hidden",
        children: [jsxs("button", {
          onClick: toggleChat,
          className: "p-2 flex items-center justify-between cursor-pointer w-full",
          style: styles.header,
          children: [jsx("span", {
            className: "flex-1 text-center",
            style: {
              color: getContrastColor(settings.headerColor || '#6419E6')
            },
            children: settings.titleText
          }), isExpanded ? jsx(ChevronDown, {
            className: "w-6 h-6 text-white"
          }) : jsx(ChevronUp, {
            className: "w-6 h-6 text-white"
          })]
        }), jsx("div", {
          className: "bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient h-2",
          style: {
            backgroundImage: "linear-gradient(to right, ".concat(settings.headerColor, ", ").concat(settings.chatBubbleUserColor, ", ").concat(settings.headerColor, ")")
          }
        })]
      }), jsx("div", {
        className: "transition-all duration-300 ease-in-out overflow-hidden bg-base-200 rounded-b-lg shadow-lg flex flex-col ".concat(isExpanded ? 'h-[38rem]' : 'h-0'),
        children: jsxs("div", {
          className: "flex-1 flex flex-col overflow-hidden p-6",
          children: [jsxs("div", {
            className: "flex-1 overflow-y-auto",
            children: [chat.map(function (chatItem, index) {
              var _a, _b;
              return chatItem.message && chatItem.message.trim() === '' ? null : jsxs("div", {
                className: "chat mb-3 ".concat(chatItem.sender === 'bot' ? 'chat-start' : 'chat-end'),
                children: [chatItem.sender === 'bot' && settings.showBotIcon || chatItem.sender === 'user' && settings.showUserIcon ? jsx("div", {
                  className: "chat-image avatar",
                  children: jsx("div", {
                    className: "w-10 rounded-full",
                    children: jsx("img", {
                      alt: chatItem.sender,
                      src: chatItem.sender === 'bot' ? ((_a = settings.botIconUrl) === null || _a === void 0 ? void 0 : _a.trim()) !== "" ? settings.botIconUrl : img$1 : ((_b = settings.userIconUrl) === null || _b === void 0 ? void 0 : _b.trim()) !== "" ? settings.userIconUrl : img
                    })
                  })
                }) : null, jsxs("div", {
                  className: "chat-bubble relative",
                  style: chatItem.sender === 'bot' ? styles.chatBubbleBot : styles.chatBubbleUser,
                  children: [chatItem.sender === "bot" ? jsx("div", {
                    dangerouslySetInnerHTML: {
                      __html: formatBotResponse(chatItem.message).replace(/\n/g, '<br/>')
                    }
                  }) : chatItem.message, jsx("div", {
                    style: {
                      backgroundColor: chatItem.sender === 'bot' ? settings.chatBubbleBotColor : settings.chatBubbleUserColor
                    },
                    className: "".concat((settings.borderRadius || 10) <= 10 && "hidden", " absolute size-4 rounded-full -bottom-1 ").concat(chatItem.sender === "bot" ? "-left-3" : "-right-3", " bg-red-900 ")
                  })]
                })]
              }, index);
            }), loading && jsxs("div", {
              className: "chat chat-start",
              children: [settings.showBotIcon && jsx("div", {
                className: "chat-image avatar",
                children: jsx("div", {
                  className: "w-10 rounded-full",
                  children: jsx("img", {
                    alt: "bot",
                    src: ((_b = settings.botIconUrl) === null || _b === void 0 ? void 0 : _b.trim()) !== "" ? settings.botIconUrl : img$1
                  })
                })
              }), jsx("div", {
                className: "chat-bubble",
                style: styles.chatBubbleBot,
                children: jsx("span", {
                  className: "loading loading-dots loading-md"
                })
              })]
            }), jsx("div", {
              ref: chatEndRef
            })]
          }), jsxs("div", {
            className: "flex items-center gap-1 mt-5",
            children: [jsx("input", {
              type: "text",
              className: "input input-bordered w-full",
              placeholder: "Type a message",
              value: message,
              onChange: function onChange(e) {
                return setMessage(e.target.value);
              },
              onKeyPress: handleKeyPress
            }), jsx("button", {
              className: "btn btn-md",
              style: styles.header,
              onClick: handleSendMessage,
              children: jsx(SendHorizontal, {
                className: "size-6 text-white"
              })
            })]
          })]
        })
      }), jsx("div", {
        className: "bg-base-300 rounded-b-xl rounded-t-none -mt-4 text-center p-2 text-xs text-white",
        children: jsxs("a", {
          href: "https://modelosaurus.com",
          target: "_blank",
          rel: "noreferrer",
          className: "opacity-40 hover:opacity-90 transition-opacity duration-300 font-octosquare flex items-center justify-center gap-1",
          children: [jsx("img", {
            src: img$2,
            alt: "Modelosaurus",
            className: "size-3"
          }), jsxs("span", {
            children: ["POWERED BY", jsx("span", {
              className: "text-purple-600",
              children: " MODELOSAURUS"
            })]
          })]
        })
      })]
    })]
  });
};

export { ModelosaurusChatbot, ModelosaurusChatbot as default };
//# sourceMappingURL=index.esm.js.map
