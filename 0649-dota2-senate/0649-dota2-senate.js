/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const radiantQueue = [];
    const direQueue = [];

    // Populate the two queues with radiant + dire.
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            radiantQueue.push(i);
        } else {
            direQueue.push(i);
        }
    }

    // As we don't actually have real queues with dequeue operations, we can't use shift, as O(n),
    // will increase time complexity to O(n^2). We can therefore use a pointer to track the first
    // position in each queue to 'dequeue'
    let radiantFirstPosition = 0;
    let direFirstPosition = 0;

    // As the best move is made, one party will always vs the other. We should keep dequeueing from
    // each queue until one queue is empty, indicating that all remaining votes are of a single
    // party.

    // Normally we'd just check length here, but as we're not removing elements, check index vs last element position. Should be firstPosition < queue.length?
    while (radiantFirstPosition < radiantQueue.length && direFirstPosition < direQueue.length) {
        const radiant = radiantQueue[radiantFirstPosition];
        const dire = direQueue[direFirstPosition];
        // These values are the indexes in the original string. The smaller will always move first.
        if (radiant < dire) {
            radiantQueue.push(radiant + senate.length);
        } else {
            direQueue.push(dire + senate.length);
        }
        radiantFirstPosition++;
        direFirstPosition++;
    }

    return radiantFirstPosition < radiantQueue.length ? 'Radiant' : 'Dire';
};