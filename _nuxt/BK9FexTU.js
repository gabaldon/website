import{$ as z,o as l,c,B as d,a0 as h,a1 as p,a as u,F as L,E as D,d as $,t as O,z as w,H as y,G as v,a2 as F,a3 as j,a4 as S,a5 as P,b as H,w as V,a6 as A,u as C,a7 as N,x as I,n as q,C as K,D as x,v as m,a8 as R}from"./D8mrPgID.js";var b=(e=>(e.en="en-US",e.es="es-ES",e))(b||{}),G=(e=>(e.primary="primary",e.dark="dark",e.secondary="secondary",e.terciary="terciary",e.disabled="disabled",e))(G||{});const Ge={ado:"https://github.com/adoracles/",advocateProgram:"https://witnet.notion.site/The-Witnet-Advocate-Program-f572baff6b1d49a69d4db785a924fc61",bitmart:"https://www.bitmart.com/trade/en-US?symbol=WIT_USDT",block_explorer:"https://witnet.network/",changelly:"https://changelly.com/es/buy/wit",data_feeds_explorer:"https://feeds.witnet.io",discord:"https://discord.gg/witnet",docker_node:"https://hub.docker.com/r/witnet/witnet-rust/tags",documentation:"https://docs.witnet.io/",gate:"https://www.gate.io/trade/WIT_USDT",github:"https://github.com/witnet",grantProgram:"https://witnet.notion.site/The-Witnet-Grant-Program-0e6bc5ddbe4a4bf8a22c262dedfe268f",letsexchange:"https://letsexchange.io/coin/wit",linux_node:"https://github.com/witnet/witnet-rust/releases",macos_node:"https://github.com/witnet/witnet-rust/releases",mediaKit:"https://drive.google.com/drive/u/1/folders/1z9dSts64xyaIZqRvniMPDib7UWOE2P3z",medium:"https://medium.com/witnet",mexc:"https://www.mexc.com/exchange/WIT_USDT",my_wit_wallet:"https://mywitwallet.com/",sheikah:"https://sheikah.app/",newsletter:"http://eepurl.com/iDxYzs",rasberrypi_node:"https://github.com/witnet/witnet-rust/releases",reddit:"https://reddit.com/r/witnet",simpleSwap:"https://simpleswap.io/coins/wit",telegram:"https://t.me/witnetio",windows_node:"https://github.com/witnet/witnet-rust/releases",witnet_foundation:"https://witnet.foundation",x:"https://twitter.com/witnet_io",whitepaper:"witnet.io/witnet-whitepaper.pdf",tutorials:"https://docs.witnet.io/intro/tutorials",get_started:"https://docs.witnet.io/intro/about",github_contribute:"https://github.com/witnet/",http_requests:"https://docs.witnet.io/smart-contracts/witnet-web-oracle/make-a-get-request",graph_ql:"https://docs.witnet.io/smart-contracts/witnet-web-oracle/query-graphql-apis-in-solidity",dynamic_requests:"https://docs.witnet.io/smart-contracts/witnet-web-oracle/dynamic-requests-in-solidity",api_reference:"https://docs.witnet.io/smart-contracts/witnet-web-oracle/api-reference/radon-api",price_feed_routes:"https://docs.witnet.io/smart-contracts/supported-chains",reading_price_pairs:"https://docs.witnet.io/smart-contracts/witnet-data-feeds/price-feeds-registry",price_api_reference:"https://docs.witnet.io/smart-contracts/witnet-data-feeds/api-reference",multichain_addresses:"https://docs.witnet.io/smart-contracts/witnet-data-feeds/addresses",generating_rng:"https://docs.witnet.io/smart-contracts/witnet-data-feeds/addresses",low_level_request:"https://docs.witnet.io/smart-contracts/witnet-randomness-oracle/randomness-requests",solidity_api:"https://docs.witnet.io/smart-contracts/witnet-randomness-oracle/api-reference",randomness_addresses:"https://docs.witnet.io/smart-contracts/witnet-randomness-oracle/contract-addresses",reference:"https://docs.witnet.io/smart-contracts/witnet-data-feeds/api-reference",supported_chains:"https://docs.witnet.io/smart-contracts/supported-chains",randomness:"https://docs.witnet.io/smart-contracts/witnet-randomness-oracle"},k={[b.en]:{code:"en-US",iso:"en-US",name:"ENGLISH",file:"en-US.json"},[b.es]:{code:"es-ES",iso:"es-ES",name:"ESPAÑOL",file:"es-ES.json"}};var W=Object.defineProperty,J=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,T=(e,t,s)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,g=(e,t)=>{for(var s in t||(t={}))Q.call(t,s)&&T(e,s,t[s]);if(M)for(var s of M(t))X.call(t,s)&&T(e,s,t[s]);return e},E=(e,t)=>J(e,Y(t));const Z={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const t=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(t){const s=this.getDropdownViewport(),{top:n,bottom:a,height:o}=t.getBoundingClientRect();if(n<s.top)return this.$refs.dropdownMenu.scrollTop=t.offsetTop;if(a>s.bottom)return this.$refs.dropdownMenu.scrollTop=t.offsetTop-(s.height-o)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},ee={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},te={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},B=(e,t)=>{const s=e.__vccOpts||e;for(const[n,a]of t)s[n]=a;return s},se={},oe={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},ie=u("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),ne=[ie];function ae(e,t){return l(),c("svg",oe,ne)}const le=B(se,[["render",ae]]),re={},ce={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},de=u("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),he=[de];function pe(e,t){return l(),c("svg",ce,he)}const ue=B(re,[["render",pe]]),U={Deselect:le,OpenIndicator:ue},fe={mounted(e,{instance:t}){if(t.appendToBody){const{height:s,top:n,left:a,width:o}=t.$refs.toggle.getBoundingClientRect();let f=window.scrollX||window.pageXOffset,i=window.scrollY||window.pageYOffset;e.unbindPosition=t.calculatePosition(e,t,{width:o+"px",left:f+a+"px",top:i+n+s+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:t}){t.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function me(e){const t={};return Object.keys(e).sort().forEach(s=>{t[s]=e[s]}),JSON.stringify(t)}let ge=0;function we(){return++ge}const ye={components:g({},U),directives:{appendToBody:fe},mixins:[Z,ee,te],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:me(e)}catch(t){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,t)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,t,s){return(t||"").toLocaleLowerCase().indexOf(s.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,t){return e.filter(s=>{let n=this.getOptionLabel(s);return typeof n=="number"&&(n=n.toString()),this.filterBy(s,n,t)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:t}){return e&&!t}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,t)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,t,{width:s,top:n,left:a}){e.style.top=n,e.style.left=a,e.style.width=s}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:t,mutableLoading:s}){return e?!1:t&&!s}},uid:{type:[String,Number],default:()=>we()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:g({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:t=>this.search=t.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:E(g({},e),{deselect:this.deselect}),footer:E(g({},e),{deselect:this.deselect})}},childComponents(){return g(g({},U),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const t=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const s=this.createOption(this.search);this.optionExists(s)||t.unshift(s)}return t},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,t){const s=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,t,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&s()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(t=>this.findOptionFromReducedValue(t)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(t=>!this.optionComparator(t,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(t=>this.reduce(t)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const t=e.target!==this.searchEl;t&&e.preventDefault();const s=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||s.filter(Boolean).some(n=>n.contains(e.target)||n===e.target)){e.preventDefault();return}this.open&&t?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(t=>this.optionComparator(t,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,t){return this.getOptionKey(e)===this.getOptionKey(t)},findOptionFromReducedValue(e){const t=n=>JSON.stringify(this.reduce(n))===JSON.stringify(e),s=[...this.options,...this.pushedTags].filter(t);return s.length===1?s[0]:s.find(n=>this.optionComparator(n,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(t=>this.optionComparator(t,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:t}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:t})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const t=a=>(a.preventDefault(),!this.isComposing&&this.typeAheadSelect()),s={8:a=>this.maybeDeleteValue(),9:a=>this.onTab(),27:a=>this.onEscape(),38:a=>(a.preventDefault(),this.typeAheadUp()),40:a=>(a.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(a=>s[a]=t);const n=this.mapKeydown(s,this);if(typeof n[e.keyCode]=="function")return n[e.keyCode](e)}}},be=["dir"],_e=["id","aria-expanded","aria-owns"],ve={ref:"selectedOptions",class:"vs__selected-options"},Oe=["disabled","title","aria-label","onClick"],Se={ref:"actions",class:"vs__actions"},xe=["disabled"],ke={class:"vs__spinner"},$e=["id"],Ve=["id","aria-selected","onMouseover","onClick"],Ce={key:0,class:"vs__no-options"},Be=$(" Sorry, no matching options. "),Le=["id"];function De(e,t,s,n,a,o){const f=z("append-to-body");return l(),c("div",{dir:s.dir,class:C(["v-select",o.stateClasses])},[d(e.$slots,"header",h(p(o.scope.header))),u("div",{id:`vs${s.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":o.dropdownOpen.toString(),"aria-owns":`vs${s.uid}__listbox`,"aria-label":"Search for option",onMousedown:t[1]||(t[1]=i=>o.toggleDropdown(i))},[u("div",ve,[(l(!0),c(L,null,D(o.selectedValue,(i,r)=>d(e.$slots,"selected-option-container",{option:o.normalizeOptionForSlot(i),deselect:o.deselect,multiple:s.multiple,disabled:s.disabled},()=>[(l(),c("span",{key:s.getOptionKey(i),class:"vs__selected"},[d(e.$slots,"selected-option",h(p(o.normalizeOptionForSlot(i))),()=>[$(O(s.getOptionLabel(i)),1)]),s.multiple?(l(),c("button",{key:0,ref_for:!0,ref:_=>a.deselectButtons[r]=_,disabled:s.disabled,type:"button",class:"vs__deselect",title:`Deselect ${s.getOptionLabel(i)}`,"aria-label":`Deselect ${s.getOptionLabel(i)}`,onClick:_=>o.deselect(i)},[(l(),w(y(o.childComponents.Deselect)))],8,Oe)):v("",!0)]))])),256)),d(e.$slots,"search",h(p(o.scope.search)),()=>[u("input",F({class:"vs__search"},o.scope.search.attributes,j(o.scope.search.events)),null,16)])],512),u("div",Se,[S(u("button",{ref:"clearButton",disabled:s.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:t[0]||(t[0]=(...i)=>o.clearSelection&&o.clearSelection(...i))},[(l(),w(y(o.childComponents.Deselect)))],8,xe),[[P,o.showClearButton]]),d(e.$slots,"open-indicator",h(p(o.scope.openIndicator)),()=>[s.noDrop?v("",!0):(l(),w(y(o.childComponents.OpenIndicator),h(F({key:0},o.scope.openIndicator.attributes)),null,16))]),d(e.$slots,"spinner",h(p(o.scope.spinner)),()=>[S(u("div",ke,"Loading...",512),[[P,e.mutableLoading]])])],512)],40,_e),H(N,{name:s.transition},{default:V(()=>[o.dropdownOpen?S((l(),c("ul",{id:`vs${s.uid}__listbox`,ref:"dropdownMenu",key:`vs${s.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:t[2]||(t[2]=A((...i)=>o.onMousedown&&o.onMousedown(...i),["prevent"])),onMouseup:t[3]||(t[3]=(...i)=>o.onMouseUp&&o.onMouseUp(...i))},[d(e.$slots,"list-header",h(p(o.scope.listHeader))),(l(!0),c(L,null,D(o.filteredOptions,(i,r)=>(l(),c("li",{id:`vs${s.uid}__option-${r}`,key:s.getOptionKey(i),role:"option",class:C(["vs__dropdown-option",{"vs__dropdown-option--deselect":o.isOptionDeselectable(i)&&r===e.typeAheadPointer,"vs__dropdown-option--selected":o.isOptionSelected(i),"vs__dropdown-option--highlight":r===e.typeAheadPointer,"vs__dropdown-option--disabled":!s.selectable(i)}]),"aria-selected":r===e.typeAheadPointer?!0:null,onMouseover:_=>s.selectable(i)?e.typeAheadPointer=r:null,onClick:A(_=>s.selectable(i)?o.select(i):null,["prevent","stop"])},[d(e.$slots,"option",h(p(o.normalizeOptionForSlot(i))),()=>[$(O(s.getOptionLabel(i)),1)])],42,Ve))),128)),o.filteredOptions.length===0?(l(),c("li",Ce,[d(e.$slots,"no-options",h(p(o.scope.noOptions)),()=>[Be])])):v("",!0),d(e.$slots,"list-footer",h(p(o.scope.listFooter)))],40,$e)),[[f]]):(l(),c("ul",{key:1,id:`vs${s.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,Le))]),_:3},8,["name"]),d(e.$slots,"footer",h(p(o.scope.footer)))],10,be)}const Fe=B(ye,[["render",De]]),Pe={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"16",fill:"none",viewBox:"0 0 20 16"},Ae=I('<rect width="20" height="15" y=".5" fill="#fff" rx="1.25"></rect><mask id="mask0_244_496" width="20" height="16" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance;"><rect width="20" height="15" y=".5" fill="#fff" rx="1.25"></rect></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#mask0_244_496)"><path fill="#DD172C" d="M0 4.5h20v-4H0zM0 15.5h20v-4H0z"></path><path fill="#FFD133" d="M0 12h20V5H0z"></path></g>',3),Me=[Ae];function Te(e,t){return l(),c("svg",Pe,[...Me])}const Ee={render:Te},Ue={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"15",fill:"none",viewBox:"0 0 20 15"},Ie=I('<rect width="20" height="15" fill="#fff" rx="1.25"></rect><mask id="mask0_520_1618" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance;"><rect width="20" height="15" fill="#fff" rx="1.25"></rect></mask><g mask="url(#mask0_520_1618)"><path fill="#D02F44" fill-rule="evenodd" d="M20 0H0v1h20zm0 2H0v1h20zM0 4h20v1H0zm20 2H0v1h20zM0 8h20v1H0zm20 2H0v1h20zM0 12h20v1H0zm20 2H0v1h20z" clip-rule="evenodd"></path><path fill="#46467F" d="M0 0h8.571v7H0z"></path><g filter="url(#filter0_d_520_1618)"><path fill="url(#paint0_linear_520_1618)" fill-rule="evenodd" d="M3.81 1.5c0 .276-.214.5-.476.5a.49.49 0 0 1-.477-.5c0-.276.214-.5.477-.5.262 0 .476.224.476.5m-1.905 0c0 .276-.213.5-.476.5a.49.49 0 0 1-.477-.5c0-.276.214-.5.477-.5s.476.224.476.5m3.333.5a.49.49 0 0 0 .476-.5c0-.276-.213-.5-.476-.5a.49.49 0 0 0-.476.5c0 .276.213.5.476.5m2.381-.5c0 .276-.213.5-.476.5a.49.49 0 0 1-.476-.5c0-.276.213-.5.476-.5s.476.224.476.5M2.381 3a.49.49 0 0 0 .476-.5c0-.276-.213-.5-.476-.5a.49.49 0 0 0-.476.5c0 .276.213.5.476.5m2.381-.5c0 .276-.213.5-.476.5a.49.49 0 0 1-.476-.5c0-.276.213-.5.476-.5s.476.224.476.5m1.429.5a.49.49 0 0 0 .476-.5c0-.276-.213-.5-.476-.5a.49.49 0 0 0-.477.5c0 .276.214.5.477.5m1.428.5c0 .276-.213.5-.476.5a.49.49 0 0 1-.476-.5c0-.276.213-.5.476-.5s.476.224.476.5M5.24 4a.49.49 0 0 0 .475-.5c0-.276-.213-.5-.476-.5a.49.49 0 0 0-.476.5c0 .276.213.5.476.5m-1.43-.5c0 .276-.213.5-.475.5a.49.49 0 0 1-.477-.5c0-.276.214-.5.477-.5.262 0 .476.224.476.5M1.43 4a.49.49 0 0 0 .476-.5c0-.276-.213-.5-.476-.5a.49.49 0 0 0-.476.5c0 .276.213.5.476.5m1.428.5c0 .276-.213.5-.476.5a.49.49 0 0 1-.476-.5c0-.276.213-.5.476-.5s.476.224.476.5m1.429.5a.49.49 0 0 0 .476-.5c0-.276-.213-.5-.476-.5a.49.49 0 0 0-.476.5c0 .276.213.5.476.5m2.38-.5c0 .276-.212.5-.475.5a.49.49 0 0 1-.477-.5c0-.276.214-.5.477-.5s.476.224.476.5M7.144 6a.49.49 0 0 0 .476-.5c0-.276-.213-.5-.476-.5a.49.49 0 0 0-.476.5c0 .276.213.5.476.5m-1.429-.5c0 .276-.213.5-.476.5a.49.49 0 0 1-.476-.5c0-.276.213-.5.476-.5s.476.224.476.5m-2.38.5a.49.49 0 0 0 .476-.5c0-.276-.214-.5-.476-.5a.49.49 0 0 0-.477.5c0 .276.214.5.477.5m-1.43-.5c0 .276-.212.5-.475.5a.49.49 0 0 1-.476-.5c0-.276.213-.5.476-.5s.476.224.476.5" clip-rule="evenodd"></path></g></g><defs><linearGradient id="paint0_linear_520_1618" x1=".952" x2=".952" y1="1" y2="6" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#F0F0F0"></stop></linearGradient><filter id="filter0_d_520_1618" width="6.667" height="5.625" x=".952" y="1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy=".625"></feOffset><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_520_1618"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_520_1618" result="shape"></feBlend></filter></defs>',4),ze=[Ie];function je(e,t){return l(),c("svg",Ue,[...ze])}const He={render:je},Ne={key:0,class:"vs__selected"},qe={key:1,class:"vs__selected"},Ke={class:"option"},We=q({__name:"LanguageSwitcher",props:{flag:{type:Boolean,default:!1}},setup(e){const{locale:t,setLocale:s}=K(),n=x({get:()=>t.value,set:f=>{s(f)}}),a=x(()=>Object.values(k).map(f=>f.code)),o=x(()=>({[b.es]:Ee,[b.en]:He}));return(f,i)=>(l(),w(m(Fe),{modelValue:m(n),"onUpdate:modelValue":i[0]||(i[0]=r=>R(n)?n.value=r:null),options:m(a),clearable:!1,filterable:!1,searchable:!1,class:C(["language-selector",{flag:e.flag}])},{"selected-option-container":V(({option:r})=>[e.flag?(l(),c("span",Ne,[(l(),w(y(m(o)[r.label])))])):(l(),c("span",qe,O(m(k)[r.label].name),1))]),option:V(r=>[u("div",Ke,[e.flag?(l(),w(y(m(o)[r.label]),{key:0,class:"dropdown-items"})):v("",!0),u("span",null,O(m(k)[r.label].name),1)])]),_:1},8,["modelValue","options","class"]))}});export{G as B,Ge as U,We as _};
