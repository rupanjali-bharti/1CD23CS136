
function maximizeImpact(tasks, budget) {
    const n = tasks.length;
    const dp = Array(n + 1).fill(0).map(function() { 
        return Array(budget + 1).fill(0); 
    });

    for (var i = 1; i <= n; i++) {
        var task = tasks[i - 1];
        var weight = task.Duration;
        var value = task.Impact;

        for (var w = 1; w <= budget; w++) {
            if (weight <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return { totalImpact: dp[n][budget] };
}

module.exports = { maximizeImpact };