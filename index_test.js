const test = require("tape");
const Selection = require("./index");


let items = [1, 2, 3, 4, 5];

test("it should add to selection", assert => {
    let select = new Selection(items);

    select.add(0);
    select.add(2);
    select.add(4);

    assert.deepEqual(select.selected, [1, 3, 5]);
    assert.end();
});

test("it should grow selection", assert => {
    let select = new Selection(items);

    select.set(0);

    select.grow();
    select.grow();
    select.grow();

    assert.deepEqual(select.selected, [1, 2, 3, 4]);
    assert.end();
});

test("it should shrink selection", assert => {
    let select = new Selection(items);

    select.set(4);
    select.shrink();
    select.shrink();
    select.shrink();

    assert.deepEqual(select.selected, [2, 3, 4, 5]);
    assert.end();
});