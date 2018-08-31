$(function(){
//	each:对集合循环操作
	_.each([1, 2, 3], function (ele, idx) {
	    console.log("1---",idx + ":" + ele);
	});				
//	map: 对集合以map方式遍历，产生一个新数组
	console.log("2---",
	    _.map([1, 2, 3], function(num){
	        return num * 3;
	    })
	);
//	reduce: 集合元素合并集的到memo,整个数组的和
	console.log("3---",
	    _.reduce([10, 0, 10], function (memo, num) {
	        return memo + num;
	    }, 0)
	);
//	find: 过滤集合中符合条件的第一个元素
	var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
	console.log("4---",even);
//	filter: 过滤集合中符合条件的元素
	console.log("5---",
	    _.filter([1, 2, 3, 4, 5, 6], function(num){
	        return num % 2 == 0;
	    })
	);
//	reject: 过滤集合中不符合条件的元素
	console.log("6---",
	    _.reject([1, 2, 3, 4, 5, 6], function(num){
	        return num % 3 == 0;
	    })
	);
//	where: 遍历list, 返回新的对象数组
	var list = [
	    {title:"AAA",year: 1982},
	    {title:"BBB",year: 1900},
	    {title:"CCC",year: 1982},
	    {title:"DDD",year: 1900},
	    {title:"EEE",year: 1900},
	    {title:"FFF",year: 1900}
	];
	console.log("7---",
	    _.where(list,{year: 1900})
	);
//	contains:判断元素是否在list中
	console.log("8---",
	    _.contains([1, 2, 3], 3)
	);
// 	invoke:通过函数名调用函数运行
	console.log("9---",
	    _.invoke([[5, 1, 7]], 'sort')
	);
//pluck: 提取一个集合里指定的属性值
	var users = [
	    {name: 'moe', age: 40},
	    {name: 'larry', age: 50}
	];
	console.log("10---",
	    _.pluck(users, 'name')
	);
//max,min,sortBy: 取list中的最大,最小元素，自定义比较器
	console.log("11-1",
	    _.max(users, function (stooge) {
	        return stooge.age;
	    })
	);
	var numbers = [10, 5, 100, 2, 1000];
	console.log("11-2",
	    _.min(numbers)
	);
	console.log("11-3",
	    _.sortBy([3, 4, 2, 1 , 6], function (num) {
	        return Math.max(num);
	    })
	);
//groupBy: 把一个集合分组成多个集合
	console.log("12",
	    _.groupBy(['one', 'two', 'three', 'the', 'ee', 'thrlk'], "length")
	);
//countBy: 把一个数据分组后计数
	console.log("13",
	    _.countBy([1, 2, 3, 4, 5], function (num) {
	        return num % 2 == 0 ? 'even' : 'odd';
	    })
	);
//shuffle: 随机打乱一个数据
	console.log("14",
	    _.shuffle([1, 2, 3, 4, 5, 6])
	);
//toArray: 将list转换成一个数组
	console.log("15",
	    (function () {
	        return _.toArray(arguments).slice(1);
	    })(1, 2, 3, 4)
	);
//size: 得到list中元素个数
	console.log("16",
	    _.size({one: 1, two: 2, three: 3, twob: 2, threeg: 3})
	);
//first,last,initial,rest: 数组的元素操作
	var nums = [5, 4, 3, 2, 1];
	console.log("1-1===",_.first(nums));
	console.log("1-2===",_.last(nums));
	console.log("1-3===",_.initial(nums,1));
	console.log("1-4===",_.rest(nums,1));
//	indexOf,lastIndexOf,sortedIndex：取索引位置
	console.log("2-1===",_.indexOf([4, 2, 3, 4, 2], 4));
	console.log("2-2===",_.lastIndexOf([4, 2, 3, 4, 2], 4));
	console.log("2-3===",_.sortedIndex([10, 20, 30, 40, 50], 35));
//range: 创建一个范围整数数组
	console.log("3-1===",_.range(1,10));
	console.log("3-2===",_.range(0, -10, -1));
//compact:数组去除空值
	console.log("4===",
	    _.compact([0, 1, false, 2, '', 3])
	);
//flatten:将一个嵌套多层的数组(嵌套可以是任何层数)转换为只有一层的数组
	console.log("5===",
	    _.flatten([1, [2], [3, [[4]]]])
	);
//without: 去掉元素
	console.log("6===",
	    _.without([1, 2, 1, 0, 3, 1, 4], 0,1 )
	);
//union,intersection,difference,uniq: 并集，交集，差集，取唯一
	console.log("7-1===",_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]));
	console.log("7-2===",_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));
	console.log("7-3===",_.difference([1, 2, 3, 4, 5], [5, 2, 10]));
	console.log("7-4===",_.uniq([1, 2, 1, 3, 1, 2]));
//zip: 合并多个数组中的元素，是group的反向操作
	console.log("8===",
	    _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])
	);
//object: 把数组转换成对象
	console.log("9===",
	    _.object(['moe', 'larry', 'curly'], [30, 40, 50])
	);
//keys,values,paris,invert: 取属性名，取属性值，把对象转换成[key,value]数组，对调键值
	var obj = {one: 1, two: 2, three: 3}
	console.log("1-1---",_.keys(obj));
	console.log("1-2---",_.values(obj));
	console.log("1-3---",_.pairs(obj));
	console.log("1-4---",_.invert(obj));
//has: 判断对象是否包含指定的属性名
	console.log("2---",_.has({a: 1, b: 2, c: 3}, "b"));








});
