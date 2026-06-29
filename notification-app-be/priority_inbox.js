
function processPriorityNotification(notification) {
    if (notification.priority === 'CRITICAL') {
        console.log('Sending critical alert to: ' + notification.userId);
    
    } else {
        console.log('Queuing standard notification for: ' + notification.userId);
        
    }
}

module.exports = { processPriorityNotification };