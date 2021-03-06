 # vue-code-standard

 > 这套编码规范的作用需要达到的目的是 -->  师出同门


```javascript
一、基于模块开发
    what: 始终基于模块的方式来构建你的 app，每一个子模块只做一件事情。
    how : 
        1.每一个 Vue 组件（等同于模块）首先必须专注于解决一个单一的问题，独立的、可复用的、微小的 和 可测试的。
        2.如果你的组件做了太多的事或是变得臃肿，请将其拆分成更小的组件并保持单一的原则
        3.尽量保证每一个文件的代码行数不要超过 100 行,也请保证组件可独立的运行,
          比较好的做法是增加一个单独的 demo 示例。
```
```javascript
二、组件结构化vue 方法放置顺序
    why : 
        1.导出一个清晰、组织有序的组件，使得代码易于阅读和理解。同时也便于标准化。
        2.按首字母排序 data、computed、watches 和 methods 使得这些对象内的属性便于查找。
    how :    
        export default {
            name : "componentName", // 组件的 name 和 组建的class名保持一致
            components : [],
            mixins: [],  // 使用组件 mixins 共享通用功能
            extends: {}, // 组成新的组件
            props : {},  // props和data里的变量按字母A-Z的顺序排列
            data () {},
            computed : {},
            filter : {},
            watch : {},
            metods : {},
            created () {},
            mounted () {},
            activited () {},
            update () {},
            beforeRouteUpdate () {},
            destroyed () {}
        }
```
```JavaScript
三、props规范
    (1).组件props原子化:
        what: 虽然 Vue.js 支持通过 props 属性传递复杂的 JavaScript 对象，但是应该尽可能的使用
              原始类型的数据(string,number,boolean和function)。
        why : 
            1.使得组件 API 清晰直观。
            2.其它开发者更好的理解每一个 prop 的含义、作用。
            3.传递过于复杂的对象使得我们不能够清楚的知道哪些属性或方法被自定义组件使用，这使得代码难以重构和维护。
        how : 
              组件的每一个属性单独使用一个 props
        good：
            <range-slider
                :values="[10, 20]"
                min="0"
                max="100"
                step="5"
                :on-slide="updateInputs"
                :on-end="updateResults">
            </range-slider>
        bad:
            <range-slider :config="complexConfigObject"></range-slider>
    (2).验证组件的props
        what:
            1.在 Vue.js 中，组件的 props 即 API，一个稳定并可预测的 API 会使得你的组件更容易被其他开发者使用。
            2.组件 props 通过自定义标签的属性来传递,你需要保证组件的 props 能应对不同的情况。
        why :
            1.验证组件 props 可以保证你的组件永远是可用的（防御性编程）。
            2.即使其他开发者并未按照你预想的方法使用时也不会出错。
        how :
            1.提供默认值,default
            2.使用 type 属性校验类型。
            3.使用 props 之前先检查该 prop 是否存在。
            4.实际用法：https://cn.vuejs.org/v2/guide/components.html#Prop-%E9%AA%8C%E8%AF%81
```
```JavaScript
四、method 自定义方法命名
    1.驼峰命名
        good: getListData
        bad : get_list_data、getlistData
    2.动宾短语 
        good：jumpPage、openCarInfoDialog
        bad ：go、nextPage、show、open、login
    3.ajax 方法以 get、post 开头，以 data 结尾
        good：getListData、postFormData
        bad ：takeData、confirmData、getList、postForm
    4.事件方法以 on 开头
        good: onTypeChange、onUsernameInput
    5.尽量使用常用单词开头
        set、get、open、close、jump
```
```JavaScript
五、vue实例及component中的this指向
    1.使用 ES6 箭头函数
    2.使用 ES5 需要将this赋值给component变量， var $this = this
```
```JavaScript
六、避免this.$parent,this.$refs,this.$children
    (1).避免this.$parent，this.$children
        what : Vue.js 支持组件嵌套，并且子组件可访问父组件的上下文。
            访问组件之外的上下文违反了基于模块开发的第一原则,因此应该尽量避免使用 this.$parent
        why  : 
            1.组件必须相互保持独立，Vue 组件也是。如果组件需要访问其父层的上下文就违反了该原则。
            2.如果一个组件需要访问其父组件的上下文，那么该组件将不能在其它上下文中复用。
        how  : 
            1.通过 props 将值传递给子组件。
            2.通过 props 传递回调函数给子组件来达到调用父组件方法的目的 
            3.通过在子组件触发事件来通知父组件      
    (2).谨慎使用this.$refs
```
```JavaScript
七、提供组件API文档
    what :
           1.使用 Vue.js 组件的过程中会创建 Vue 组件实例，这个实例是通过自定义属性配置的。
           2.为了便于其他开发者使用该组件，对于这些自定义属性即组件API应该在 README.md 文件中进行说明。
    why  : 
           1.良好的文档可以让开发者比较容易的对组件有一个整体的认识，而不用去阅读组件的源码，也更方便开发者使用。
           2.组件配置属性即组件的 API，对于组件的用户来说他们更感兴趣的是 API 而不是实现原理。
           3.正式的文档会告诉开发者组件 API 变更以及向后的兼容性情况。
           4.README.md 的标准应该是首先阅读的文档文件。
    how  : 
           参考element-UI组件文档介绍
 ```
 ```JavaScript
八、只在需要时创建组件
    why : Vue.js 是一个基于组件的框架。如果你不知道何时创建组件可能会导致以下问题
          1.如果组件太大, 可能很难重用和维护
          2.如果组件太小，你的项目就会（因为深层次的嵌套而）被淹没，也更难使组件间通信
    how : 
          1.始终记住为你的项目需求构建你的组件，但是你也应该尝试想到它们能够从中脱颖而出（独立于项目之外）,
            如果它们能够在你项目之外工作，就像一个库那样，就会使得它们更加健壮和一致
          2.尽可能早地构建你的组件总是更好的，因为这样使得你可以在一个已经存在和稳定的组件上构建你的组件间通信（props & events）
    rules:
          1.首先，尽可能早地尝试构建出诸如模态框、提示框、工具条、菜单、头部等这些明显的（通用型）组件,
            总之，你知道的这些组件以后一定会在当前页面或者是全局范围内需要。
          2.第二，在每一个新的开发项目中，对于一整个页面或者其中的一部分，在进行开发前先尝试思考一下,
            如果你认为它有一部分应该是一个组件，那么就创建它吧。
          3.最后，如果你不确定，那就不要。避免那些“以后可能会有用”的组件污染你的项目,
            它们可能会永远的只是（静静地）待在那里，这一点也不聪明。
            注意，一旦你意识到应该这么做，最好是就把它打破，以避免与项目的其他部分构成兼容性和复杂性。
```
```JavaScript
九、尽可能使用 mixins
    why : 
        1.Mixins 封装可重用的代码，避免了重复。如果两个组件共享有相同的功能，则可以使用 mixin。
        2.通过 mixin，你可以专注于单个组件的任务和抽象的通用代码。这有助于更好地维护你的应用程序。
    how : 
          假设你有一个移动端和桌面端的菜单组件，它们共享一些功能。我们可以抽象出这两个组件的核心功能到一个 mixin 中
        // 例如
        const MenuMixin = {
            data () {
                return {
                    language: 'EN'
                }
            },
        
            methods: {
                changeLanguage () {
                    if (this.language === 'DE') this.$set(this, 'language', 'EN')
                    if (this.language === 'EN') this.$set(this, 'language', 'DE')
                }
            }
        }
        export default MenuMixin
        //要使用 mixin，只需将其导入到两个组件中（我只展示移动组件）
        <template>
            <ul class="mobile">
                <li @click="changeLanguage">Change language</li>
            </ul>
        </template>

        <script>
            import MenuMixin from './MenuMixin'

            export default {
                mixins: [MenuMixin]
            }
        </script>
```
```JavaScript
十、组件表达式简单化
    why : 
          1.复杂的行内表达式难以阅读。
          2.行内表达式是不能够通用的，这可能会导致重复编码的问题。
    how : 如果你发现写了太多复杂并难以阅读的行内表达式，那么可以使用 method 或是 computed 属性来替代其功能。
```
```JavaScript
十一、vue组件命名
    why : 组件是通过组件名来调用的。所以组件名必须简短、富有含义并且具有可读性。
    rules: 
        1.有意义的  --> 不过于具体，也不过于抽象
        2.简短      --> 2 到 3 个单词
        3.具有可读性 --> 以便于沟通交流
        4.必须符合自定义元素规范 --> 使用连字符分隔单词，切勿使用保留字。
        5.xx- 前缀作为命名空间 --> 如果非常通用的话可使用一个单词来命名，这样可以方便于其它项目里复用。
    how : 
        <!-- 推荐 -->
        <app-header></app-header>
        <user-list></user-list>
        <range-slider></range-slider>

        <!-- 避免 -->
        <btn-group></btn-group> <!-- 虽然简短但是可读性差. 使用 `button-group` 替代 -->
        <ui-slider></ui-slider> <!-- ui 前缀太过于宽泛，在这里意义不明确 -->
        <slider></slider> <!-- 与自定义元素规范不兼容 -->
```
```JavaScript
十二、关于注释
    -- 以下情况务必添加注释
        1.公共组件使用说明
        2.各组件中重要函数或者类说明
        3.复杂的业务逻辑处理说明
        4.特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的hack、使用了某种算法
          或思路等需要进行注释描述
        5.注释块必须以 /**（至少两个星号）开头**/；
        6.单行注释使用 //
    -- 单行注释
        1.普通方法一般使用单行注释 --> 来说明该方法主要作用
    -- 多行注释 --> 组件使用说明，和调用说明 
        1.公用组件 --> 数据表格形式
        /**
        * 组件名称
        * @module 组件存放位置
        * @desc 组件描述
        * @author 组件作者
        * @date 2017年12月05日17:22:43
        * @param {Object} [title]    - 参数说明
        * @param {String} [columns]  - 参数说明
        * @example 调用示例
        * <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
        ***********/
```
```JavaScript
十三、其他
    1.debugger  console 等调试信息在上线前务必删除
    2.DOM操作请使用指令，尽量避免documen.get....
    3.文件统一UTF-8格式
    4.页面级的.vue 文件有唯一ID
    5.登录安全（双重验证）
      前端路由验证：首先全局路由拦截router.beforeEach，看sessionStorage是否存在验证。
      http请求和响应验证：看后台返回token是否过期，不过期就执行删除sessionStorage 操作，并重新登录。
```







 

