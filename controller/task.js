const Task = require('../model/Task')

exports.getTasks = async (ctx) => {
    const tasks = await Task.find({})
    if (!tasks) {
        throw new Error("There was an error retrieving your tasks.")
    } else {
        ctx.body = tasks
    }
}

/*
exports.getTasks = async (ctx) => {
    const taskOne = Task.create({
        name: ctx.request.body.nameTaskOne,
        email: ctx.request.body.emailTaskOne
    })
    const taskTwo = Task.create({
        name: ctx.request.body.nameTaskTwo,
        email: ctx.request.body.emailTaskTwo
    })
    const [t1, t2] = await Promise.all([taskOne, taskTwo])
    if (!t1 || !t2) {
        throw new Error('Tasks failed to be created.')
    } else {
        ctx.body = {message: 'Tasks created!', taskOne: t1, taskTwo: t2}
    }

}*/