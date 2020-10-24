/**
1:let 
  1.变量不能重复声明
  2.块级作用域  全局 函数 {}
  3.不会变量提升
  4.块级作用域不影响作用域链

2:const
  1.声明常量
  2.必须要赋初始值
  3.一般为大写
  4.不能修改
  5.块级作用域
  6.声明的数组或对象  修改其中属性不会报错

3:解构赋值
  1.数组的解构赋值
    const f4 = [1,2,3,4]  let [a,b,c,d] = f4 
  2.对象的解构赋值
    const obj = {
      name:a,
      b:function(){
        alert(1)
      }
    }
    let {a,b} =obj

4:模板字符串
  let str =`字符串`
    1.内容可以直接换行
    2.字符串拼接
    
5:简化对象写法
  1.在大括号中直接写变量名和函数，作为对象的属性和方法不用赋值
    let name = 1
    let age = 2
    let obj ={
      name:name,
      age,
    }

6:箭头函数
  1.没有自己的this，始终指向外层函数的this
  2.不能作为构造函数 let Person = function(){ this.name=name}
  3.不能使用 arguments
  4.当形参有且只有一个时可以省略小括号
  5.当代吗只有一条语句时可以省略大括号，且自动return

7:函数参数默认值
  1.一般放在最后
  2.与解构赋值结合
    function connet({host="127.0.0.1",username,password,port}){
      console.log()
    }
    connet({
      host:"localhost",
      username:'root',
      password:'root',
      port:3306
    })

8:rest参数
  1.ES5获取实参arguments==>对象
  2.function aa(...args){}==>数组
  3.rest参数必须放在最后

9:扩展运算符...
  1.将数组转换为逗号分隔的参数序列
  2.数组的合并
    let arr1 = [1,2,3]
    let arr2 = [3,4,5]
    console.log(...arr1,...arr2)
  3.数组的克隆
    只针对简单的数组
    let arr3 =[1,2,3]
    let arr4 =[...arr3]
  4.将伪数组转为真正的数组
    let Dom = document.getelementById('a')
    console.log(...Dom)

10：Symbol
  类似字符串的数据类型
  1.Symbol的值是唯一的，用来解决命名冲突问题
  2.Symbol的值不能与其他数据进行运算
  3.Symbol定义的对象属性不能用for in循环遍历，但是可以用Reflect.ownKeys来获取对象所有的键名(Reflect.ownKeys相当于Object.keys)
    创建Symbol:
      1. let s = Symbol()
      2. let s = Symbol.for()
  4.Symbol.hasInstance
    1.Symbol.hasInstance，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
      比如，1 instanceof Person在语言内部，实际调用的是static[Symbol.hasInstance](params)
    2.Symbol.isConcatSpreadable:
      对象的Symbol.isConcatSpreadable等于的是一个布尔值，表示的是该对象用于Array.prototype.concat()时，后是否可以展开
    3.class Even {
        static [Symbol.hasInstance](params) {
          console.log(typeof Number(params))
          return Number(params) % 2 === 0;
        }
      }
      x = new Even();
      console.log(1 instanceof Even); //false
      console.log(2 instanceof Even); //true
      console.log(x instanceof Even); //true 原本判断x是否为Even的实例的方法，被改成了传入的数字%2===0。所以此刻是false。
      const arr1 = [1,2,3]
      const arr2 = [4,5,6]
      console.log(arr1.concat(arr2))
      arr2[Symbol.isConcatSpreadable] = false
      console.log(arr1.concat(arr2))

11：instanceof
  1.instanceof的普通的用法，obj instanceof Object 检测Object.prototype是否存在于参数obj的原型链上。
    function Person(){};
    var p =new Person();
    console.log(p instanceof Person);//true
  2.继承中判断实例是否属于它的父类
    function Aoo() {}
    function Foo() {}
    Foo.prototype = new Aoo(); //JavaScript 原型继承
    var foo = new Foo();
    console.log(foo instanceof Foo); //true
    console.log(foo instanceof Aoo); //true
  3.原型链图解：
    1.obj只有隐士原型，function有显示原型，由于function是对象，所以function又叫做函数对象，所以function既有__proto__又有prototype
    2.实例对象的__proto__指向构造函数的prototype
    3.构造函数的prototype的构造器constructor指向构造函数本身
    4.由于构造函数也是对象，所以构造函数有__proto__，又由于构造函数是new Function来的，所以构造函数的__proto__指向Function.prototype
    5.Function比较特殊，Function 本身是一个函数。而所有函数都是Function 的实例。所以 Function是Function的实例.他的__proto__和prototype都指向Function.prototype
    6.由于Object也是一个函数对象，所以他的__proto__指向Function的prototype
    7.由于Function.prototype也是对象，所以在往上找只能找到Object.prototype
    8.由于Object.prototype也是对象所以也能往上找，但是由于设计缺陷不能一直往上找（无穷尽）所以Object.prototype.__proto__=null

12：迭代器
    1.迭代器是一种接口，为各种不同的数据结构提供统一的访问机制，任何数据结构只要部署了iterator接口，就可以完成遍历操作
    2.ES6创造了一种新的遍历命令for...of循环，iterator接口主要供给for...of消费
    3.原生具备iterator接口的数据（可用for...of遍历）
      Array
      Arguments
      Set
      Map
      String
      TypedArray
      NodeList
      4.工作原理：
        - 创建一个指针对象，指向当前数据结构的起始位置
        - 第一次调用对象next方法，指针自动指向数据结构的第一个成员
        - 接下来不断调用next方法，指针一直向后移动，直到指向最后一个成员
        - 每次调用next方法都会返回一个包含value和done属性的对象，
      5.let xiyou = ["唐僧", "孙悟空", "猪八戒", "沙僧"];
        for (const itme of xiyou) {
          console.log(itme);
        }
        console.log(xiyou);
        let iterator = xiyou[Symbol.iterator]();
        console.log(iterator);
        //  调用对象next方法
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());

13：生成器
    1.生成器其实就是一个函数
      iterator.next()返回一个对象，只能done和value两个属性，done（是否已完成，到了最后一位），value（下一参数，到最后时为undefind）
        function *gen(arg){
          console.log(arg)
          let one = yield 111  //代码块，类似块级作用域  yield相当于return但是不会跳出
          console.log(one)
          let two = yield 222
          console.log(two)
          let three = yield 333
          console.log(three)
        }
        // 执行迭代器对象
        let iterator = gen('AAA')
        console.log(iterator.next())
        // next可以传入实参
        console.log(iterator.next('BBB'))
        console.log(iterator.next('CCC'))
        console.log(iterator.next('DDD'))

14：Object.assign
    Object.assign()方法的第一个参数是目标对象，后面的参数都是源对象，Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
      1.当目标只有一层且Object.assign第一个参数不为目标对象时为浅拷贝，Object.assign(obj)
      2.当目标只有一层且Object.assign第一个参数为空对象时为深拷贝，Object.assign({},obj)
      3.当目标只有一层且有两个参数时，改变第一个obj为深拷贝，改变第二个obj为浅拷贝，Object.assign(obj1,obj2)
      4.当目标有多层时，只有一个参数为浅拷贝
      5.当目标有多层时，第一个参数为空对象时，只深拷贝目标的第一层，Object.assign({},obj)
      6.当目标有多层时，有多个参数时，只深拷贝第二个参数的最外层，Object.assign({},obj)

15：set
    ES6提供了新的数据结构set（集合）他类似数组，但成员的值都是唯一的，集合实现了iterator接口，可以使用for of和扩展运算符遍历
      1.集合的属性和方法
        - size 返回集合元素个数
        - add 增加一个新元素
        - delete 删除元素，返回boolean
        - has 检测集合中是否包含某个元素，返回boolean
        - clear 清空
      // 声明一个set
      let set = new Set([1, 2, 3, 4, 5, 6, 1, 2, 3]);
      console.log(set); //会自动去重，但是数组对象就不行
      // 添加新元素
      // set.add(7)
      // console.log(set)
      // 删除元素
      // set.delete(6)
      // console.log(set)
      // 检测
      // console.log(set.has(7))
      // 清空
      // set.clear()
      // console.log(set)
      // 遍历
      for (const v of set) {
        console.log(v);
      }

 16：Map
      ES6提供了Map数据结构，它类似对象，也是键值对的集合，但是‘键’的范围不限于字符串，各种类型的值（包括对象）都可以作为键。
      Map也实现了iterator接口，所以可以使用扩展运算符和for...of...进行遍历，Map的属性和方法
        1.size  返回Map元素的个数
        2.set   增加一个新元素，返回当前Map
        3.get   返回键名对象的键值
        4.has   检测Map对象中是否包含某个元素，返回Boolean值
        5.clear 清空结合，返回undefind     
        // 创建一个空Map
        let m = new Map ()
        m.set('name','aaa')
        m.set('change',()=>{
          console.log('函数')
        })
        let key = {
          obj:'对象'
        }
        m.set(key,[1,2,3])
        console.log(m)
        // size
        console.log(m.size)
        // delete
        m.delete('name')
        // 获取
        console.log(m.get('change'))
        // 清空
        // m.clear()
        // 遍历
        for (const v of m) {
          console.log(v)
        }


























































































































































 */