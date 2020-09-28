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
11：Object.assign
    Object.assign()方法的第一个参数是目标对象，后面的参数都是源对象，Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
    1.当目标只有一层且Object.assign第一个参数不为目标对象时为浅拷贝，Object.assign(obj)
    2.当目标只有一层且Object.assign第一个参数为空对象时为深拷贝，Object.assign({},obj)
    3.当目标只有一层且有两个参数时，改变第一个obj为深拷贝，改变第二个obj为浅拷贝，Object.assign(obj1,obj2)
    4.当目标有多层时，只有一个参数为浅拷贝
    5.当目标有多层时，第一个参数为空对象时，只深拷贝目标的第一层，Object.assign({},obj)
    6.当目标有多层时，有多个参数时，只深拷贝第二个参数的最外层，Object.assign({},obj)





























































































































































 */