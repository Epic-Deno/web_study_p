### js内存管理

- 不管什么样的编程语言，在代码的执行过程中都是需要给它分配内存的，不同的是某些编程语言需要我们自己手动
  的管理内存，某些编程语言会可以自动帮助我们管理内存： 

- 不管以什么样的方式来管理内存，内存的管理都会有如下的生命周期： 
  - 第一步：分配申请你需要的内存（申请）；
  - 第二步：使用分配的内存（存放一些东西，比如对象等）；
  - 第三步：不需要使用时，对其进行释放； 

- 不同的编程语言对于第一步和第三步会有不同的实现：
- 手动管理内存：比如C、C++，包括早期的OC，都是需要手动来管理内存的申请和释放的（malloc和free函数）；
- 自动管理内存：比如Java、JavaScript、Python、Swift、Dart等，它们有自动帮助我们管理内存；
-  我们可以知道JavaScript通常情况下是不需要手动来管理的 

- JS对于基本数据类型内存的分配会在执行时，直接在栈空间进行分配； 
- JS对于复杂数据类型内存的分配会在堆内存中开辟一块空间，并且将这块空间的指针返回值变量引用； 

### JS的垃圾回收 

- 因为内存的大小是有限的，所以当内存不再需要的时候，我们需要对其进行释放，以便腾出更多的内存空间。 
- 在手动管理内存的语言中，我们需要通过一些方式自己来释放不再需要的内存，比如free函数 
  - 但是这种管理的方式其实非常的低效，影响我们编写逻辑的代码的效率； 
  - 并且这种方式对开发者的要求也很高，并且一不小心就会产生内存泄露； 
- 所以大部分现代的编程语言都是有自己的垃圾回收机制： 
  - 对于那些不再使用的对象，我们都称之为是垃圾，它需要被回收，以释放更多的内存空间 
  - 而我们的语言运行环境，比如Java的运行环境JVM，JavaScript的运行环境js引擎都会内存 垃圾回收器； 
  - 垃圾回收器我们也会简称为GC，所以在很多地方你看到GC其实指的是垃圾回收器； 
- 但是这里又出现了另外一个很关键的问题：GC怎么知道哪些对象是不再使用的呢？这里就要用到GC的算法了 

#### 常见的GC算法 – 引用计数 

- 当一个对象有一个引用指向它时，那么这个对象的引用就+1，当一个对象的引用为0时，这个对象就可以被销毁掉； 
- 这个算法有一个很大的弊端就是会产生循环引用； 

![1641452799926.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ecb95947c514f638a30d31f3d6611b8~tplv-k3u1fbpfcp-watermark.image?)

```js
// 引用计数存在一个很大的弊端: 循环引用
var obj1 = {friend: obj2}
var obj2 = {friend: obj1}
```

#### 常见的GC算法 – 标记清除 

- 这个算法是设置一个根对象（root object），垃圾回收器会定期从这个根开始，找所有从根开始有引用到的对象，对于哪些没有引用到的对象，就认为是不可用的对象； 
- 这个算法可以很好的解决循环引用的问题； 

![1641453043159.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b28bb494814c4f7dad665eef03287007~tplv-k3u1fbpfcp-watermark.image?)

JS引擎比较广泛的采用的就是标记清除算法，当然类似于V8引擎为了进行更好的优化，它在算法的实现细节上也会结合一些其他的算法。 



