(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{224:function(t,e,r){var content=r(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("ae247684",content,!0,{sourceMap:!1})},249:function(t,e,r){t.exports=r.p+"img/4ff995c.png"},250:function(t,e,r){t.exports=r.p+"img/f562bbf.png"},251:function(t,e,r){t.exports=r.p+"img/362cd82.png"},252:function(t,e,r){t.exports=r.p+"img/0614a8f.png"},253:function(t,e,r){t.exports=r.p+"img/79363ae.png"},254:function(t,e,r){t.exports=r.p+"img/9c12f98.png"},255:function(t,e,r){t.exports=r.p+"img/6dc8671.png"},256:function(t,e,r){"use strict";var o=r(224);r.n(o).a},257:function(t,e,r){(e=r(36)(!1)).push([t.i,"*[data-v-94070328]{margin:1rem 0}.content[data-v-94070328]{overflow:scroll}h1[data-v-94070328],h2[data-v-94070328],h3[data-v-94070328],h4[data-v-94070328],h5[data-v-94070328],h6[data-v-94070328]{margin:.2rem .6rem 0 1.6rem;font-size:1.8rem}h2[data-v-94070328]{margin-left:0}h4[data-v-94070328]{text-indent:2rem}.txt-color-deeppink[data-v-94070328]{color:#ff1493}.code[data-v-94070328]{text-indent:2rem;margin:1rem 0;overflow-x:auto;padding:1rem 1rem 1rem 1.5rem;background-color:#eee;border-left:.4rem solid red}.code[data-v-94070328],img[data-v-94070328]{display:block;max-width:35rem}img[data-v-94070328]{overflow-x:auto;overflow:scroll}.shell[data-v-94070328],p[data-v-94070328],span[data-v-94070328]{max-width:35rem}.shell[data-v-94070328]{background-color:#222;color:green;line-height:3.5rem;padding:1rem 3.5rem;overflow-x:auto}img[data-v-94070328]{width:35rem}",""]),t.exports=e},376:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{}}},v=(r(256),r(30)),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"bv-example-row content",attrs:{fluid:""}},[o("b-row",[o("b-col",{attrs:{sm:"0",md:"2",lg:"2",xl:"4"}}),t._v(" "),o("b-col",{attrs:{sm:"12",md:"8",lg:"7",xl:"5"}},[o("h2",[t._v("JavaScript继承")]),t._v(" "),o("hr"),t._v(" "),o("br"),t._v(" "),o("h4",[t._v("1、原型链继承")]),t._v(" "),o("p",{staticClass:"code"},[t._v("构造函数、原型和实例之间的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个原型对象的指针。")]),t._v(" "),o("img",{attrs:{src:r(249),alt:""}}),t._v(" "),o("p",[t._v("原型链方案存在的缺点：多个实例对引用类型的操作会被篡改。")]),t._v(" "),o("img",{attrs:{src:r(250),alt:""}}),t._v(" "),o("h4",[t._v("2、借用构造函数继承")]),t._v(" "),o("p",{staticClass:"code"},[t._v("使用父类的构造函数来增强子类实例，等同于复制父类的实例给子类（不使用原型）")]),t._v(" "),o("img",{attrs:{src:r(251),alt:""}}),t._v(" "),o("p",[t._v("核心代码是SuperType.call(this)，创建子类实例时调用SuperType构造函数，于是SubType的每个实例都会将SuperType中的属性复制一份。")]),t._v(" "),o("i",[t._v("缺点：")]),t._v(" "),o("ul",[o("li",[t._v("只能继承父类的实例属性和方法，不能继承原型属性/方法")]),t._v(" "),o("li",[t._v("无法实现复用，每个子类都有父类实例函数的副本，影响性能")])]),t._v(" "),o("h4",[t._v("3、组合继承")]),t._v(" "),o("p",{staticClass:"code"},[t._v("组合上述两种方法就是组合继承。用原型链实现对原型属性和方法的继承，用借用构造函数技术来实现实例属性的继承。")]),t._v(" "),o("img",{attrs:{src:r(252),alt:""}}),t._v(" "),o("br"),t._v(" "),o("i",[t._v("缺点：")]),t._v(" "),o("ul",[o("li",[t._v("第一次调用SuperType()：给SubType.prototype写入两个属性name，color。")]),t._v(" "),o("li",[t._v("第二次调用SuperType()：给instance1写入两个属性name，color。")])]),t._v(" "),o("p",[t._v("实例对象instance1上的两个属性就屏蔽了其原型对象SubType.prototype的两个同名属性。所以，组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。")]),t._v(" "),o("h4",[t._v("4、寄生式继承")]),t._v(" "),o("i",[t._v("核心：在原型式继承的基础上，增强对象，返回构造函数")]),t._v(" "),o("img",{attrs:{src:r(253),alt:""}}),t._v(" "),o("br"),t._v(" "),o("i",[t._v("缺点")]),t._v(" "),o("ul",[o("li",[t._v("原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。")]),t._v(" "),o("li",[t._v("无法传递参数")])]),t._v(" "),o("h4",[t._v("5、寄生组合式继承")]),t._v(" "),o("p",{staticClass:"code"},[t._v("结合借用构造函数传递参数和寄生模式实现继承")]),t._v(" "),o("br"),t._v(" "),o("img",{attrs:{src:r(254),alt:""}}),t._v(" "),o("p",[t._v("\n        这个例子的高效率体现在它只调用了一次SuperType 构造函数，并且因此避免了在SubType.prototype 上创建不必要的、多余的属性。于此同时，原型链还能保持不变；因此，还能够正常使用instanceof 和isPrototypeOf()\n      ")]),t._v(" "),o("h4",[t._v("\n        ES6类继承extends\n      ")]),t._v(" "),o("p",{staticClass:"code"},[o("span",{staticClass:"txt-color-deeppink"},[t._v("extends")]),t._v(" 关键字主要用于类声明或者类表达式中，以创建一个类，该类是另一个类的子类。其中 "),o("span",{staticClass:"txt-color-deeppink"},[t._v("constructor")]),t._v(" 表示构造函数，一个类中只能有一个构造函数，有多个会报出SyntaxError错误,如果没有显式指定构造方法，则会添加默认的 "),o("span",{staticClass:"txt-color-deeppink"},[t._v("constructor")]),t._v(" 方法，使用例子如下。\n      ")]),t._v(" "),o("img",{attrs:{src:r(255),alt:""}}),t._v(" "),o("hr"),t._v(" "),o("p",{staticClass:"code"},[t._v("\n  Links\n  "),o("br"),t._v(" "),o("a",{attrs:{target:"_blank",href:"https://segmentfault.com/a/1190000011917606",rel:"nofollow noopener noreferrer"}},[t._v("《javascript高级程序设计》笔记：继承")]),t._v(" "),o("br"),t._v(" "),o("a",{attrs:{target:"_blank",href:"https://juejin.im/post/5bcb2e295188255c55472db0",rel:"nofollow noopener noreferrer"}},[t._v("JavaScript常用八种继承方案")]),t._v(" "),o("br"),t._v(" "),o("a",{attrs:{target:"_blank",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create",rel:"nofollow noopener noreferrer"}},[t._v("MDN之Object.create()")]),t._v(" "),o("br"),t._v(" "),o("a",{attrs:{target:"_blank",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes",rel:"nofollow noopener noreferrer"}},[t._v("MDN之Class")])])]),t._v(" "),o("b-col",{attrs:{sm:"0",md:"2",lg:"2",xl:"3"}})],1)],1)}),[],!1,null,"94070328",null);e.default=component.exports}}]);