const intervals = new Map()

export const startTaskReminder = (task) => {

    if (!("Notification" in window)) return

    if (Notification.permission !== "granted") return

    const intervalId = setInterval(() => {

        new Notification("Task Reminder", {
            body: task.title,
        })

    }, 24 * 60 * 60 * 1000) //per 24 hours

    intervals.set(task.id, intervalId)

}


export const stopTaskReminder = (taskId) => {

    const intervalId = intervals.get(taskId)

    if (!intervalId) return

    clearInterval(intervalId)

    intervals.delete(taskId)

}