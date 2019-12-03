exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      project_name: 'Project One',
      project_description: 'This is a description for project one',
      completed: 0
    },
    {
      project_name: 'Project Two',
      project_description: 'project two description',
      completed: 0
    },
    {
      project_name: 'Project Three',
      project_description: 'this is number Three',
      completed: 0
    }
  ])
}
