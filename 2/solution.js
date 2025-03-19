const cp = require('lodash');

function makeDeepCopy(val)
{
    return cp.cloneDeep(val);
}

obj = {
    func: function foo() { },
    var: 5,
    nestedObj: {    
        prop1: 'sss',
        prop2: 'ggg',
        nest: {
            val1: 1,
        }
    },
};
obj.itself = obj;
obj_copy = makeDeepCopy(obj);
obj_copy.nestedObj = {
    prop1: 'ggg',
    prop2: 'sss',
    nest: {
        val1: 2,
    }
};
console.log(obj)
console.log(obj_copy)