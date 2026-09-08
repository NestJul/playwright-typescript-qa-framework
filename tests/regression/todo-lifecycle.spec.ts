import { test, expect } from '../../fixtures/test-fixtures';

test('@regression user can complete, filter and clear a task', async ({ todoPage }) => {
  await todoPage.addTodo('Prepare test data');
  await todoPage.addTodo('Run regression suite');
  await todoPage.complete('Prepare test data');

  await todoPage.filter('Completed');
  await expect(todoPage.item('Prepare test data')).toBeVisible();
  await expect(todoPage.item('Run regression suite')).toBeHidden();

  await todoPage.clearCompleted.click();
  await todoPage.filter('All');
  await expect(todoPage.item('Prepare test data')).toHaveCount(0);
  await expect(todoPage.item('Run regression suite')).toBeVisible();
});

test('@regression user can remove one task without affecting another', async ({ todoPage }) => {
  await todoPage.addTodo('First task');
  await todoPage.addTodo('Second task');

  await todoPage.delete('First task');

  await expect(todoPage.item('Second task')).toBeVisible();
  await expect(todoPage.todoCount).toContainText('1 item left');
});
