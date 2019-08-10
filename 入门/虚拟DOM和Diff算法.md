# 虚拟DOM
## 内部执行流程
1. 用JS对象结构表示DOM树的结构，然后用这个树构建一个真正的DOM树，插到文档当中
2. 当状态变更的时候，重新构造一棵树的对象树。然后用新的树和旧的树进行比较，记录两颗树的差异
3. 把步骤2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了。
## 原理剖析
1. Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。可以类比 CPU 和硬盘，硬盘读取速度比较慢，我们会就在它们之间加缓存条;  
2. 反之, 既然 DOM 运行速度慢，那么我们就在JS 和 DOM 之间加个缓存。JS只操作Virtual DOM，最后的时候再把变更的结果写入DOM。

# diff算法
1. 如果两颗树的根元素类型不同，React会销毁旧树，创建新树
   ```
   //旧树
   <section><Liao/></section>
   //新树
   <div><Liao/></div>
   ```
2. 对于类型相同的React DOM元素，React会对比两者的属性是否相同，只更新不同的属性；当处理完这个DOM节点，React就会递归处理子节点
   ```
   //改变前
   <div className="before" title="zxt">
   //改变后
   <div className="current" title="zxt">
   //只更新className属性
   //改变前
   <div style={{color:'blue',fontSize:'18px'}}/>
   //改变后
   <div style={{color:'green',fontSize:'18px'}} />
   ```
   //只更新color属性
3. 遍历插入元素，如果没有key,React将改变每一个子节点删除重新创建；为解决这个问题，React提供了一个key属性，当子节点带有key属性，React会通过key来匹配原始树和后来的树
   ```
   //原DOM
   <ul>
     <li key=1025>zxt</li>
     <li key="1026">itlike</li>
   </ul>
   //新DOM
   <ul>
     <li key="1024">like zxt</li>
     <li key="1025">zxt</li>
     <li key="1026">itlike</li>
   </ul>
   ```
## key
1. key属性只会在React内部使用，不会传递给组件
2. 在遍历数据时，推荐在组件中使用key属性：\<li key={obj.id}>{obj.t}\</li>;
3. key只需要保持与它的兄弟节点唯一即可，不需要全局唯一
4. 尽可能的减少数组index作为key,数组中插入元素等操作时，会降低效率