const Task = require('../models').Task;

module.exports = {
  index: function(request, response){
    Task.findAll().then((tasks) => {
      response.render('tasks/index', {tasks: tasks});
    })
  },
  show: function(request, response){
    Task.findById(request.params.id).then(function(task){
      response.render('tasks/show', {task: task});
    });
  },
  edit: function(request, response){
    Task.findById(request.params.id).then(function(task){
      response.render('tasks/edit', {task: task});
    })
  },
  destroy: function(request, response){
    Task.destroy({
      where: {
	id: request.params.id
      }
    }).then(function(elementsDeleted){
      response.redirect('/tasks');
    })
  },
  create: function(request, response){
    Task.create({
      description: request.body.description
    }).then(result => {
      response.json(result);
    }).catch(error => {
      console.log(error);
      response.json(error);
    })
  },
  update: function(request, respone){
    Task.update({description: request.body.description}, {
      where: {
	id: request.params.id
      }
    }).then(function(response){
      response.redirect(`/tasks/${request.params.id}`);
    })
  },
  new: function(request, response){
    response.render('tasks/new');
  }
};
