exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {
      task_description: 'take a walk',
      task_notes: 'walk notes',
      completed: 0,
      project_id: 1
    },
    {
      task_description: 'run a mile',
      task_notes: 'mile notes',
      completed: 0,
      project_id: 1
    },
    {
      task_description: 'eat food',
      task_notes: 'food notes',
      completed: 0,
      project_id: 2
    },
    {
      task_description: 'read a magazine',
      task_notes: 'magazine notes',
      completed: 0,
      project_id: 2
    },
    {
      task_description: 'code project',
      task_notes: 'code notes',
      completed: 0,
      project_id: 3
    },
    {
      task_description: 'presentation',
      task_notes: 'presentation notes',
      completed: 0,
      project_id: 3
    },
    {
      task_description: 'go on a hike',
      task_notes: 'hike notes',
      completed: 0,
      project_id: 3
    }
  ])
}
